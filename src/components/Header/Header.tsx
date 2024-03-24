import { useLocation, useNavigate } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { walletAtom, walletPopupStatusAtom } from '../../state';
import Button from '../Button/Button';
import Icons from '../../assets/icons';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setWalletPopUpStatus = useSetRecoilState(walletPopupStatusAtom);
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
    if (wallet) {
      return (
        <Button
          style={'walletConnected'}
          label={'Wallet connected'}
          icon={<Icons.CheckmarkIcon />}
          onClick={() => openPopUp()}
        />
      );
    }
    return (
      <Button
        style={'primary'}
        label={'Connect wallet'}
        onClick={() => openPopUp()}
      />
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
      <div className="Header__logo" onClick={() => navigate('/')}>
        GachaCoin
      </div>

      {getButton()}
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
  );
};

export default Header;
