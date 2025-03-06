import React, { useCallback, useEffect, useState } from "react";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft, FaStop } from "react-icons/fa6";
import SectionHeading from "../Components/SectionHeading";
import useEmblaCarousel from "embla-carousel-react";
import { servicesInfo } from "../info/servicesinfo";
import Autoplay from "embla-carousel-autoplay";

const Services = () => {
  const [playing, setplaying] = useState(true);
  const autoplay = Autoplay({ delay: 2000, stopOnInteraction: false }); // Create autoplay instance
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, startIndex: 0 },
    [autoplay]
  );
  const startAutoplay = useCallback(() => {
    setplaying(true);
    if (emblaApi) emblaApi.plugins()?.autoplay?.start();
  }, [emblaApi]);

  // Function to stop autoplay
  const stopAutoplay = useCallback(() => {
    setplaying(false);
    if (emblaApi) emblaApi.plugins()?.autoplay?.stop();
  }, [emblaApi]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="min-h-screen lg:mt-31">
      <SectionHeading smallHeading="OUR SERVICES" mainHeading="Services" />
      {/* <p>hello</p> */}
      <div className="embla p-5 mt-5" ref={emblaRef}>
        <div className="embla__container cursor-grab">
          {servicesInfo.length !== 0 &&
            servicesInfo.map((element, i) => (
              <div
                key={i}
                className="embla__slide border border-[hsl(var(--border))] flex justify-center rounded-xl mx-5 p-3 py-10"
                // style={{ backgroundImage:`url` }}
                id={`slide${i + 1}`}
              >
                <div className=" flex flex-col gap-8">
                  <h1 className="text-3xl max-w-md mx-auto text-center font-medium">
                    {element.heading}
                  </h1>
                  <div className="w-4/5 mx-auto">
                    <p className="text-sm mb-3 text-[var(--purple-foreground)]">
                      {element.para}
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      {element?.list?.length !== 0 &&
                        element.list.map((li, i) => (
                          <li
                            className="flex items-center space-x-2 text-sm"
                            key={i}
                          >
                            <FaCheckCircle className="text-[var(--purple-foreground)]" />
                            <span>
                              {/* Emotion Recognition & Adaptive Responses */}
                              {li}
                            </span>
                          </li>
                        ))}
                    </ul>
                    <div className="flex justify-center mt-5">
                      <button className="border border-[var(--purple-foreground)] rounded-md py-2 px-3 cursor-pointer text-gray-400 hover:text-[var(--purple-foreground)] duration-150 hover:font-bold ">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="relative flex justify-center items-center my-5 gap-3">
        <button
          className="embla__prev text-xl border-[2px] border-[hsl(var(--border))] text-white/60 hover:text-white hover:border-white/80 duration-500 rounded-full p-3"
          onClick={scrollPrev}
        >
          <FaArrowLeft />
        </button>
        <button
          className="embla__next text-xl border-[2px] border-[hsl(var(--border))] text-white/60 hover:text-white hover:border-white/80 duration-500 rounded-full p-3"
          onClick={scrollNext}
        >
          <FaArrowRight />
        </button>
        {playing ? (
          <button
            className="embla__next left-[50%] translate-x-[200%] text-lg absolute border-[2px] border-[hsl(var(--border))] text-white/60 hover:text-white hover:border-white/80 duration-500 rounded-full p-3"
            onClick={stopAutoplay}
          >
            <FaStop />
          </button>
        ) : (
          <button
            className="embla__next left-[50%] translate-x-[200%] text-lg absolute border-[2px] border-[hsl(var(--border))] text-white/60 hover:text-white hover:border-white/80 duration-500 rounded-full p-3"
            onClick={startAutoplay}
          >
            <FaPlay />
          </button>
        )}
      </div>
    </div>
  );
};

export default Services;
