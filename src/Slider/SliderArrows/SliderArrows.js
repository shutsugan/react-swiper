import React, { memo } from "react";
import PropTypes from "prop-types";

import chevron from "./chevron.svg";

import "./index.css";

const SliderArrows = memo(({ style = {}, visibility, handleSlide }) => {
  const { leftBoundaryInView, rightBoundaryInView } = visibility;
  const { setOffsetAfterSlide, slideAmount, offset } = handleSlide;

  const handleSlideLeft = () => {
    const leftOffset = offset + slideAmount;
    const limitLeftOffset = Math.abs(leftOffset > 0 ? 0 : leftOffset);

    setOffsetAfterSlide(limitLeftOffset, leftOffset);
  };

  const handleSlideRight = () => {
    const rightOffset = offset - slideAmount;
    const absRightOffset = Math.abs(rightOffset);

    setOffsetAfterSlide(absRightOffset, rightOffset);
  };

  const stopMouseDown = (event) => event.stopPropagation();

  const leftArrow = (
    <div
      className={leftBoundaryInView ? "hide-arrow" : "arrow"}
      onClick={handleSlideLeft}
      onMouseDown={stopMouseDown}
    >
      <img
        className="arrow-svg svg-left"
        style={style}
        src={chevron}
        alt="Left arrow"
      />
    </div>
  );

  const rightArrow = (
    <div
      className={rightBoundaryInView ? "hide-arrow" : "arrow"}
      onClick={handleSlideRight}
      onMouseDown={stopMouseDown}
    >
      <img
        className="arrow-svg"
        style={style}
        src={chevron}
        alt="Right arrow"
      />
    </div>
  );

  return (
    <div className="slider-arrows">
      {leftArrow}
      {rightArrow}
    </div>
  );
});

SliderArrows.propTypes = {
  style: PropTypes.object,
  visibility: PropTypes.object.isRequired,
  handleSlide: PropTypes.object.isRequired,
};

export default SliderArrows;