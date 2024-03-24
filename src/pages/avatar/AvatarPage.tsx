import { useRecoilValue } from 'recoil';
import PageHeading from '../../components/PageHeading/PageHeading';
import { symbolAtom } from '../../state';
import AvatarIcons from '../../assets/avatar';
import Icons from '../../assets/icons';

const AvatarPage = () => {
  const symbol = useRecoilValue(symbolAtom);
  return (
    <div className="AvatarPage">
      <PageHeading title={'GachaMon'} symbol={symbol} subtitle={'ガチャモン'} />
      <div className="AvatarPage__avatar">
        <div className="AvatarPage__avatar__head">
          <AvatarIcons.Head strokeDasharray={'10 10'} />
        </div>
        <div className="AvatarPage__avatar__body">
          <div className="AvatarPage__avatar__arm--left">
            <AvatarIcons.ArmLeft strokeDasharray={'10 10'} />
          </div>
          <AvatarIcons.Body className='AvatarPage__avatar__body--body' strokeDasharray={'10 10'} />
          <div className="AvatarPage__avatar__arm--right">
            <AvatarIcons.ArmRight strokeDasharray={'10 10'} />
          </div>
        </div>
        <div className="AvatarPage__avatar__feet">
          <div className="AvatarPage__avatar__foot--left">
            <AvatarIcons.FootLeft strokeDasharray={'10 10'} />
          </div>
          <div className="AvatarPage__avatar__foot--right">
            <AvatarIcons.FootRight strokeDasharray={'10 10'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarPage;
