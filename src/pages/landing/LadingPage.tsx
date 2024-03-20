import useSpeedLines from "../../hooks/useSpeedLines";

const LandingPage = () => {
  const Canvas = useSpeedLines();
  return (
    <div className="LandingPage">
      <div className="LandingPage__background">{Canvas}</div>
      <div className="LandingPage__about">
        <div className="LandingPage__about__fold" />
      </div>
    </div>
  );
};

export default LandingPage;
