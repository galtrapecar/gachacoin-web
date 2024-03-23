import { useRecoilValue } from 'recoil';
import PageHeading from '../../components/PageHeading/PageHeading';
import { symbolAtom } from '../../state';
import AppSettings from './components/AppSettings';
import Avatar from './components/Avatar';
import Account from './components/Account';

const SettingsPage = () => {
  const symbol = useRecoilValue(symbolAtom);

  return (
    <div className="SettingsPage">
      <PageHeading title={'Settings'} symbol={symbol} subtitle={'セッテイ'} />
      <div className="SettingsPage__column">
        <div className="SettingsPage__row">
          <AppSettings />
          <Avatar />
        </div>
        <div className="SettingsPage__row">
          <Account />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
