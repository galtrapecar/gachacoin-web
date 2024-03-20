export type ButtonProps = {
  icon?: JSX.Element;
  label: string;
  style: "primary" | "secondary" | "tertiary";
};

const Button = ({ label, icon, style }: ButtonProps) => {
  return (
    <div className={`Button ${style}`}>
      <div className="Button__background" />
      <div className="Button__label">{icon}{label}</div>
    </div>
  );
};

export default Button;
