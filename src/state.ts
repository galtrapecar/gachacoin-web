import { atom } from "recoil";

export enum AppColor {
  Blue = 'blue',
  Green = 'green',
  Pink = 'pink',
}

export const symbolAtom = atom({
  key: "symbolAtom",
  default: "•",
});

export const colorAtom = atom({
  key: "colorAtom",
  default: AppColor.Blue,
});
