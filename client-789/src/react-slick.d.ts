declare module "react-slick" {
  import { Component } from "react";

  interface SliderSettings {
    dots?: boolean;
    infinite?: boolean;
    slidesToShow?: number;
    slidesToScroll?: number;
    verticalSwiping?: boolean;
    vertical?: boolean;
    nextArrow?: React.ReactNode;
    prevArrow?: React.ReactNode;
    [key: string]: any;
  }

  class Slider extends Component<SliderSettings> {}

  export default Slider;
}
