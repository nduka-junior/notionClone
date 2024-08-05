import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

function Section5() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl lg:text-[45px] font-semibold text-center">
        Every team, side-by-side
      </h1>
      <div>
        <Tabs
          defaultValue="board"
          className="w-[75vw]  max-sm:w-[80vw]  mb-8 space-y-5"
        >
          <div className=" xl:hidden">
            <TabsList className="flex flex-wrap gap-2 bg-transparent mt-5 text-black  mb-16  ">
              <TabsTrigger
                value="board"
                className=" data-[state=active]:!border-0 data-[state=active]:!bg-[#f1efee] rounded font-normal  "
              >
                Engineering
              </TabsTrigger>
              <TabsTrigger
                className="font-normal data-[state=active]:!border-0 data-[state=active]:!bg-[#f1efee] rounded "
                value="table"
              >
                Design
              </TabsTrigger>
              <TabsTrigger
                className="font-normal data-[state=active]:!border-0 data-[state=active]:!bg-[#f1efee] rounded "
                value="timeline"
              >
                Product
              </TabsTrigger>
              <TabsTrigger
                className="font-normal data-[state=active]:!border-0 data-[state=active]:!bg-[#f1efee] rounded "
                value="calendar"
              >
                Marketing
              </TabsTrigger>
              <TabsTrigger
                className="font-normal data-[state=active]:!border-0 data-[state=active]:!bg-[#f1efee] rounded "
                value="gallery"
              >
                Operations
              </TabsTrigger>
              <TabsTrigger
                className="font-normal data-[state=active]:!border-0 data-[state=active]:!bg-[#f1efee] rounded "
                value="list"
              >
                HR
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="max-xl:hidden">
            <TabsList className="flex flex-wrap gap-3 bg-transparent mt-5 text-black   w-full   h-auto ">
              <TabsTrigger
                value="board"
                className=" data-[state=active]:!border-[1px] data-[state=active]:border-[#f1efee] bg-[#f1efee] data-[state=active]:bg-transparent  font-normal  flex gap-2 flex-col  px-6 rounded-xl py-3  "
              >
                <Image
                  src="/engineLogo.webp"
                  width={100}
                  height={100}
                  alt="logo "
                  className="w-20"
                />
                <h1 className="font-medium">Engineering</h1>
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:!border-[1px] data-[state=active]:border-[#f1efee] bg-[#f1efee] data-[state=active]:bg-transparent  font-normal  flex gap-2 flex-col  px-6 rounded-xl py-3  "
                value="table"
              >
                <Image
                  src="/designLogo.webp"
                  width={100}
                  height={100}
                  alt="logo "
                  className="w-20"
                />
                <h1 className="font-medium">Design</h1>
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:!border-[1px] data-[state=active]:border-[#f1efee] bg-[#f1efee] data-[state=active]:bg-transparent  font-normal  flex gap-2 flex-col  px-6 rounded-xl py-3  "
                value="timeline"
              >
                <Image
                  src="/productLogo2.webp"
                  width={100}
                  height={100}
                  alt="logo "
                  className="w-20"
                />
                <h1 className="font-medium">Product</h1>
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:!border-[1px] data-[state=active]:border-[#f1efee] bg-[#f1efee] data-[state=active]:bg-transparent  font-normal  flex gap-2 flex-col  px-6 rounded-xl py-3  "
                value="calendar"
              >
                <Image
                  src="/marketingLogo.webp"
                  width={100}
                  height={100}
                  alt="logo "
                  className="w-20"
                />
                <h1 className="font-medium">Marketing</h1>
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:!border-[1px] data-[state=active]:border-[#f1efee] bg-[#f1efee] data-[state=active]:bg-transparent  font-normal  flex gap-2 flex-col  px-6 rounded-xl py-3  "
                value="gallery"
              >
                <Image
                  src="/operationsLogo.webp"
                  width={100}
                  height={100}
                  alt="logo "
                  className="w-20"
                />
                <h1 className="font-medium">Operations</h1>
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:!border-[1px] data-[state=active]:border-[#f1efee] bg-[#f1efee] data-[state=active]:bg-transparent  font-normal  flex gap-2 flex-col  px-6 rounded-xl py-3  "
                value="list"
              >
                <Image
                  src="/hrLogo.webp"
                  width={100}
                  height={100}
                  alt="logo "
                  className="w-20"
                />
                <h1 className="font-medium">HR</h1>
              </TabsTrigger>
            </TabsList>
          </div>

          {/*  */}
          <TabsContent value="board">
            <Image
              src="/engBanner.png"
              width={1000}
              height={1000}
              alt="engineBanner"
              className="w-full border-[1px] border-[#80808024] shadow-[rgba(17,_17,_26,_0.08)_0px_0px_16px] rounded-xl "
            />
          </TabsContent>
          <TabsContent value="table">
            <Image
              src="/designBanner.png"
              width={1000}
              height={1000}
              alt="boardimage"
              className="w-full border-[1px] border-[#80808024] shadow-[rgba(17,_17,_26,_0.08) rounded-xl"
            />
          </TabsContent>
          <TabsContent value="timeline">
            <Image
              src="/productBanner.png"
              width={1000}
              height={1000}
              alt="boardimage"
              className="w-full border-[1px] border-[#80808024] shadow-[rgba(17,_17,_26,_0.08) rounded-xl"
            />
          </TabsContent>
          <TabsContent value="calendar">
            <Image
              src="/marketingBanner.png"
              width={1000}
              height={1000}
              alt="boardimage"
              className="w-full border-[1px] border-[#80808024] shadow-[rgba(17,_17,_26,_0.08) rounded-xl"
            />
          </TabsContent>
          <TabsContent value="gallery">
            <Image
              src="/operationBanner.png"
              width={1000}
              height={1000}
              alt="boardimage"
              className="w-full border-[1px] border-[#80808024] shadow-[rgba(17,_17,_26,_0.08) rounded-xl"
            />
          </TabsContent>

          <TabsContent value="list">
            <Image
              src="/hrBanner.png"
              width={1000}
              height={1000}
              alt="boardimage"
              className="w-full border-[1px] border-[#80808024] shadow-[rgba(17,_17,_26,_0.08) rounded-xl"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Section5;
