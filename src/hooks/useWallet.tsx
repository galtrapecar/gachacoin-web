import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { walletAtom } from '../state';

const useWallet = () => {
  const [wallet, setWallet] = useRecoilState(walletAtom);

  useEffect(() => {
    if (window && window.ethereum?.isMetaMask) {
      addWalletListener();
      if (localStorage.getItem('prevConnection') === 'true') {
        reconnectWallet();
      }

      return () => {
        if (window.ethereum) {
          window.ethereum.removeListener(
            'accountsChanged',
            handleAccountChange,
          );
        }
      };
    } else {
      console.warn('Please install MetaMask');
    }
  }, []);

  const connectWallet = async () => {
    // logic to connect the wallet
    if (window !== undefined && window.ethereum) {
      // metamask installed
      try {
        const accounts = (await window.ethereum.request({
          method: 'eth_requestAccounts',
        })) as string[];
        if (accounts && accounts.length > 0) {
          updateWallet(accounts);
          // indicator to next time connect automatically
          localStorage.setItem('prevConnection', JSON.stringify(true));
        } else {
          console.warn('No accounts were retrieved from MetaMask');
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const disconnectWallet = async () => {
    // logic to disconnect the wallet
    if (window.ethereum) {
      try {
        // revoke permissions
        await window.ethereum.request({
          method: 'wallet_revokePermissions',
          params: [
            {
              eth_accounts: {},
              eth_requestAccounts: {},
            },
          ],
        });
        // reflect the disconnection
        setWallet(null);
      } catch (err) {
        console.error('Failed to revoke permissions:', err);
      }
    }
  };

  const reconnectWallet = async () => {
    if (window !== undefined && window.ethereum) {
      // metamask installed
      try {
        // get connected accounts
        const accounts = (await window.ethereum.request({
          method: 'eth_accounts',
        })) as string[];
        if (accounts && accounts.length > 0) {
          updateWallet(accounts);
        } else {
          console.warn('No accounts were retrieved from MetaMask');
        }
      } catch (err) {
        console.error('MetaMask connection error:', err);
      }
    }
  };

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountChange);
    }
  };

  const handleAccountChange = async (...args: unknown[]) => {
    const [accounts] = args as [string[]];
    if (accounts.length === 0) {
      disconnectWallet();
      localStorage.removeItem('prevConnection');
      window.location.reload();
    } else {
      updateWallet(accounts);
    }
  };

  const updateWallet = (accounts: string[]) => {
    setWallet({
      type: 'metamask',
      accounts: accounts,
      account: accounts[0],
    });
  };

  return {
    connectWallet,
  };
};

export default useWallet;
