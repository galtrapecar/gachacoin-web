import React from 'react';
import RainbowBorder from '../RainbowBorder/RainbowBorder';
import Icons from '../../assets/icons';
import placeholder from '../../assets/images/placeholder.jpeg';
import Button from '../Button/Button';

export type MarketplaceCardProps = {
  collection?: string;
  link?: string;
  name: string;
  price: number;
  seller: string;
  serial: number;
};

const MarketplaceCard = ({
  link,
  name,
  price,
  seller,
  serial,
}: MarketplaceCardProps) => {
  return (
    <div className="MarketplaceCard">
      <div className="MarketplaceCard__image__container">
        <div className="MarketplaceCard__image">
          <RainbowBorder
            background={`url(${placeholder})`}
            width={3}
            borderRadius={8}
            overlayRadius={6}
          />
        </div>
      </div>
      <div className="MarketplaceCard__info__container">
        <div className="MarketplaceCard__text__container">
          <p className="MarketplaceCard__title">{name}</p>
          <p className="MarketplaceCard__price">
            {price} <Icons.EthIcon width={8} height={8} /> ETH
          </p>
          <p className="MarketplaceCard__seller">Seller: {seller}</p>
        </div>
        <div className="MarketplaceCard__icon">
          <Icons.CollectionIcon width={32} height={32} />
        </div>
      </div>
      <div className="MarketplaceCard__button__container">
        <Button style="primary" label="BUY" borderWidth={2} />
      </div>
      <p className="MarketplaceCard__serial">collection#: {serial}</p>
    </div>
  );
};

export default MarketplaceCard;
