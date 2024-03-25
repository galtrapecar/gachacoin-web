import packageJson from '../package.json';

export enum Routes {
  LandingPage = '/',
  AboutPage = '/about',
  AvatarPage = '/avatar',
  CataloguePage = '/catalogue',
  MarketplacePage = '/marketplace',
  SettingsPage = '/settings',
}

export const VERSION = packageJson.version;