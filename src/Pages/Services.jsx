import React, { useCallback, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import SectionHeading from "../Components/SectionHeading";
import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, startIndex: 1 }
    // [Autoplay()]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="min-h-screen border lg:mt-20">
      <SectionHeading smallHeading="OUR SERVICES" mainHeading="Services" />
      {/* <p>hello</p> */}
      <div className="embla border p-5" ref={emblaRef}>
        <div className="embla__container cursor-grab">
          <div className="embla__slide border flex justify-center mx-5 p-3">
            Slide 1
          </div>
          <div className="embla__slide border flex justify-center mx-5 p-3">
            Slide 2
          </div>
          <div className="embla__slide border flex justify-center mx-5 p-3">
            Slide 3
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-5 gap-3">
        <button
          className="embla__prev text-xl border border-[hsl(var(--border))] hover:bg-slate-900 rounded-full p-3"
          onClick={scrollPrev}
        >
          <FaArrowLeft />
        </button>
        <button
          className="embla__next text-xl border border-[hsl(var(--border))] hover:bg-slate-900 rounded-full p-3"
          onClick={scrollNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Services;
