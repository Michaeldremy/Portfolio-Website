import React from "react";
import "../../views/styles/Projects/ImageSlider.css";

const ImageSlider = ({ imageOne, imageTwo, imageThree }) => {

  return (
    <div className="container">
      <body>
        {/* image slider start */}
        <div className="slider">
          <div className="slides">
            {/* radio buttons start */}
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            {/* radio buttons end */}
            {/* slide images start */}
            <div className="slide first">
              <img src={imageOne} alt="" />
            </div>
            <div className="slide">
              <img src={imageTwo} alt="" />
            </div>
            <div className="slide">
              <img src={imageThree} alt="" />
            </div>
            {/* slide images end */}
          </div>
          {/* manual navigation start */}
          <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
          </div>
          {/* manual navigation end */}
        </div>
        {/* image slider end */}
      </body>
    </div>
  );
};

export default ImageSlider;
