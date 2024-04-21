import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { walletAtom } from '../state';

const useWallet = () => {
  const setWallet = useSetRecoilState(walletAtom);
  const provider = window.ethereum;

  useEffect(() => {
    if (window && provider?.isMetaMask) {
      addWalletListener();
      if (localStorage.getItem('prevConnection') === 'true') {
        reconnectWallet();
      }

      return () => {
        if (provider) {
          provider.removeListener('accountsChanged', handleAccountChange);
          provider.removeListener('chainChanged', handleChainChange);
        }
      };
    } else {
      console.warn('Please install MetaMask');
    }
  }, []);

  const connectWallet = async () => {
    // logic to connect the wallet
    if (window !== undefined && provider) {
      // metamask installed
      try {
        const accounts = (await provider.request({
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
    if (provider) {
      try {
        // revoke permissions
        await provider.request({
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
    if (window !== undefined && provider) {
      // provider installed
      try {
        // get connected accounts
        const accounts = (await provider.request({
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
    if (provider) {
      provider.on('accountsChanged', handleAccountChange);
      provider.on('chainChanged', handleChainChange);
    }
  };

  // wallet listener handlers
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

  const handleChainChange = async (...args: unknown[]) => {
    const [chain] = args as string[];
    localStorage.removeItem('prevConnection');
    window.location.reload();
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
