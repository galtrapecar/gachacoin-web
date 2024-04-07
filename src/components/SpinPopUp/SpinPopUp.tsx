import { cardsAtom, spinPopupStatusAtom } from '../../state';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Button from '../Button/Button';
import RainbowBorder from '../RainbowBorder/RainbowBorder';
import Icons from '../../assets/icons/index';
import { useEffect, useRef, useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { Doge } from '../../assets/images';
import { useNavigate } from 'react-router';
import { Routes } from '../../config';

export type SpinPopUpProps = {
  isVisible: boolean;
};

const SpinPopUp = ({ isVisible }: SpinPopUpProps) => {
  const navigate = useNavigate();
  const timeoutRef = useRef<any>(null);
  const setSpinPopUpStatus = useSetRecoilState(spinPopupStatusAtom);
  const [cards, setCards] = useRecoilState(cardsAtom);
  const [loading, setLoading] = useState(true);

  const closePopUp = () => {
    setLoading(true);
    setSpinPopUpStatus(false);
  };

  const part = {
    name: 'Doge Left Arm',
    collection: 'Doge',
    supply: 5,
    value: 0.3,
    image: Doge.ArmLeft,
  };

  useEffect(() => {
    if (isVisible) {
      setLoading(true);
      clearTimeout(timeoutRef.current);
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        const cardToAdd = {
          name: 'Doge Left Arm',
          link: '../../assets/images/doge_arm_left.png',
          image: Doge.ArmLeft,
          serial: 3,
          collection: 'Doge',
          collectionImage: Doge.Collection,
        };
        if (cards.length !== 5) {
          setCards(
            [...cards, cardToAdd].sort((cardA, cardB) => {
              if (cardA.serial < cardB.serial) return -1;
              if (cardA.serial > cardB.serial) return 1;
              return 0;
            }),
          );
        }
        setLoading(false);
      }, 5000);
      timeoutRef.current = timeout;
    } else {
      setLoading(true);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div className="SpinPopUp">
        <RainbowBorder width={10} borderRadius={25} background={'#ffffff'} />
        {loading ? (
          <ProgressBar
            visible={true}
            height="300"
            width="300"
            ariaLabel="progress-bar-loading"
          />
        ) : (
          <>
            <p className="SpinPopUp__banner">Congratulations!</p>
            <p className="SpinPopUp__text">You received:</p>
            <div className="SpinPopUp__icon__container">
              <img src={part.image} />
            </div>
            <p className="SpinPopUp__part">{part.name}</p>
            <p className="SpinPopUp__info">Collection: {part.collection}</p>
            <p className="SpinPopUp__info">Supply: {part.supply}</p>
            <div className="SpinPopUp__value__container">
              <p className="SpinPopUp__text">Value {part.value}</p>
              <Icons.EthIcon width={27.5} height={45} />
              <p className="SpinPopUp__text"> ETH</p>
            </div>
            <Button
              style="primary"
              label="Open collection"
              borderWidth={3.5}
              onClick={() => {
                closePopUp();
                navigate(Routes.CataloguePage);
              }}
            />
          </>
        )}
      </div>
      <div className="SpinPopUp__overlay" onClick={closePopUp} />
    </>
  );
};

export default SpinPopUp;
