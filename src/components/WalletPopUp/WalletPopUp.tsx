import React, { useEffect } from 'react';
import Button from '../Button/Button';
import Icons from '../../assets/icons';
import RainbowBorder from '../RainbowBorder/RainbowBorder';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { walletAtom, walletPopupStatusAtom } from '../../state';

export type WalletPopUpProps = {
  isVisible: boolean;
};

const WalletPopUp = ({ isVisible }: WalletPopUpProps) => {
  const setWalletPopUpStatus = useSetRecoilState(walletPopupStatusAtom);
  const [wallet, setWallet] = useRecoilState(walletAtom);

  const closePopUp = () => {
    setWalletPopUpStatus(false);
    document.body.style.overflow = 'unset'; // makes the page scrollable
  };

  // removes scroll for the page while the pop-up is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    }
  }, [isVisible]);

  const selectPhantom = () => {
    setWallet({
      type: 'phantom',
    });
    closePopUp();
  };

  const selectMetamask = () => {
    setWallet({
      type: 'metamask',
    });
    closePopUp();
  };

  const getTitle = () => {
    if (!wallet) return 'Select the wallet to connect';
    return `Connected to ${wallet.type.toLocaleUpperCase()}`;
  };

  const getIcons = () => {
    if (!wallet) {
      return (
        <>
          <Icons.PhantomIcon width={169} height={141} />
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
              label="Use Phantom"
              borderWidth={6}
              onClick={() => selectPhantom()}
            />
            <Button
              style="primary"
              label="Use MetaMask"
              borderWidth={6}
              onClick={() => selectMetamask()}
            />
          </>
        )}
      </div>
      <div className="WalletPopUp__overlay" onClick={closePopUp} />
    </>
  ) : null;
};

export default WalletPopUp;
