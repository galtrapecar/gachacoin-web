import { redirect, useLocation, useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { WalletPopupStatusAtom } from "../../state";
import Button from "../Button/Button";
import Icons from "../../assets/icons";
import WalletPopUp from "../WalletPopUp/WalletPopUp";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isWalletConnected = () => false;
  const [WalletPopUpStatus, setWalletPopUpStatus] = useRecoilState(
    WalletPopupStatusAtom
  );

  const closePopUp = () => {
    setWalletPopUpStatus(!WalletPopUpStatus);
  };

  const navItems = [
    {
      label: "About",
      route: "/about",
      isVisible: () => true,
    },
    {
      label: "Catalogue",
      route: "/catalogue",
      isVisible: () => true,
    },
    {
      label: "Marketplace",
      route: "/marketplace",
      isVisible: () => true,
    },
    {
      label: "Avatar",
      route: "/avatar",
      isVisible: isWalletConnected,
    },
    {
      label: <Icons.GearIcon width={24} height={24} />,
      route: "/settings",
      isVisible: () => true,
    },
  ];

  return (
    <div
      className="Header"
      style={
        location.pathname !== "/"
          ? { borderBottom: "1px solid transparent" }
          : undefined
      }
    >
      <div className="Header__logo" onClick={() => navigate("/")}>
        GachaCoin
      </div>
      <WalletPopUp isVisible={WalletPopUpStatus} />
      <Button
        style="primary"
        label={"Connect wallet"}
        onClick={() => closePopUp()}
      />
      <div className="Header__nav">
        {navItems.map((navItem) => {
          if (!navItem.isVisible()) return;
          return (
            <div
              key={navItem.route}
              className={[
                "Header__nav__item",
                `${location.pathname === navItem.route ? "selected" : ""}`,
              ].join(" ")}
              onClick={() => navigate(navItem.route)}
            >
              {navItem.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
