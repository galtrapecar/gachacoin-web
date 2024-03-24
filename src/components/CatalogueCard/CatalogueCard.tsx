import React from 'react';
import RainbowBorder from '../RainbowBorder/RainbowBorder';

export type CatalogueCardProps = {
  collection: string;
  collectionImage?: string;
  image?: string;
  name: string;
  serial: number;
};

const CatalogueCard = ({
  collection,
  collectionImage,
  image,
  name,
  serial,
}: CatalogueCardProps) => {
  return (
    <div className="CatalogueCard">
      <div className="CatalogueCard__image__container">
        <div className="CatalogueCard__image">
          <RainbowBorder
            background={`white url(${image})`}
            width={3}
            borderRadius={8}
            overlayRadius={6}
          />
        </div>
      </div>
      <div className="CatalogueCard__text__container">
        <p className="CatalogueCard__title">{name}</p>
        <p className="CatalogueCard__serial">
          {serial} of 5 in {collection}
        </p>
      </div>
      <div className="CatalogueCard__icon_container"><img src={collectionImage} width={27} height={27}/></div>
    </div>
  );
};

export default CatalogueCard;
