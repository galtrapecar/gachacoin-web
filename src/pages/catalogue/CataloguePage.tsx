import { useRecoilValue } from "recoil";
import PageHeading from "../../components/PageHeading/PageHeading";
import { symbolAtom } from "../../state";

const CataloguePage = () => {
  const symbol = useRecoilValue(symbolAtom);
  return (
    <div className="CataloguePage">
      <PageHeading title={"Catalogue"} symbol={symbol} subtitle={"カタログ"} />
    </div>
  );
};

export default CataloguePage;
