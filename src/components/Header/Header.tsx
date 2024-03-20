import { redirect, useLocation, useNavigate } from "react-router";
import Button from "../Button/Button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isWalletConnected = () => false;

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
      label: "Settings",
      route: "/settings",
      isVisible: () => true,
    },
  ];

  return (
    <div
      className="Header"
      style={location.pathname !== "/" ? { border: "none" } : undefined}
    >
      <div className="Header__logo">GachaCoin</div>
      <Button style="primary" label={"Connect wallet"} />
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
