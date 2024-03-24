import { useRecoilValue, useSetRecoilState } from 'recoil';
import PageHeading from '../../components/PageHeading/PageHeading';
import { cardsFilterAtom, filteredCards, symbolAtom } from '../../state';
import AvatarIcons from '../../assets/avatar';
import Drawer from '../../components/Drawer/Drawer';
import { useState } from 'react';
import CatalogueCard from '../../components/CatalogueCard/CatalogueCard';

const AvatarPage = () => {
  const symbol = useRecoilValue(symbolAtom);
  const cards = useRecoilValue(filteredCards);
  const setCardFilter = useSetRecoilState(cardsFilterAtom);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="AvatarPage">
      <PageHeading title={'GachaMon'} symbol={symbol} subtitle={'ガチャモン'} />
      <div
        style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}
      >
        <div className="AvatarPage__avatar">
          <div
            className="AvatarPage__avatar__head"
            onClick={() => {
              setCardFilter(1);
              setDrawerOpen(true);
            }}
          >
            <AvatarIcons.Head strokeDasharray={'10 10'} />
          </div>
          <div className="AvatarPage__avatar__body">
            <div
              className="AvatarPage__avatar__arm--left"
              onClick={() => {
                setCardFilter(3);
                setDrawerOpen(true);
              }}
            >
              <AvatarIcons.ArmLeft strokeDasharray={'10 10'} />
            </div>
            <AvatarIcons.Body
              className="AvatarPage__avatar__body--body"
              strokeDasharray={'10 10'}
              onClick={() => {
                setCardFilter(2);
                setDrawerOpen(true);
              }}
            />
            <div
              className="AvatarPage__avatar__arm--right"
              onClick={() => {
                setCardFilter(4);
                setDrawerOpen(true);
              }}
            >
              <AvatarIcons.ArmRight strokeDasharray={'10 10'} />
            </div>
          </div>
          <div
            className="AvatarPage__avatar__feet"
            onClick={() => {
              setCardFilter(5);
              setDrawerOpen(true);
            }}
          >
            <div className="AvatarPage__avatar__foot--left">
              <AvatarIcons.FootLeft strokeDasharray={'10 10'} />
            </div>
            <div className="AvatarPage__avatar__foot--right">
              <AvatarIcons.FootRight strokeDasharray={'10 10'} />
            </div>
          </div>
        </div>
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <div className="AvatarPage__drawerCards">
            {cards.map((card) => (
              <CatalogueCard key={card.name} {...card} />
            ))}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default AvatarPage;
