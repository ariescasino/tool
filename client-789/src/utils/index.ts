import crypto from "crypto";
import { useWindowSize } from "react-use";

export function getDomain(url: string): string {
  const domain = url.split("//")[1];
  return domain;
}

export function getRandomPath(path: string[]): string {
  return path[Math.floor(Math.random() * path.length)];
}

export const onKeyPressEnter = (e: any) => {
  const key = e.key;
  if (key === "Enter") {
    e.preventDefault();
  }
};

export function hashMd5(str: string): string {
  if (!str) return "";
  return crypto.createHash("md5").update(str).digest("hex");
}

export const getImageQuality = (width: any) => {
  if (width > 1200) return 100;
  else if (width > 800 && width <= 1200) {
    return 80;
  } else {
    return 50;
  }
};
