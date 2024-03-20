export type PageHeadingProps = {
  title: string;
  symbol: string;
  subtitle: string;
};

const PageHeading = ({ title, symbol, subtitle }: PageHeadingProps) => {
  return (
    <div className="PageHeading">
      <div className="PageHeading__wrapper">
        <div className="PageHeading__title">{title}</div>
        <div className="PageHeading__symbol">{symbol}</div>
        <div className="PageHeading__subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default PageHeading;
