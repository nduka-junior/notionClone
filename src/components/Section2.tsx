"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { carouselItem } from "@/utils/carouselItems";
import { Button } from "./ui/button";
function Section2() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="pt-20 max-sm:py-15 flex flex-col items-center  ">
      <div className="text-center flex flex-col gap-2 items-center">
        <h1 className="before:content-open-quote after:content-close-quote text-[40px] max-sm:text-3xl max-xs:text-2xl">
          {"Your AI everything app."}
          
        </h1>
<Image src="/forbes.png" width={100} height={100} alt="forbesicon" />
      </div>
      <div className="w-full flex justify-center  pt-20 max-sm:py-10 max-xs:py-5">
        <Carousel
          className="w-full max-w-[70vw] lg:max-w-[60vw] "
          opts={{ loop: true }}
          setApi={setApi}
        >
          <div className="flex justify-center mt-4  gap-12">
            {carouselItem.map((item, i) => (
              //   <Button
              //     key={i}
              //     className={`mx-1  h-1.5 flex-grow rounded-full p-0 ${
              //       i === current - 1
              //         ? "bg-white hover:bg-white"
              //         : "bg-neutral-600/75"
              //     }`}
              //     onClick={() => api?.scrollTo(i)}
              //   />
              <div
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`cursor-pointer max-lg:hidden flex flex-col items-center  ${
                  i === current - 1
                    ? "grayscale-0 text-black"
                    : " grayscale-[90%] hover:grayscale-0 text-gray-300  hover:text-black"
                }`}
              >
                <Image
                  src={item.logoURL}
                  width={100}
                  height={100}
                  alt="carouselIcon"
                  className="w-9"
                />
                <h1 className={`text-xl font-medium `}>{item.name}</h1>
              </div>
            ))}
          </div>
          <CarouselContent className="flex items-center">
            {carouselItem.map((item, index) => (
              <CarouselItem key={index} className=" ">
                <div className=" gap-2 space-y-4">
                  <div className="flex items-center gap-3 justify-center lg:hidden  ">
                    <Image
                      src={item.logoURL}
                      width={100}
                      height={100}
                      alt="carouselImage"
                      className="w-8"
                    />
                    <h1 className="text-xl font-semibold">{item.name}</h1>
                  </div>
                  <h1 className="text-center text-sm md:text-lg font-medium lg:py-5">
                    {item.description}
                  </h1>
                  <Image
                    src={item.carouselurl}
                    width={1000}
                    height={1000}
                    alt="carouselImage"
                    className="pt-5"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-2 md:hidden gap-3">
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                className={`mx-1  rounded-full p-1.5 cursor-pointer ${
                  i === current - 1
                    ? "bg-black hover:bg-black"
                    : "bg-neutral-600/75"
                }`}
                onClick={() => api?.scrollTo(i)}
              ></div>
            ))}
          </div>
          <div>
            {" "}
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Section2;
