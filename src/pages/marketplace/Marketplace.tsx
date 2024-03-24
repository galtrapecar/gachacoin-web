import { symbolAtom } from '../../state';
import { useRecoilValue } from 'recoil';
import MarketplaceCard from '../../components/MarketplaceCard/MarketplaceCard';
import PageHeading from '../../components/PageHeading/PageHeading';

const MarketplacePage = () => {
  const symbol = useRecoilValue(symbolAtom);

  const cards = [
    {
      name: 'Part Name',
      price: 0.3,
      seller: 'NoName',
      serial: 3,
    },
    {
      name: 'Part Name',
      price: 0.3,
      seller: 'NoName',
      serial: 3333,
    },
    {
      name: 'Part Name',
      price: 0.3,
      seller: 'NoName',
      serial: 333333333,
    },
    {
      name: 'Part Name',
      price: 0.3,
      seller: 'NoName',
      serial: 3333,
    },
    {
      name: 'Part Name',
      price: 0.3,
      seller: 'NoName',
      serial: 3333,
    },
    {
      name: 'Part Name',
      price: 0.3,
      seller: 'NoName',
      serial: 3333,
    },
    {
      name: 'Part Name',
      price: 0.3,
      seller: 'NoName',
      serial: 3333,
    },
    {
      name: 'Part Name',
      price: 0.3,
      seller: 'NoName',
      serial: 3333,
    },
    {
      name: 'Part Name',
      price: 0.3,
      seller: 'NoName',
      serial: 3333,
    },
    {
      name: 'Part Name',
      price: 0.3,
      seller: 'NoName',
      serial: 3333,
    },
  ];

  return (
    <div className="MarketplacePage">
      <PageHeading
        title={'Marketplace'}
        symbol={symbol}
        subtitle={'カタログ'}
      />
      <div className="Marketplace__cards">
        {cards.map((card, index) => (
          <MarketplaceCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;
