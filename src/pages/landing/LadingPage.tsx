import useSpeedLines from '../../hooks/useSpeedLines';
import Button from '../../components/Button/Button';
import SpinPopup from '../../components/SpinPopup/SpinPopup';
import { spinPopupStatusAtom } from '../../state';
import { useRecoilState } from 'recoil';

const LandingPage = () => {
  const Canvas = useSpeedLines();
  const [popupStatus, setPopupStatus] = useRecoilState(spinPopupStatusAtom);

  const displayPopup = () => {
    setPopupStatus(true);
  };

  return (
    <div className="LandingPage">
      <SpinPopup isVisible={popupStatus} />
      <div className="LandingPage__background">{Canvas}</div>
      <div className="LandingPage__about">
        <div className="LandingPage__about__fold" />
      </div>
      <Button
        style="primary"
        label="SPIN"
        borderWidth={8}
        onClick={() => displayPopup()}
      />
    </div>
  );
};

export default LandingPage;

// FIXME: Scroll across the entire app is funky
// FIXME: Button positioning is not constant when resizing
