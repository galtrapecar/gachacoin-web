import { atom } from 'recoil';

export enum AppColor {
  Blue = 'blue',
  Green = 'green',
  Pink = 'pink',
}

export enum AppSymbol {
  Dot = '•',
  Star = '★',
  Heart = '♥',
}

export const symbolAtom = atom({
  key: 'symbolAtom',
  default: AppSymbol.Dot,
});

export const colorAtom = atom({
  key: 'colorAtom',
  default: AppColor.Blue,
});

export type Wallet = {
  type: 'phantom' | 'metamask';
};

export const walletAtom = atom<Wallet | null>({
  key: 'walletAtom',
  default: null,
});

export const walletPopupStatusAtom = atom({
  key: 'walletPopupStatusAtom',
  default: false,
});
