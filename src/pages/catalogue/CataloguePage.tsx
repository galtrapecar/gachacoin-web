import React from 'react';
import { useRecoilValue } from 'recoil';
import PageHeading from '../../components/PageHeading/PageHeading';
import { symbolAtom } from '../../state';
import CatalogueCard from '../../components/CatalogueCard/CatalogueCard';

const CataloguePage = () => {
  const symbol = useRecoilValue(symbolAtom);

  const cards = [
    {
      name: 'Card 1',
      link: '../../assets/images/placeholder.jpeg',
      serial: 123456,
      collection: 'Collection A',
    },
    {
      name: 'Card 2',
      link: '../../assets/images/placeholder.jpeg',
      serial: 789012,
      collection: 'Collection B',
    },
    {
      name: 'Card 2',
      link: '../../assets/images/placeholder.jpeg',
      serial: 789012,
      collection: 'Collection B',
    },
    {
      name: 'Card 2',
      link: '../../assets/images/placeholder.jpeg',
      serial: 789012,
      collection: 'Collection B',
    },
    {
      name: 'Card 1',
      link: '../../assets/images/placeholder.jpeg',
      serial: 123456,
      collection: 'Collection A',
    },
    {
      name: 'Card 2',
      link: '../../assets/images/placeholder.jpeg',
      serial: 789012,
      collection: 'Collection B',
    },
    {
      name: 'Card 2',
      link: '../../assets/images/placeholder.jpeg',
      serial: 789012,
      collection: 'Collection B',
    },
    {
      name: 'Card 2',
      link: '../../assets/images/placeholder.jpeg',
      serial: 789012,
      collection: 'Collection B',
    },
    {
      name: 'Card 1',
      link: '../../assets/images/placeholder.jpeg',
      serial: 123456,
      collection: 'Collection A',
    },
    {
      name: 'Card 2',
      link: '../../assets/images/placeholder.jpeg',
      serial: 789012,
      collection: 'Collection B',
    },
    {
      name: 'Card 2',
      link: '../../assets/images/placeholder.jpeg',
      serial: 789012,
      collection: 'Collection B',
    },
    {
      name: 'Card 2',
      link: '../../assets/images/placeholder.jpeg',
      serial: 789012,
      collection: 'Collection B',
    },
    // Add more card objects as needed
  ];

  return (
    <div className='CataloguePage'>
      <PageHeading title={'Catalogue'} symbol={symbol} subtitle={'カタログ'} />
      <div className='CataloguePage__cards'>
        {cards.map((card, index) => (
          <CatalogueCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CataloguePage;

// FIXME: Extanding background color if there is more than 2 rows of cards
