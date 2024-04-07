import { useEffect, useRef } from 'react';
import jazzicon from '@metamask/jazzicon';
import Button from '../Button/Button';

type AccountFieldProps = {
  account: string;
  ethBalance?: string;
};

const AccountField = ({ account, ethBalance }: AccountFieldProps) => {
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = iconRef.current;
    if (element && account) {
      const addr = account.slice(2, 10);
      const seed = parseInt(addr, 16);
      const icon = jazzicon(24, seed);
      if (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      element.appendChild(icon);
    }
  }, [account, iconRef]);

  return (
    <div className="AccountField">
      <div className="AccountField__details">
        <div className="AccountField__details__balance">{ethBalance} ETH</div>

        <Button
          style="secondary"
          onClick={() => {}}
          label={[
            account.slice(0, 5),
            account.slice(account.length - 3, account.length),
          ].join('...')}
          bubbleLabel="bubble"
        />

      </div>
      <div className="AccountField__icon" ref={iconRef} />
    </div>
  );
};

export default AccountField;
