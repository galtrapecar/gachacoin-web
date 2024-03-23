import React from "react";
import RainbowBorder from "../RainbowBorder/RainbowBorder";
import Icons from "../../assets/icons";

export type CatalogueCardProps = {
  name: string;
  link?: string;
  serial: number;
  collection: string;
};

const CatalogueCard = ({ name, link, serial }: CatalogueCardProps) => {
  return (
    <div className="CatalogueCard">
      <div className="CatalogueCard__image__container">
        <div className="CatalogueCard__image">
          <RainbowBorder
            background={`url(${link && require(link)})`}
            width={3}
            borderRadius={8}
            overlayRadius={6}
          />
        </div>
      </div>
      <div className="CatalogueCard__text__container">
        <p className="CatalogueCard__title">{name}</p>
        <p className="CatalogueCard__serial">{serial}</p>
      </div>
      <div className="CatalogueCard__icon_container">
        <Icons.CollectionIcon width={27} height={27} />
      </div>
    </div>
  );
};

export default CatalogueCard;
