import { useRecoilValue } from "recoil";
import PageHeading from "../../components/PageHeading/PageHeading";
import { symbolAtom } from "../../state";

const SettingsPage = () => {
  const symbol = useRecoilValue(symbolAtom);
  return (
    <div className="SettingsPage">
      <PageHeading title={"Settings"} symbol={symbol} subtitle={"セッテイ"} />
    </div>
  );
};

export default SettingsPage;
