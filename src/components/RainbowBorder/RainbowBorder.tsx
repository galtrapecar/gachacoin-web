export type RainbowBorderProps = {
  background: string;
  borderRadius: number;
  overlayRadius?: number;
  width: number;
};

const RainbowBorder = ({
  background,
  borderRadius,
  overlayRadius,
  width,
}: RainbowBorderProps) => {
  return (
    <div
      className="RainbowBorder"
      style={{
        borderRadius: borderRadius,
      }}
    >
      <div
        className="RainbowBorder__overlay"
        style={{
          background: background,
          borderRadius: overlayRadius || borderRadius * 0.64,
          width: `calc(100% - ${width * 2}px)`,
          height: `calc(100% - ${width * 2}px)`,
        }}
      ></div>
    </div>
  );
};

export default RainbowBorder;
