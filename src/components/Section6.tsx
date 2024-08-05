import React from "react";
import Image from "next/image";
function Section6() {
  return (
    <div className="py-20 flex-col justify-center flex">
      <div className="text-center px-[5vw] space-y-5">
        <div className="text-[6vw] lg:text-[3.5vw] leading-[43px] font-semibold">
          <h1>Join a global movement.</h1>
          <h1>Unleash your creativity.</h1>
        </div>
        <h1>
          Our vibrant community produces content, teaches courses, and leads
          events all over the world.
        </h1>
        <h1 className="text-[#0083FA] font-light  hover:underline">
          Learn more {"→"}
        </h1>
      </div>
      <div className="  flex justify-center mt-8  relative   overflow-x-clip">
        <Image
          src="/faces.webp"
          width={1000}
          height={1000}
          alt="face"
          className=" min-w-[700px]"
        />
      </div>
    </div>
  );
}

export default Section6;
