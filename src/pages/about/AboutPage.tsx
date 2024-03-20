import { useRecoilValue } from "recoil";
import PageHeading from "../../components/PageHeading/PageHeading";
import { symbolAtom } from "../../state";

const AboutPage = () => {
  const symbol = useRecoilValue(symbolAtom);
  return (
    <div className="AboutPage">
      <PageHeading title={"About"} symbol={symbol} subtitle={"について"} />
    </div>
  );
};

export default AboutPage;
