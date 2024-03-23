import { Route, Routes as Switch } from "react-router";
import { Routes } from "./config";
import LandingPage from "./pages/landing/LadingPage";
import Header from "./components/Header/Header";
import CataloguePage from "./pages/catalogue/CataloguePage";
import AboutPage from "./pages/about/AboutPage";
import MarketplacePage from "./pages/marketplace/Marketplace";
import SettingsPage from "./pages/settings/SettingsPage";
import { useRecoilValue } from "recoil";
import { WalletPopupStatusAtom } from "./state";
import WalletPopUp from "./components/WalletPopUp/WalletPopUp";
import { colorAtom } from "./state";
import { appColorToHex } from "./util";

function App() {
  const WalletPopUpStatus = useRecoilValue(WalletPopupStatusAtom);
  const color = useRecoilValue(colorAtom);
  return (
    <div className="App" style={{ background: appColorToHex(color) }}>
      <Header />
      <WalletPopUp isVisible={WalletPopUpStatus} />
      <Switch>
        <Route path={Routes.LandingPage} element={<LandingPage />} />
        <Route path={Routes.AboutPage} element={<AboutPage />} />
        <Route path={Routes.CataloguePage} element={<CataloguePage />} />
        <Route path={Routes.MarketplacePage} element={<MarketplacePage />} />
        <Route path={Routes.SettingsPage} element={<SettingsPage />} />
      </Switch>
    </div>
  );
}

export default App;
