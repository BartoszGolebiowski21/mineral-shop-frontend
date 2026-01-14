"use client"

import ArrowIcon from "@/assets/svg-icons/ArrowIcon";

let current = 0;

const ImageArrows = () => {
  const show = (index: number) => {
    const images = document.querySelectorAll(".image-wrapper");

    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  };

  const next = () => {
    const images = document.querySelectorAll(".image-wrapper");
    current = (current + 1) % images.length;
    show(current);
  };

  const prev = () => {
    const images = document.querySelectorAll(".image-wrapper");
    current = (current - 1 + images.length) % images.length;
    show(current);
  };

  return (
    <div>
      <div className="arrow-icon left"  onClick={prev}>
        <ArrowIcon />
      </div>

      <div className="arrow-icon right" onClick={next}>
        <ArrowIcon />
      </div>
    </div>
  )
};

export default ImageArrows;