import { spinPopupStatusAtom } from '../../state';
import { useSetRecoilState } from 'recoil';
import Button from '../Button/Button';
import RainbowBorder from '../RainbowBorder/RainbowBorder';
import Icons from '../../assets/icons/index';

export type SpinPopupProps = {
  isVisible: boolean;
};

const SpinPopup = ({ isVisible }: SpinPopupProps) => {
  const setSpinPopupStatus = useSetRecoilState(spinPopupStatusAtom);

  const closePopup = () => {
    setSpinPopupStatus(false);
  };

  const part = {
    name: 'Doge arm',
    collection: 'Doge',
    supply: 5,
    value: 0.3,
  };

  return isVisible ? (
    <div className="SpinPopup">
      <RainbowBorder width={10} borderRadius={25} background={'#ffffff'} />
      <p className="__banner">Congratulations!</p>
      <p className="__text">You received:</p>
      <div className="__icon__container"></div>
      <p className="__part">{part.name}</p>
      <p className="__info">Collection: {part.collection}</p>
      <p className="__info">Supply: {part.supply}</p>
      <div className="__value__container">
        <p className="__text">Value {part.value}</p>
        <Icons.EthIcon width={27.5} height={45} />
        <p className="__text"> ETH</p>
      </div>

      <Button
        style="primary"
        label="Open collection"
        borderWidth={3.5}
        onClick={() => closePopup()}
      />
    </div>
  ) : null;
};

export default SpinPopup;

// FIXME: Add icon to he button
// TODO: Add part icon instead of placeholder
// TODO: Add shader behind popup
