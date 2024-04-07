import RainbowBorder from '../RainbowBorder/RainbowBorder';

export type ButtonProps = {
  borderWidth?: number;
  icon?: JSX.Element;
  label: string;
  onClick?: () => void;
  style: 'primary' | 'secondary' | 'tertiary' | 'walletConnected';
};

const Button = ({
  borderWidth = 2,
  icon,
  label,
  onClick,
  style,
}: ButtonProps) => {
  return style === 'primary' ? (
    <div className={`Button ${style}`} onClick={onClick}>
      <RainbowBorder
        background={'#000000'}
        borderRadius={999}
        width={borderWidth}
      />
      <div className="Button__label">
        {icon}
        {label}
      </div>
    </div>
  ) : (
    <div className={`Button ${style}`} onClick={onClick}>
      <div className="Button__label">
        {icon}
        {label}
      </div>
    </div>
  );
};

export default Button;
