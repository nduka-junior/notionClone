import React from "react";

function Section1() {
  return (
    <div>
      <div className="text-center pt-10 space-y-4">
        <h1 className="text-[7vw] font-bold text-wrap lg:text-[4vw]">
          Write,plan,organize,play
        </h1>
        <div className="text-xl lg:text-2xl font-medim">
          <h1>Turn ideas into action</h1>
          <h1>with Notion's AI-powered workspace.</h1>
        </div>

        <div className="flex gap-3 items-center justify-center font-medium pt-3">
          <div className="bg-[#0083FA] py-2  px-3 rounded text-white cursor-pointer shadow-[rgba(17,_17,_26,_0.25)_0px_0px_16px]">
            Get Notion free
          </div>
          <div className="text-[#0083FA] cursor-pointer">Request a demo</div>
        </div>
      </div>
      <div className="m-10 flex justify-center  w-auto ">
        <video
          className="w-[80vw] lg:w-[50vw] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
          autoPlay
          loop
        >
          <source src="/screen-v2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Section1;
