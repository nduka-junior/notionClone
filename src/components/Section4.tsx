import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Section4() {
  return (
    <div className="px-[9vw] mt-20">
      <div className="lg:flex flex-row-reverse justify-end">
        <h1 className="text-[7vw]  md:text-[6vw]  lg:text-[5vw] font-semibold max-lg:text-center">
          Powerful building blocks
        </h1>
        <Image
          src="/powerful.webp"
          width={100}
          height={100}
          alt="image"
          className="w-32 relative top-2 z-50"
        />
      </div>

      <div className="bg-[#F6F5F4] p-8 rounded-xl ">
        <div className="space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="26"
            style={{ fill: "#0a85d1", color: "#0a85d1" }}
          >
            <defs fill="currentColor"></defs>
            <path
              d="m45.74,33l13,13-13,13-4.24-4.24,5.76-5.76h-7.14c-3.86,0-6.71-1.46-8.95-4.61l-2.71-3.79,3.69-5.16,3.9,5.47c1.12,1.57,2.14,2.09,4.07,2.09h7.14l-5.76-5.76,4.24-4.24Zm-5.62-12h7.14l-5.76,5.76,4.24,4.24,13-13-13-13-4.24,4.24,5.76,5.76h-7.14c-3.86,0-6.71,1.46-8.95,4.61l-15.21,21.3c-1.12,1.57-2.14,2.09-4.07,2.09h-5.88v6h5.88c3.86,0,6.71-1.46,8.95-4.61l15.21-21.3c1.12-1.57,2.14-2.09,4.07-2.09Zm-24.17,2.09l3.9,5.47,3.69-5.16-2.71-3.79c-2.25-3.14-5.09-4.61-8.95-4.61h-5.88v6h5.88c1.92,0,2.95.53,4.07,2.09Z"
              fill="currentColor"
            ></path>
          </svg>
          <div>
            <h1 className="text-xl font-semibold">
              Visualize, filter & sort any way you want
            </h1>
            <p className="text-sm">
              Show only tasks assigned to you, or items marked as urgent. Break
              down any project in the way that{"'"}s most helpful to you.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center pt-10">
          <Tabs
            defaultValue="board"
            className="lg:w-[50vw]  md:w-[60vw] max-sm:w-[65vw] "
          >
            <TabsContent value="board">
              <Image
                src="/board.png"
                width={1000}
                height={1000}
                alt="boardimage"
                className="w-full border-[1px] border-[#00000007] rounded-xl "
              />
            </TabsContent>
            <TabsContent value="table">
              <Image
                src="/table.png"
                width={1000}
                height={1000}
                alt="boardimage"
                className="w-full border-[1px] border-[#00000007] rounded-xl"
              />
            </TabsContent>
            <TabsContent value="timeline">
              <Image
                src="/timeline.png"
                width={1000}
                height={1000}
                alt="boardimage"
                className="w-full border-[1px] border-[#00000007] rounded-xl"
              />
            </TabsContent>
            <TabsContent value="calendar">
              <Image
                src="/calendar.png"
                width={1000}
                height={1000}
                alt="boardimage"
                className="w-full border-[1px] border-[#00000007] rounded-xl"
              />
            </TabsContent>
            <TabsContent value="gallery">
              <Image
                src="/gallery.png"
                width={1000}
                height={1000}
                alt="boardimage"
                className="w-full border-[1px] border-[#00000007] rounded-xl"
              />
            </TabsContent>

            <TabsContent value="list">
              <Image
                src="/list.png"
                width={1000}
                height={1000}
                alt="boardimage"
                className="w-full border-[1px] border-[#00000007] rounded-xl"
              />
            </TabsContent>
            <TabsList className="flex flex-wrap gap-2 bg-transparent mt-5 text-black   ">
              <TabsTrigger
                value="board"
                className=" data-[state=active]:!border-0 data-[state=active]:!bg-[#DDDCDB] font-normal border-[1px] border-[#00000038] rounded-lg "
              >
                Board
              </TabsTrigger>
              <TabsTrigger
                className="font-normal data-[state=active]:!border-0 data-[state=active]:!bg-[#DDDCDB] border-[1px] border-[#00000038] rounded-lg"
                value="table"
              >
                Table
              </TabsTrigger>
              <TabsTrigger
                className="font-normal data-[state=active]:!border-0 data-[state=active]:!bg-[#DDDCDB] border-[1px] border-[#00000038] rounded-lg"
                value="timeline"
              >
                Timeline
              </TabsTrigger>
              <TabsTrigger
                className="font-normal data-[state=active]:!border-0 data-[state=active]:!bg-[#DDDCDB] border-[1px] border-[#00000038] rounded-lg"
                value="calendar"
              >
                Calendar
              </TabsTrigger>
              <TabsTrigger
                className="font-normal data-[state=active]:!border-0 data-[state=active]:!bg-[#DDDCDB] border-[1px] border-[#00000038] rounded-lg"
                value="gallery"
              >
                Gallery
              </TabsTrigger>
              <TabsTrigger
                className="font-normal data-[state=active]:!border-0 data-[state=active]:!bg-[#DDDCDB] border-[1px] border-[#00000038] rounded-lg"
                value="list"
              >
                List
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Section4;
