import { useRecoilValue } from 'recoil';
import CardHeader from '../../../components/CardHeader/CardHeader';
import { walletAtom } from '../../../state';
import ConnectWalletMessage from './ConnectWalletMessage/ConnectWalletMessage';

const Avatar = () => {
  const wallet = useRecoilValue(walletAtom);
  return (
    <div className="Avatar SettingsPage__card">
      <CardHeader title={'GachaMon'} subtitle={'ガチャモン'} />
      {!wallet && <ConnectWalletMessage />}
    </div>
  );
};

export default Avatar;
