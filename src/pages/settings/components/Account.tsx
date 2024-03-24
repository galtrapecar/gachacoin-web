import { useRecoilValue } from 'recoil';
import CardHeader from '../../../components/CardHeader/CardHeader';
import { walletAtom } from '../../../state';
import ConnectWalletMessage from './ConnectWalletMessage/ConnectWalletMessage';

const Account = () => {
  const wallet = useRecoilValue(walletAtom);
  return (
    <div className="Account SettingsPage__card">
      <CardHeader title={'Account'} subtitle={'アカウント'} />
      {!wallet && <ConnectWalletMessage />}
    </div>
  );
};

export default Account;
