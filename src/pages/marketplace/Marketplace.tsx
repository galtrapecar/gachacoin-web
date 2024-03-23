import { useRecoilValue } from "recoil";
import PageHeading from "../../components/PageHeading/PageHeading";
import { symbolAtom } from "../../state";

const MarketplacePage = () => {
  const symbol = useRecoilValue(symbolAtom);
  return (
    <div className="MarketplacePage">
      <PageHeading
        title={"Marketplace"}
        symbol={symbol}
        subtitle={"カタログ"}
      />
    </div>
  );
};

export default MarketplacePage;
