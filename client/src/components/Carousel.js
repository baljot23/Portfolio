import React from "react";
import Javascript from "./Pictures/Javascript.png";
import ReactImage from "./Pictures/React.png";
import HtmlImage from "./Pictures/Html.png";
import Css from "./Pictures/Css.png";
import Firebase from "./Pictures/Firebase.png";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla flex  mx-auto">
      <button className="embla__prev" onClick={scrollPrev}>
        <BsArrowLeftSquareFill />
      </button>
      <div className="embla__viewport overflow-hidden " ref={emblaRef}>
        <div className="embla__container flex relative ">
          <div className="embla__slide relative flex-1">
            <img src={Javascript} />
          </div>
          <div className="embla__slide relative flex-1">
            <img src={ReactImage} />
          </div>
          <div className="embla__slide relative flex-1">
            <img src={HtmlImage} />
          </div>
          <div className="embla__slide relative flex-1">
            <img src={Css} />
          </div>
          <div className="embla__slide relative flex-1">
            <img src={Firebase} />
          </div>
        </div>
      </div>
      <button className="embla__next " onClick={scrollNext}>
        <BsArrowRightSquareFill />
      </button>
    </div>
  );
};

export default Carousel;
