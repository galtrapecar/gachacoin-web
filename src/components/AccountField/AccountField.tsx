import { useEffect, useRef } from 'react';
import jazzicon from '@metamask/jazzicon';
import { useSDK } from '@metamask/sdk-react';
import Web3 from 'web3';
import Button from '../Button/Button';

type AccountFieldProps = {
  account: string;
};

const AccountField = ({ account }: AccountFieldProps) => {
  const { chainId, provider } = useSDK();
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = iconRef.current;
    if (element && account) {
      const addr = account.slice(2, 10);
      const seed = parseInt(addr, 16);
      const icon = jazzicon(24, seed);
      if (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      element.appendChild(icon);
    }
  }, [account, iconRef]);

  const isPolygonMumbai = () => {
    const chainIdInt = Web3.utils.hexToNumber(chainId || '0x0');
    if (chainIdInt !== 80001) return false;
    return true;
  };

  const addPolygonChain = async () => {
    if (!provider) return;
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainName: 'Polygon Mumbai',
            chainId: Web3.utils.toHex(80001),
            nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
            rpcUrls: ['https://polygon-mumbai-bor-rpc.publicnode.com'],
          },
        ],
      });
    } catch (error) {
      console.warn('Rejected chain add...', error);
    }
  };

  const switchToPolygon = async () => {
    if (!provider) return;
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: Web3.utils.toHex(80001) }],
      });
    } catch (err: any) {
      // This error code indicates that the chain has not been added to MetaMask
      if (err.code === 4902) {
        addPolygonChain();
      }
    }
  };

  const copyWallet = async () => {
    try {
      await navigator.clipboard.writeText(account);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AccountField">
      <div className="AccountField__details">
        {isPolygonMumbai() && (
          <Button
            style="secondary"
            onClick={copyWallet}
            label={[
              account.slice(0, 5),
              account.slice(account.length - 3, account.length),
            ].join('...')}
            bubbleLabel="Copied to clipboard"
          />
        )}
        {!isPolygonMumbai() && (
          <div
            className="AccountField__details__button"
            onClick={() => switchToPolygon()}
          >
            Switch to Polygon
          </div>
        )}
      </div>
      <div className="AccountField__icon" ref={iconRef} />
    </div>
  );
};

export default AccountField;
