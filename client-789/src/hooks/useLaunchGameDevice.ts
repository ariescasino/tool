import { useBreakpoint } from "@/utils/check";


export default function useLaunchGameDevice(deviceGame?: "d/m" | "d" | "m") {
  const breakpoint = useBreakpoint();
  let device = "m";

  if (deviceGame !== null) {
    if (breakpoint === "XL") {
      device = "d";
    } else {
      device = "m";
    }
  } else {
    if (deviceGame === "d/m") {
      if (breakpoint === "XL") {
        device = "d";
      } else {
        device = "m";
      }
    } else if (deviceGame === "d") {
      device = "d";
    } else {
      device = "m";
    }
  }

  return device;
}
