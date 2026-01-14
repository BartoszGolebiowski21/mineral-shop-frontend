"use client";

import { useState } from "react";
import ArrowIcon from "@/assets/svg-icons/ArrowIcon";

const ImageCarousel = ({ children }: { children: React.ReactNode }) => {
  const [current, setCurrent] = useState(0);

  const slides = Array.isArray(children) ? children : [children];

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            {slide}
          </div>
        ))}
      </div>

      <button className="arrow-icon left" onClick={prev}>
        <ArrowIcon />
      </button>

      <button className="arrow-icon right" onClick={next}>
        <ArrowIcon />
      </button>
    </div>
  );
};

export default ImageCarousel;

