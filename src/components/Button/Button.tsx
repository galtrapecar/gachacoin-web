export type ButtonProps = {
  icon?: JSX.Element;
  label: string;
  style: "primary" | "secondary" | "tertiary";
  handlePopup: () => void
};

const Button = ({ label, icon, style, handlePopup }: ButtonProps) => {

  return <div className={`Button ${style}`} onClick={() => handlePopup()}>
      <div className="Button__background" />
      <div className="Button__label">{icon}{label}</div>
    </div>
}

export default Button;
