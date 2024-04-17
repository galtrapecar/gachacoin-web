import { useLocation, useNavigate } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useSDK } from '@metamask/sdk-react';
import { walletAtom, walletPopupStatusAtom } from '../../state';
import AccountField from '../AccountField/AccountField';
import BalanceField from '../BalanceField/BalanceField';
import Button from '../Button/Button';
import Icons from '../../assets/icons';
import useWallet from '../../hooks/useWallet';
import Web3 from 'web3';

const Header = () => {
  const { balance } = useSDK();
  const navigate = useNavigate();
  const location = useLocation();
  const setWalletPopUpStatus = useSetRecoilState(walletPopupStatusAtom);
  const { connectWallet } = useWallet();
  const wallet = useRecoilValue(walletAtom);

  const openPopUp = () => {
    setWalletPopUpStatus(true);
  };

  const isWalletConnected = () => wallet;

  const navItems = [
    {
      label: 'About',
      route: '/about',
      isVisible: () => true,
    },
    {
      label: 'Catalogue',
      route: '/catalogue',
      isVisible: isWalletConnected,
    },
    {
      label: 'Marketplace',
      route: '/marketplace',
      isVisible: isWalletConnected,
    },
    {
      label: 'Avatar',
      route: '/avatar',
      isVisible: isWalletConnected,
    },
    {
      label: <Icons.GearIcon width={24} height={24} />,
      route: '/settings',
      isVisible: () => true,
    },
  ];

  const getButton = () => {
    if (wallet != null) {
      return (
        <Button
          style={'walletConnected'}
          label={'Wallet connected'}
          icon={<Icons.CheckmarkIcon />}
        />
      );
    }
    return (
      <Button
        style={'primary'}
        label={'Connect wallet'}
        onClick={() => {
          if (wallet) {
            openPopUp();
          } else {
            connectWallet();
          }
        }}
      />
    );
  };

  const getFields = () => {
    if (!wallet || !wallet.account) return null;
    const balanceEth = String(
      Web3.utils.fromWei(Web3.utils.hexToNumber(balance || '0x0'), 'ether'),
    );
    return (
      <div className="Header__center__fields">
        <AccountField account={wallet.account} />
        <BalanceField
          balance={balanceEth}
          symbol="MATIC"
          icon={Icons.MaticCoin}
        />
        <BalanceField
          balance={String(0)}
          symbol="GCH"
          icon={<Icons.Coin width={24} height={24} />}
        />
      </div>
    );
  };

  return (
    <div
      className="Header"
      style={
        location.pathname !== '/'
          ? { borderBottom: '1px solid transparent' }
          : undefined
      }
    >
      <div className="Header__left">
        <div className="Header__logo" onClick={() => navigate('/')}>
          GachaCoin
        </div>
        {getButton()}
      </div>
      <div className="Header__center">{getFields()}</div>

      <div className="Header__right">
        <div className="Header__nav">
          {navItems.map((navItem) => {
            if (!navItem.isVisible()) return;
            return (
              <div
                key={navItem.route}
                className={[
                  'Header__nav__item',
                  `${location.pathname === navItem.route ? 'selected' : ''}`,
                ].join(' ')}
                onClick={() => navigate(navItem.route)}
              >
                {navItem.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
