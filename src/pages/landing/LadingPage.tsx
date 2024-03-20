import useSpeedLines from "../../hooks/useSpeedLines";

const LandingPage = () => {
  const Canvas = useSpeedLines();
  return (
    <div className="LandingPage">
      <div className="LandingPage__background">{Canvas}</div>
    </div>
  );
};

export default LandingPage;
