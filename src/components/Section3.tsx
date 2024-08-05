"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Section3() {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch("/api/images")
      .then((response) => response.json())
      .then((data) => {
        if (data.images) {
          setImages(data.images);
        } else {
          setError(data.error || "Unknown error");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  console.log(images);
  return (
    <div className="flex flex-col justify-center px-[9vw] pt-10">
      <div className="text-center space-y-3 ">
        <h1 className="text-3xl font-semibold">
          Millions run on Notion every day
        </h1>
        <h1>
          Powering the world{"'"}s best teams, from next-generation startups to
          established enterprises.
        </h1>
        <h1 className="text-[#0083FA] font-light  hover:underline pb-4">
          Read customer stories <span>→</span>
        </h1>
      </div>
      <div>
        <div>
          {error ? (
            <p>{error}</p>
          ) : (
            <div className="flex gap-4 flex-wrap items-center justify-center">
              {images.map((image, index) => (
                <div key={index} className="w-24 lg:w-32">
                  <Image
                    src={`/logos/${image}`}
                    alt={image}
                    width={1000}
                    height={1000}
                    className="object-cover "
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* <div className="py-16 flex items-center flex-col">
        <div>
          <h1 className="text-3xl font-semibold">
            Consolidate tools. Cut costs.
          </h1>
        </div>
        <div className="relative">
          <div className="relative ">
            <Image
              src="/list.png"
              width={1000}
              height={1000}
              alt="image"
              className="w-full"
            />
            <Image
              src="/line.png"
              width={1000}
              height={1000}
              alt="image"
              className="w-full absolute top-0 transform translate-y-[50%]    bg-transparent -z-10"
            />
          </div>
          <Image
            src="/drawSmall.png"
            width={1000}
            height={1000}
            alt="image"
            className="w-28 absolute -right-20 top-0"
          />
        </div>
      </div> */}
    </div>
  );
}

export default Section3;
