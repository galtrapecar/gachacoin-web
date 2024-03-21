export type ButtonProps = {
  icon?: JSX.Element;
  label: string;
  style: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
};

const Button = ({ label, icon, style, onClick }: ButtonProps) => {
  return (
    <div className={`Button ${style}`} onClick={onClick}>
      <div className="Button__background" />
      <div className="Button__label">
        {icon}
        {label}
      </div>
    </div>
  );
};

export default Button;
