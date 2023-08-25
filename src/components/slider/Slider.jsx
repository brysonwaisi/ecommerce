import { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./slider.scss";

const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const data = [
    "https://www.tpci.in/indiabusinesstrade/wp-content/uploads/2021/11/TPCI_Indias-cereal-exports-.jpg",
    "https://g2h4v2c9.stackpathcdn.com/themes/agrarium/wp-content/uploads/2021/08/Layer-851-1-300x233.png",
    "https://g2h4v2c9.stackpathcdn.com/themes/agrarium/wp-content/uploads/2021/09/Layer-594-2-300x233.png",
  ];

  const prevSlide = () => {
    setCurrSlide(currSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrSlide(currSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowLeftIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
