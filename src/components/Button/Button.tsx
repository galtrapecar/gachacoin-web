import RainbowBorder from "../RainbowBorder/RainbowBorder";

export type ButtonProps = {
  icon?: JSX.Element;
  label: string;
  onClick?: () => void;
  style: "primary" | "secondary" | "tertiary";
};

const Button = ({ label, icon, style, onClick }: ButtonProps) => {
  return (
    <div className={`Button ${style}`} onClick={onClick}>
      <RainbowBorder backgroundColor={"#000000"} borderRadius={25} width={2} />
      <div className="Button__label">
        {icon}
        {label}
      </div>
    </div>
  );
};

export default Button;
