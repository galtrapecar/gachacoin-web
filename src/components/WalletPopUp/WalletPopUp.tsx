import React from "react";
import Button from "../Button/Button";
import Icons from "../../assets/icons";
import RainbowBorder from "../RainbowBorder/RainbowBorder";

export type WalletPopUpProps = {
  isVisible: boolean;
};

const WalletPopUp = ({ isVisible }: WalletPopUpProps) => {
  return isVisible ? (
    <div className="WalletPopUp">
      <RainbowBorder backgroundColor={"#ffffff"} borderRadius={25} width={10} />
      <h1>Select the wallet to connect</h1>
      <div>
        <Icons.PhantomIcon width={169} height={141} />
        <Icons.MetaMaskIcon width={153} height={141} />
      </div>

      <Button style="primary" label="Use MetaMask" />
      <Button style="primary" label="Use Phantom" />
    </div>
  ) : null;
};

export default WalletPopUp;
