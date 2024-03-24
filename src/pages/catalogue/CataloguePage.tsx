import React from 'react';
import { useRecoilValue } from 'recoil';
import PageHeading from '../../components/PageHeading/PageHeading';
import { symbolAtom } from '../../state';
import CatalogueCard from '../../components/CatalogueCard/CatalogueCard';
import { Doge } from '../../assets/images';

const CataloguePage = () => {
  const symbol = useRecoilValue(symbolAtom);

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

  return (
    <div className="CataloguePage">
      <PageHeading title={'Catalogue'} symbol={symbol} subtitle={'カタログ'} />
      <div className="CataloguePage__cards">
        {cards.map((card, index) => (
          <CatalogueCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CataloguePage;
