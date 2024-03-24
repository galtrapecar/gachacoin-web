import { atom, selector } from 'recoil';
import { Doge } from './assets/images';

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

type Card = {
  name: string;
  link: string;
  image: any;
  serial: number;
  collection: string;
  collectionImage: any;
};

const cards = [
  {
    name: 'Doge Head',
    link: '../../assets/images/doge_head.png',
    image: Doge.Head,
    serial: 1,
    collection: 'Doge',
    collectionImage: Doge.Collection,
  },
  {
    name: 'Doge Body',
    link: '../../assets/images/doge_body.png',
    image: Doge.Body,
    serial: 2,
    collection: 'Doge',
    collectionImage: Doge.Collection,
  },
  {
    name: 'Doge Left Arm',
    link: '../../assets/images/doge_arm_left.png',
    image: Doge.ArmLeft,
    serial: 3,
    collection: 'Doge',
    collectionImage: Doge.Collection,
  },
  {
    name: 'Doge Right Arm',
    link: '../../assets/images/doge_arm_right.png',
    image: Doge.ArmRight,
    serial: 4,
    collection: 'Doge',
    collectionImage: Doge.Collection,
  },
  {
    name: 'Doge Legs',
    link: '../../assets/images/doge_legs.png',
    image: Doge.Legs,
    serial: 5,
    collection: 'Doge',
    collectionImage: Doge.Collection,
  },
];

export const cardsAtom = atom({
  key: 'cardsAtom',
  default: cards,
});

export const cardsFilterAtom = atom<number | null>({
  key: 'cardsFilterAtom',
  default: null,
});

export const filteredCards = selector<Card[]>({
  key: 'filteredCards',
  get: ({ get }) => {
    let cards = get(cardsAtom);
    let filter = get(cardsFilterAtom);
    if (!filter) return cards;
    return cards.filter((card) => card.serial === filter);
  },
});
