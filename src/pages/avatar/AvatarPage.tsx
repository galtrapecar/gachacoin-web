import { useRecoilValue } from 'recoil';
import PageHeading from '../../components/PageHeading/PageHeading';
import { symbolAtom } from '../../state';

const AvatarPage = () => {
  const symbol = useRecoilValue(symbolAtom);
  return (
    <div className="AvatarPage">
      <PageHeading title={'Avatar'} symbol={symbol} subtitle={'アバター'} />
    </div>
  );
};

export default AvatarPage;
