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
    <div className='card'>
      <div className='card__image__container'>
        <div className="card__image">
          <RainbowBorder background={`url(${require('../../assets/images/placeholder.jpeg')})`} width={3} borderRadius={17} />
        </div>

      </div>
      <div className='card__text__container'>
        <p className='card__title'>{name}</p>
        <p className='card__serial'>{serial}</p>
      </div>
      <div className='card__icon_container'>
        <Icons.CollectionIcon width={27} height={27} />
      </div>
    </div>
  );
};

export default CatalogueCard;

// FIXME: Rainbow image border
// FIXME: Positioning of collection icon
// FIXME: Dinamicly render image and collection icon
