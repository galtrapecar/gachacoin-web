import React from 'react';
import { useRecoilValue } from 'recoil';
import PageHeading from '../../components/PageHeading/PageHeading';
import { cardsAtom, symbolAtom } from '../../state';
import CatalogueCard from '../../components/CatalogueCard/CatalogueCard';

const CataloguePage = () => {
  const symbol = useRecoilValue(symbolAtom);
  const cards = useRecoilValue(cardsAtom);

  return (
    <div className="CataloguePage">
      <PageHeading title={'Catalogue'} symbol={symbol} subtitle={'カタログ'} />
      <div className="CataloguePage__cards">
        {cards.map((card, index) => (
          <CatalogueCard key={card.name + index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CataloguePage;
