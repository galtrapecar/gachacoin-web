import { atom } from "recoil";

export const symbolAtom = atom({
  key: "symbolAtom",
  default: "•",
})

export const WalletConnectedAtom = atom({
  key: "WalletConnectedAtom",
  default: false,
})

export const WalletPopupStatusAtom = atom({
  key: "WalletPopupStatusAtom",
  default: false,
})
