import { useRecoilState } from "recoil";
import CardHeader from "../../../components/CardHeader/CardHeader";
import CircleDropdown, {
  CircleDropdownItem,
} from "../../../components/CircleDropdown/CircleDropdown";
import { AppColor, colorAtom, symbolAtom } from "../../../state";

const AppSettings = () => {
  const [symbol, setSymbol] = useRecoilState(symbolAtom);
  const [color, setColor] = useRecoilState(colorAtom);

  const onSelectColor = (color: AppColor) => {
    setColor(color);
  };

  const getColorIconClass = (color: string) => {
    return `AppSettings__${color} AppSettings__colorIcon`
  }

  const colorItems: CircleDropdownItem[] = [
    {
      label: "Baby Blue",
      icon: <div className={getColorIconClass(AppColor.Blue)} />,
      value: AppColor.Blue,
      onSelect: onSelectColor,
    },
    {
      label: "Money Green",
      icon: <div className={getColorIconClass(AppColor.Green)} />,
      value: AppColor.Green,
      onSelect: onSelectColor,
    },
    {
      label: "Hot Pink",
      icon: <div className={getColorIconClass(AppColor.Pink)} />,
      value: AppColor.Pink,
      onSelect: onSelectColor,
    },
  ];

  return (
    <div className="AppSettings SettingsPage__card">
      <CardHeader title={"App Settings"} subtitle={"アプリの設定"} />
      <div className="AppSettings__items">
        <div className="AppSettings__item">
          <div className="AppSettings__item__title">Page Color</div>
          <CircleDropdown
            closeOnSelect
            icon={<div className={getColorIconClass(color)} />}
            items={colorItems}
          />
        </div>
        <div className="AppSettings__item">
          <div className="AppSettings__item__title">Page Icon</div>
        </div>
      </div>
    </div>
  );
};

export default AppSettings;
