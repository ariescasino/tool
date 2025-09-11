import { isMobile } from "./check";

export const popup = (
  path: string = "",
  type: "d" | "m" = "d",
  w?: number,
  h?: number
) => {
  const host = window.location.origin;
  let name = path;
  let url = path;

  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  let width = screenWidth - 400;
  let height = screenHeight - 200;
  const left = (screenWidth - (w || width)) / 2;
  const top = (screenHeight - (h || height)) / 2;

  if (isMobile(window)) {
    window.location.href = `${host}/${url}`;
    return;
  }

  switch (type) {
    case "d":
      break;

    case "m":
      width = w || 815;
      height = h || 800;
      name = "_blank";
      url = path;
      break;
  }

  const mywindow = window.open(
    `${host}/${url}`,
    name,
    `resizable=yes,scrollbars=yes,left=${left},top=${top},width=${w || width},height=${h || height}`
  );

  if (mywindow != null) {
    mywindow.focus();
  }
};
