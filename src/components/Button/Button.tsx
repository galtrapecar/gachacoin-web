import { useRef, useState } from 'react';
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
  const bubbleRef = useRef<any>();
  const [bubble, setBubble] = useState(false);

  const renderBubble = () => {
    return bubbleLabel ? (
      <div className={`Button__bubble ${bubble ? 'show' : ''}`}>{bubbleLabel}</div>
    ) : null;
  };

  const bubbleClick = () => {
    if (onClick) {
      clearTimeout(bubbleRef.current)
      onClick();
      setBubble(true);
      bubbleRef.current = setTimeout(() => {
        setBubble(false);
      }, 1800);
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
