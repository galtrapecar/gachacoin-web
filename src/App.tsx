import { Route, Routes as Switch } from 'react-router';
import { Routes } from './config';
import LandingPage from './pages/landing/LandingPage';
import Header from './components/Header/Header';
import CataloguePage from './pages/catalogue/CataloguePage';
import AboutPage from './pages/about/AboutPage';
import MarketplacePage from './pages/marketplace/Marketplace';
import SettingsPage from './pages/settings/SettingsPage';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  AppColor,
  AppSymbol,
  symbolAtom,
  walletPopupStatusAtom,
} from './state';
import WalletPopUp from './components/WalletPopUp/WalletPopUp';
import { colorAtom } from './state';
import { appColorToHex } from './util';
import AvatarPage from './pages/avatar/AvatarPage';
import { useLayoutEffect } from 'react';

function App() {
  const walletPopUpStatus = useRecoilValue(walletPopupStatusAtom);
  const setSymbol = useSetRecoilState(symbolAtom);
  const [color, setColor] = useRecoilState(colorAtom);

  useLayoutEffect(() => {
    const color = localStorage.getItem('color');
    const symbol = localStorage.getItem('symbol');
    if (color) setColor(color as AppColor);
    if (symbol) setSymbol(symbol as AppSymbol);
  }, []);

  return (
    <div className="App" style={{ background: appColorToHex(color) }}>
      <Header />
      <WalletPopUp isVisible={walletPopUpStatus} />
      <Switch>
        <Route path={Routes.LandingPage} element={<LandingPage />} />
        <Route path={Routes.AboutPage} element={<AboutPage />} />
        <Route path={Routes.AvatarPage} element={<AvatarPage />} />
        <Route path={Routes.CataloguePage} element={<CataloguePage />} />
        <Route path={Routes.MarketplacePage} element={<MarketplacePage />} />
        <Route path={Routes.SettingsPage} element={<SettingsPage />} />
      </Switch>
    </div>
  );
}

export default App;
