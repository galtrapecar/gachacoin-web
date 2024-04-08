import { useState } from 'react';
import RainbowBorder from '../RainbowBorder/RainbowBorder';

export type ButtonProps = {
  borderWidth?: number;
  bubbleLabel?: string;
  icon?: JSX.Element;
  label: string;
  onClick?: () => void;
  style: 'primary' | 'secondary' | 'tertiary' | 'walletConnected';
};

const Button = ({
  borderWidth = 2,
  bubbleLabel,
  icon,
  label,
  onClick,
  style,
}: ButtonProps) => {
  const [bubble, setBubble] = useState(false);

  const renderBubble = () => {
    return bubble && bubbleLabel ? (
      <div className="Button__bubble">{bubbleLabel}</div>
    ) : null;
  };

  const bubbleClick = () => {
    if (onClick) {
      onClick();
      setBubble(true);
      setTimeout(() => {
        setBubble(false);
      }, 2000);
    }
  };

  return style === 'primary' || style === 'walletConnected' ? (
    <div className={`Button ${style}`} onClick={bubbleClick}>
      {renderBubble()}
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
    <div className={`Button ${style}`} onClick={bubbleClick}>
      {renderBubble()}
      <div className="Button__label">
        {icon}
        {label}
      </div>
    </div>
  );
};

export default Button;
