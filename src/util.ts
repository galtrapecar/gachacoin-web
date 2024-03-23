import { AppColor } from "./state";

export const appColorToHex = (color: AppColor) => {
  switch (color) {
    case AppColor.Blue:
      return "#effbff";
    case AppColor.Green:
      return "#fafff9";
    case AppColor.Pink:
      return "#fff6fe";
  }
};
