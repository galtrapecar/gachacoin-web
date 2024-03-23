import React from 'react';
import RainbowBorder from '../RainbowBorder/RainbowBorder';
import Icons from '../../assets/icons';

export type CatalogueCardProps = {
  name: string;
  link?: string;
  serial: number;
  collection: string;
};

const CatalogueCard: React.FC<CatalogueCardProps> = ({
  name,
  link,
  serial,
  collection,
}) => {
  return (
    <div className='CatalogueCard'>
      <div className='CatalogueCard__image__container'>
        <div className='CatalogueCard__image'>
          <RainbowBorder
            background={`url(${require('../../assets/images/placeholder.jpeg')})`}
            width={3}
            borderRadius={8}
            overlayRadius={6}
          />
        </div>
      </div>
      <div className='CatalogueCard__text__container'>
        <p className='CatalogueCard__title'>{name}</p>
        <p className='CatalogueCard__serial'>{serial}</p>
      </div>
      <div className='CatalogueCard__icon_container'>
        <Icons.CollectionIcon width={27} height={27} />
      </div>
    </div>
  );
};

export default CatalogueCard;

// FIXME: Rainbow image border
// FIXME: Positioning of collection icon
// FIXME: Dinamicly render image and collection icon
