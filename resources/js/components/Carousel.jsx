import { useState, useEffect } from "react";
import Button from "./button";
import "../../css/carousel.css";

// eslint-disable-next-line react/prop-types
function Carousel() {
  const images = [
    {
      image: "/images/massage-3795692_1280.webp",
      title: "Masaje de Descarga Muscular",
      text: "Especializados en",
    },
    {
      image: "/images/portada2.webp",
      title: "Masajes deportivos",
      text: "Ofrecemos tambíen",
    },
    {
      image: "/images/portada.webp",
      title: "Masaje de Descarga Muscular",
      text: "Especializados en",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);

    return () => clearTimeout(timeOut);
  }, [autoPlay, current]);

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img loading="lazy" className="card_image" src={image.image} alt="Imagen Carousel" />
              <div className="card_overlay">
              <h3 className="card_text">{image.text}</h3>
                <h2 className="card_title">{image.title}</h2>
                <Button />
              </div>
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
