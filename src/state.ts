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

export const WalletConnectedAtom = atom({
  key: 'WalletConnectedAtom',
  default: false,
});

export const WalletPopupStatusAtom = atom({
  key: 'WalletPopupStatusAtom',
  default: false,
});
