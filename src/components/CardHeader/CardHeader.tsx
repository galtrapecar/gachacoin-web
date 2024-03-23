type CardHeaderProps = {
  title: string;
  subtitle: string;
};

const CardHeader = ({ title, subtitle }: CardHeaderProps) => {
  return (
    <div className="CardHedaer">
      <div className="CardHeader__title">{title}</div>
      <div className="CardHeader__subtitle">{subtitle}</div>
    </div>
  );
};

export default CardHeader;
