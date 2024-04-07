import Web3 from 'web3';

type BalanceFieldProps = {
  balance: string;
  symbol: string;
  icon?: JSX.Element;
};

const BalanceField = ({ balance, symbol, icon }: BalanceFieldProps) => {
  return (
    <div className="BalanceField">
      <div className="BalanceField__details">
        <div className="BalanceField__details__balance">
          {`${balance} ${symbol}`}
        </div>
        <div className="BalanceField__icon">{icon}</div>
      </div>
    </div>
  );
};

export default BalanceField;
