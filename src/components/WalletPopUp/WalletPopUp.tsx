import React, { useEffect } from 'react';
import Button from '../Button/Button';
import Icons from '../../assets/icons';
import RainbowBorder from '../RainbowBorder/RainbowBorder';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { walletAtom, walletPopupStatusAtom } from '../../state';
import { useSDK } from '@metamask/sdk-react';

export type WalletPopUpProps = {
  isVisible: boolean;
};

const WalletPopUp = ({ isVisible }: WalletPopUpProps) => {
  const { sdk } = useSDK();
  const setWalletPopUpStatus = useSetRecoilState(walletPopupStatusAtom);
  const [wallet, setWallet] = useRecoilState(walletAtom);

  const closePopUp = () => {
    setWalletPopUpStatus(false);
  };

  // removes scroll for the page while the pop-up is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      if (window.location.pathname === '/') {
        // if you are on landing page
        document.body.style.overflow = 'hidden'; // disable scroll
      } else {
        // anywhere else
        document.body.style.overflow = 'initial'; // enable scroll
      }
    };
  }, [isVisible]);

  const connectMetamask = async () => {
    try {
      const accounts = (await sdk?.connect()) as string[];
      setWallet({
        type: 'metamask',
        accounts: Array.isArray(accounts) ? accounts : undefined,
        account: accounts?.[0],
      });
    } catch (err) {
      console.warn('failed to connect..', err);
    } finally {
      closePopUp();
    }
  };

  const getTitle = () => {
    if (!wallet) return 'Select the wallet to connect';
    return `Connected to ${wallet.type.toLocaleUpperCase()}`;
  };

  const getIcons = () => {
    if (!wallet) {
      return (
        <>
          <Icons.MetaMaskIcon width={153} height={141} />
        </>
      );
    }
    if (wallet.type === 'phantom') {
      return <Icons.PhantomIcon width={169} height={141} />;
    }
    if (wallet.type === 'metamask') {
      return <Icons.MetaMaskIcon width={153} height={141} />;
    }
  };

  return isVisible ? (
    <>
      <div
        className={`WalletPopUp ${wallet ? 'WalletPopUp__selected' : undefined}`}
      >
        <RainbowBorder background={'#ffffff'} borderRadius={25} width={10} />
        <h1>{getTitle()}</h1>
        <div className="WalletPopUp__icons">{getIcons()}</div>

        {!wallet && (
          <>
            <Button
              style="primary"
              label="Use MetaMask"
              borderWidth={6}
              onClick={() => connectMetamask()}
            />
          </>
        )}
      </div>
      <div className="WalletPopUp__overlay" onClick={closePopUp} />
    </>
  ) : null;
};

export default WalletPopUp;
