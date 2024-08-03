import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Section4() {
  return (
    <div className="px-[9vw] lg:px-[15vw] my-20">
      <div className="lg:flex flex-row-reverse justify-end">
        <h1 className="  text-[6vw]  lg:text-[3vw] font-semibold max-lg:text-center">
          Powerful building blocks
        </h1>
        <Image
          src="/powerful.webp"
          width={100}
          height={100}
          alt="image"
          className="w-32 relative top-2 z-50 lg:w-52"
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
            className="lg:w-[50vw]  md:w-[60vw] max-sm:w-[65vw]  mb-8"
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
      <div className="mt-8 flex gap-5 max-md:flex-col  ">
        <div className="bg-[#F6F5F4] pl-8 pt-8 rounded-xl  flex flex-col justify-between  ">
          <div className="space-y-4 pr-8">
            <svg
              viewBox="0 0 30 20"
              width="26"
              style={{ fill: "#0a85d1", color: "#0a85d1" }}
            >
              <path
                d="M14.951 19.558c1.468 0 2.85-.176 4.147-.527a17.635 17.635 0 0 0 3.598-1.386 18.18 18.18 0 0 0 2.933-1.912 17.422 17.422 0 0 0 2.213-2.084c.609-.701 1.07-1.35 1.386-1.944.322-.601.483-1.085.483-1.45s-.161-.845-.483-1.44c-.316-.594-.777-1.238-1.386-1.933a16.965 16.965 0 0 0-2.213-2.095 17.491 17.491 0 0 0-2.944-1.901 17.305 17.305 0 0 0-3.587-1.397A15.811 15.811 0 0 0 14.95.963c-1.44 0-2.807.175-4.103.526-1.29.351-2.482.817-3.577 1.397a18.517 18.517 0 0 0-2.955 1.901 17.222 17.222 0 0 0-2.234 2.095C1.473 7.577 1.004 8.22.675 8.815.353 9.41.19 9.89.19 10.255s.162.848.484 1.45c.33.595.798 1.243 1.407 1.944.616.695 1.357 1.39 2.224 2.084a19.063 19.063 0 0 0 2.954 1.912 17.763 17.763 0 0 0 3.577 1.386c1.296.351 2.668.527 4.114.527Zm0-2.074c-1.146 0-2.245-.14-3.298-.419a15.067 15.067 0 0 1-2.943-1.117 18.12 18.12 0 0 1-2.492-1.514A17.64 17.64 0 0 1 4.306 12.8c-.537-.544-.953-1.042-1.246-1.493-.287-.452-.43-.803-.43-1.053 0-.208.143-.526.43-.956.293-.43.709-.917 1.246-1.461A16.957 16.957 0 0 1 8.71 4.626a15.17 15.17 0 0 1 2.943-1.16 12.219 12.219 0 0 1 3.298-.44c1.146 0 2.242.146 3.287.44 1.046.293 2.027.68 2.944 1.16.916.473 1.747.988 2.492 1.547a16.508 16.508 0 0 1 1.923 1.665c.537.544.949 1.031 1.235 1.46.294.43.44.75.44.957 0 .25-.146.601-.44 1.053-.286.45-.698.949-1.235 1.493a17.151 17.151 0 0 1-4.415 3.147c-.917.466-1.898.838-2.944 1.117-1.045.28-2.141.42-3.287.42Zm.01-1.44a5.64 5.64 0 0 0 2.246-.45 5.992 5.992 0 0 0 1.848-1.257 6.007 6.007 0 0 0 1.246-1.848c.3-.702.451-1.446.451-2.234a5.715 5.715 0 0 0-1.697-4.093 5.694 5.694 0 0 0-1.848-1.235 5.639 5.639 0 0 0-2.245-.451 5.72 5.72 0 0 0-2.277.45 5.694 5.694 0 0 0-1.848 1.236A5.715 5.715 0 0 0 9.59 8a5.785 5.785 0 0 0-.44 2.256c0 .788.15 1.532.45 2.234.301.695.717 1.31 1.247 1.848.53.53 1.142.949 1.837 1.257.701.3 1.46.45 2.277.45Zm-.01-3.91c-.523 0-.967-.185-1.332-.558a1.824 1.824 0 0 1-.548-1.321 1.8 1.8 0 0 1 .548-1.321c.365-.366.81-.548 1.332-.548a1.8 1.8 0 0 1 1.322.548c.372.365.558.805.558 1.32 0 .51-.186.95-.558 1.322a1.784 1.784 0 0 1-1.322.559Z"
                fill="currentColor"
              ></path>
            </svg>
            <div>
              <h1 className="text-xl font-semibold">
                Customize the info you track
              </h1>
              <p className="text-sm">
                Create your own labels, tags, owners, and more, so everyone has
                context and everything stays organized.
              </p>
            </div>
          </div>

          <Image
            src="/core.webp"
            width={1000}
            height={1000}
            alt="coreimage"
            className="w-full "
          />
        </div>
        <div className="bg-[#F6F5F4] pl-8 pt-8 rounded-xl ">
          <div className="space-y-4 pr-8">
            <svg
              viewBox="0 0 31 27"
              width="26"
              style={{ fill: "#0a85d1", color: "#0a85d1" }}
            >
              <path
                d="M16.167 24.7672C17.7497 24.7672 19.1318 24.5881 20.3135 24.23C21.5023 23.8791 22.4261 23.3886 23.085 22.7584C23.751 22.1282 24.084 21.3977 24.084 20.567C24.084 20.0155 23.9909 19.5608 23.8047 19.2027C23.6257 18.8375 23.418 18.5224 23.1816 18.2574C22.9525 17.9924 22.7448 17.7382 22.5586 17.4947C22.3796 17.244 22.29 16.9612 22.29 16.6461C22.29 16.3524 22.4404 16.091 22.7412 15.8619C23.042 15.6255 23.4287 15.3928 23.9014 15.1636C24.3812 14.9345 24.8861 14.6838 25.416 14.4117C25.946 14.1324 26.4473 13.7994 26.9199 13.4127C27.3997 13.0259 27.79 12.564 28.0908 12.0269C28.3916 11.4826 28.542 10.831 28.542 10.0718C28.542 8.94749 28.2627 7.92698 27.7041 7.01031C27.1527 6.09365 26.3649 5.30589 25.3408 4.64703C24.3239 3.98818 23.1064 3.4833 21.6885 3.13239C20.2705 2.77431 18.695 2.59528 16.9619 2.59528C14.7204 2.59528 12.6758 2.86741 10.8281 3.41168C8.98763 3.94879 7.40137 4.71507 6.06934 5.71051C4.74447 6.70595 3.72038 7.89476 2.99707 9.27692C2.28092 10.6519 1.92285 12.1773 1.92285 13.8531C1.92285 15.4859 2.26302 16.9719 2.94336 18.3111C3.6237 19.6431 4.59408 20.789 5.85449 21.7486C7.12207 22.7154 8.62598 23.4602 10.3662 23.983C12.1064 24.5058 14.04 24.7672 16.167 24.7672ZM16.167 22.5005C14.3623 22.5005 12.7223 22.2929 11.2471 21.8775C9.77897 21.4693 8.51855 20.8856 7.46582 20.1265C6.41309 19.3602 5.60026 18.4472 5.02734 17.3873C4.46159 16.3274 4.17871 15.1493 4.17871 13.8531C4.17871 12.4996 4.47949 11.2714 5.08105 10.1685C5.68978 9.06565 6.55632 8.11676 7.68066 7.32184C8.80501 6.52692 10.1514 5.91819 11.7197 5.49567C13.2881 5.06598 15.0355 4.85114 16.9619 4.85114C18.8382 4.85114 20.4746 5.06956 21.8711 5.50641C23.2676 5.94326 24.349 6.55556 25.1152 7.34332C25.8887 8.12392 26.2754 9.03343 26.2754 10.0718C26.2754 10.6734 26.125 11.1819 25.8242 11.5972C25.5234 12.0054 25.1331 12.3563 24.6533 12.65C24.1807 12.9436 23.6758 13.2157 23.1387 13.4664C22.6087 13.7099 22.1038 13.9677 21.624 14.2398C21.1442 14.5119 20.7539 14.8306 20.4531 15.1959C20.1523 15.5611 20.002 16.0158 20.002 16.5601C20.002 17.0256 20.0915 17.4195 20.2705 17.7418C20.4567 18.064 20.668 18.3541 20.9043 18.6119C21.1406 18.8697 21.3483 19.1275 21.5273 19.3853C21.7135 19.636 21.8066 19.926 21.8066 20.2554C21.8066 20.9358 21.291 21.48 20.2598 21.8882C19.2357 22.2964 17.8714 22.5005 16.167 22.5005ZM15.2432 20.0406C15.8089 20.0406 16.321 19.9081 16.7793 19.6431C17.2448 19.371 17.61 19.0058 17.875 18.5474C18.1471 18.0891 18.2832 17.5735 18.2832 17.0005C18.2832 16.4491 18.1436 15.9442 17.8643 15.4859C17.5921 15.0276 17.2269 14.6623 16.7686 14.3902C16.3102 14.1109 15.8018 13.9713 15.2432 13.9713C14.6917 13.9713 14.1868 14.1109 13.7285 14.3902C13.2702 14.6623 12.9014 15.0276 12.6221 15.4859C12.3499 15.9442 12.2139 16.4491 12.2139 17.0005C12.2139 17.5591 12.3499 18.0712 12.6221 18.5367C12.9014 18.995 13.2702 19.3602 13.7285 19.6324C14.1868 19.9045 14.6917 20.0406 15.2432 20.0406ZM15.2432 18.6334C14.9424 18.6334 14.6702 18.5617 14.4268 18.4185C14.1833 18.2753 13.9863 18.0783 13.8359 17.8277C13.6927 17.577 13.6211 17.3013 13.6211 17.0005C13.6211 16.664 13.6963 16.3775 13.8467 16.1412C13.9971 15.9048 14.194 15.7222 14.4375 15.5933C14.681 15.4573 14.9424 15.3892 15.2217 15.3892C15.5081 15.3821 15.7767 15.4429 16.0273 15.5718C16.278 15.7007 16.4821 15.8834 16.6396 16.1197C16.7972 16.356 16.876 16.6496 16.876 17.0005C16.876 17.3013 16.8044 17.577 16.6611 17.8277C16.5179 18.0783 16.321 18.2753 16.0703 18.4185C15.8268 18.5617 15.5511 18.6334 15.2432 18.6334ZM7.77734 15.3033C8.27148 15.3033 8.69043 15.1278 9.03418 14.7769C9.37793 14.4188 9.5498 13.9963 9.5498 13.5093C9.5498 13.0152 9.37793 12.5963 9.03418 12.2525C8.69043 11.9016 8.27148 11.7261 7.77734 11.7261C7.29753 11.7261 6.88216 11.9016 6.53125 12.2525C6.18034 12.5963 6.00488 13.0152 6.00488 13.5093C6.00488 13.9963 6.18034 14.4188 6.53125 14.7769C6.88216 15.1278 7.29753 15.3033 7.77734 15.3033ZM11.6445 11.898C12.2604 11.898 12.7832 11.6832 13.2129 11.2535C13.6497 10.8238 13.8682 10.2938 13.8682 9.66364C13.8682 9.05491 13.6497 8.53929 13.2129 8.11676C12.7832 7.68707 12.2604 7.47223 11.6445 7.47223C11.0215 7.47223 10.4915 7.68707 10.0547 8.11676C9.625 8.53929 9.41016 9.05491 9.41016 9.66364C9.41016 10.2938 9.625 10.8238 10.0547 11.2535C10.4915 11.6832 11.0215 11.898 11.6445 11.898ZM17.0156 10.19C17.5098 10.19 17.9287 10.0145 18.2725 9.66364C18.6234 9.31272 18.7988 8.8902 18.7988 8.39606C18.7988 7.89476 18.6234 7.47223 18.2725 7.12848C17.9287 6.77757 17.5098 6.60211 17.0156 6.60211C16.5215 6.60211 16.0954 6.77757 15.7373 7.12848C15.3864 7.47939 15.2109 7.90192 15.2109 8.39606C15.2109 8.8902 15.3864 9.31272 15.7373 9.66364C16.0954 10.0145 16.5215 10.19 17.0156 10.19ZM21.8389 10.8668C22.2399 10.8668 22.5801 10.7271 22.8594 10.4478C23.1458 10.1614 23.2891 9.81403 23.2891 9.40582C23.2891 9.01194 23.1458 8.67177 22.8594 8.38531C22.5801 8.09886 22.2399 7.95563 21.8389 7.95563C21.4378 7.95563 21.0905 8.09886 20.7969 8.38531C20.5104 8.67177 20.3672 9.01194 20.3672 9.40582C20.3672 9.81403 20.5104 10.1614 20.7969 10.4478C21.0905 10.7271 21.4378 10.8668 21.8389 10.8668Z"
                fill="currentColor"
              ></path>
            </svg>
            <div>
              <h1 className="text-xl font-semibold">
                Build any page, communicate any idea
              </h1>
              <p className="text-sm">
                Everything is drag and drop in Notion — images, toggles,
                to-do’s, even embedded databases.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center pt-10">
            <Image
              src="/projectData.webp"
              width={1000}
              height={1000}
              alt="coreimage"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center  gap-5">
        <h1 className="before:content-open-quote after:content-close-quote text-2xl font-light text-center  lg:w-1/2">
          Notion adapts to your needs. It{"'"}s as minimal or as powerful as you
          need it to be.
        </h1>
        <div className="flex gap-3">
          <Image
            src="/productLogo.webp"
            width={1000}
            height={1000}
            alt="productLogo"
            className="w-9"
          />
          <div>
            <h1 className="font-semibold">Rahim Makani</h1>
            <h1 className="text-sm">Director of Product, Matchgroup</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
