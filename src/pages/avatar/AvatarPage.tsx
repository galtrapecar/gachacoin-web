import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import PageHeading from '../../components/PageHeading/PageHeading';
import {
  Card,
  avatarAtom,
  cardsFilterAtom,
  filteredCards,
  symbolAtom,
} from '../../state';
import AvatarIcons from '../../assets/avatar';
import Drawer from '../../components/Drawer/Drawer';
import { useState } from 'react';
import CatalogueCard from '../../components/CatalogueCard/CatalogueCard';

const AvatarPage = () => {
  const symbol = useRecoilValue(symbolAtom);
  const cards = useRecoilValue(filteredCards);
  const setCardFilter = useSetRecoilState(cardsFilterAtom);
  const [avatar, setAvatar] = useRecoilState(avatarAtom);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isCardSelected = (partSerial: number) => {
    if (avatar.lookupTable[partSerial] === 1) return true;
    return false;
  };

  const getSelectedClass = (serial: number) => {
    if (isCardSelected(serial)) {
      return 'selected';
    }
    return;
  };

  const selectCard = (card: Card) => {
    let newAvatar = { ...avatar };
    switch (card.serial) {
      case 1:
        newAvatar.head = card;
        break;
      case 2:
        newAvatar.body = card;
        break;
      case 3:
        newAvatar.armLeft = card;
        break;
      case 4:
        newAvatar.armRight = card;
        break;
      case 5:
        newAvatar.legs = card;
        break;
    }
    newAvatar.lookupTable = [...avatar.lookupTable];
    newAvatar.lookupTable[card.serial] = 1;
    setAvatar(newAvatar);
    setDrawerOpen(false);
  };

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
            <AvatarIcons.Head
              strokeDasharray={'10 10'}
              opacity={isCardSelected(1) ? 0 : undefined}
            />
          </div>
          <div className="AvatarPage__avatar__body">
            <div
              className="AvatarPage__avatar__arm--left"
              onClick={() => {
                setCardFilter(3);
                setDrawerOpen(true);
              }}
            >
              <AvatarIcons.ArmLeft
                strokeDasharray={'10 10'}
                opacity={isCardSelected(3) ? 0 : undefined}
              />
            </div>
            <AvatarIcons.Body
              opacity={isCardSelected(2) ? 0 : undefined}
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
              <AvatarIcons.ArmRight
                strokeDasharray={'10 10'}
                opacity={isCardSelected(4) ? 0 : undefined}
              />
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
              <AvatarIcons.FootLeft
                strokeDasharray={'10 10'}
                opacity={isCardSelected(5) ? 0 : undefined}
              />
            </div>
            <div className="AvatarPage__avatar__foot--right">
              <AvatarIcons.FootRight
                strokeDasharray={'10 10'}
                opacity={isCardSelected(5) ? 0 : undefined}
              />
            </div>
          </div>
          <div className="AvatarPage__avatar__render">
            {Object.values(avatar).map((card) => {
              if (!card || Array.isArray(card)) return;
              return <img src={card.image} />;
            })}
          </div>
        </div>
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <div className="AvatarPage__drawerCards">
            {cards.map((card) => (
              <div
                key={card.name}
                className={`AvatarPage__drawerCards__card ${getSelectedClass(card.serial)}`}
                onClick={() => selectCard(card)}
              >
                <CatalogueCard {...card} />
              </div>
            ))}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default AvatarPage;
