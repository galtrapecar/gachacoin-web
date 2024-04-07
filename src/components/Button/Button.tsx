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
  const [bubbleVisible, setBubbleVisible] = useState(false);

  const bubbleShow = () => {
    setBubbleVisible(true);
  };

  const bubbleHide = () => {
    setBubbleVisible(false);
  };

  const renderBubble = () => {
    return bubbleLabel && bubbleVisible ? (
      <div className="Bubble">{bubbleLabel}</div>
    ) : null;
  };

  return style === 'primary' || style === 'walletConnected' ? (
    <div
      className={`Button ${style}`}
      onClick={onClick}
      onMouseEnter={bubbleShow}
      onMouseLeave={bubbleHide}
    >
      <RainbowBorder
        background={'#000000'}
        borderRadius={999}
        width={borderWidth}
      />
      {renderBubble()}
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
