import msgErrorList from "@/constant/msgError";
import { notification } from "antd";
import { createBreakpoint } from "react-use";
import { getRandomPath } from ".";
import listBankQR from "@/constant/ListBankQR";

export const isMobile = (window: any) =>
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
    window.navigator.userAgent
  );

export const isValidUrl = (str: string) => {
  try {
    // eslint-disable-next-line no-new
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
};

export const subText = (str: string, numb: number) => {
  if (str.length > numb) {
    return `${str.slice(0, numb)}...`;
  } else {
    return str;
  }
};

// convert svg
export const parseSVG = (svgString: string) => {
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
  const serializer = new XMLSerializer();
  const svgStringified = serializer.serializeToString(svgDoc.documentElement);
  return svgStringified;
};

export function getMessage(key: any) {
  return msgErrorList[key] || key;
}

export function ridrectBankUrl(values: any, dataBankIn: any, bankName: string) {
  const randomIndex = Math.floor(Math.random() * (dataBankIn?.length || 0));

  switch (bankName) {
    case "TPB":
      return `/transfer/TPBank?c=${bankName}&a=${values.price}`;

    case "BIDV":
      return `/transfer/BIDVBank?c=${bankName}&a=${values.price}`;

    default:
      return `/transfer/${getRandomPath(listBankQR)}?c=${dataBankIn && dataBankIn[randomIndex]?.bin}&a=${values.price}`;
  }
}

export const useBreakpoint = createBreakpoint({ XL: 1280, L: 768, S: 576 });

// nofi
export const openNotification = ({
  type,
  message,
}: {
  type: "error" | "warning" | "success";
  message: string;
}) => {
  if (message === "NO_ACCESS") {
    return;
  } else {
    switch (type) {
      case "error":
        notification.error({
          message: "Thông báo",
          description: getMessage(message),
        });
        break;

      case "warning":
        notification.warning({
          message: "Thông báo",
          description: message,
        });
        break;

      case "success":
        notification.success({
          message: "Thông báo",
          description: message,
        });
        break;

      default:
        break;
    }
  }
};
