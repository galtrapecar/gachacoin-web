export type RainbowBorderProps = {
  backgroundColor: string;
  borderRadius: number;
  width: number;
};

const RainbowBorder = ({
  backgroundColor,
  borderRadius,
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
          backgroundColor: backgroundColor,
          borderRadius: borderRadius * 0.64,
          width: `calc(100% - ${width * 2}px)`,
          height: `calc(100% - ${width * 2}px)`,
        }}
      ></div>
    </div>
  );
};

export default RainbowBorder;
