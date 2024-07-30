"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import NavItemsComponent from "./navItems/NavItemsComponent";
import { headersLinks } from "@/utils/headers";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4 ">
      <div className="flex justify-between items-center w-full max-lg:border-b-[1px] border-[#80808038] pb-3  relative">
        <div className="flex gap-4 max-lg:flex-col lg:items-center   w-full  ">
          <Image
            src="/notionLogo.svg"
            width={100}
            height={100}
            alt="notionIcon"
          />
          <div
            className={`lg:flex ${
              isOpen ? "block" : "hidden"
            } max-lg:absolute max-lg:top-10 w-full `}
          >
            <div className="w-full lg:flex  gap-5 ">
              {headersLinks.map((headers, index) => {
                return (
                  <div key={index} className="">
                    <div className=" ">
                      {headers.title && (
                        <>
                          <div className="hidden max-md:block ">
                            <Accordion
                              type="single"
                              collapsible
                              className="w-full"
                            >
                              <AccordionItem value="item-1" className="w-full">
                                <AccordionTrigger className="py-6 font-semibold">
                                  {headers.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                  {headers.navItems && (
                                    <NavItemsComponent
                                      navItems={headers.navItems}
                                    />
                                  )}
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                          <div className=" hidden md:block">
                            <HoverCard>
                              <HoverCardTrigger
                                className={`cursor-pointer font-normal
                           flex items-center
                              ${
                                headers.navItems &&
                                "hover:after:bg-[url('/nav-caret.svg')] hover:after:transform hover:after:rotate-180 after:bg-[url('/nav-caret.svg')]  after:w-[8px] after:h-[6px] after:ml-2 after:bg-no-repeat"
                              }`}
                              >
                                {headers.title}
                              </HoverCardTrigger>
                              <HoverCardContent
                                className="w-full p-0 px-3 mb-0"
                                align="start"
                              >
                                {headers.navItems && (
                                  <NavItemsComponent
                                    navItems={headers.navItems}
                                  />
                                )}
                              </HoverCardContent>
                            </HoverCard>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-6  flex-col w-full justify-end  lg:hidden py-4">
              <div className="border-b-[1px] font-semibold border-[#8080803c] pb-6 cursor-pointer ">
                Request a demo
              </div>
              <div className="flex gap-4  text-center flex-col-reverse">
                <div className="border-[#8080803c] border-[1px] p-1 rounded cursor-pointer hover:bg-[#d0cfcf13] ">
                  Login
                </div>
                <div className="bg-black text-white p-2 rounded w-full cursor-pointer hover:bg-[#000000d4] ">
                  Get Notion free
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {isOpen ? (
          <div className="lg:hidden cursor-pointer" onClick={toggleDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="26"
            >
              <defs fill="currentColor"></defs>
              <path
                d="m36.24,32l15.76,15.76-4.24,4.24-15.76-15.76-15.76,15.76-4.24-4.24,15.76-15.76-15.76-15.76,4.24-4.24,15.76,15.76,15.76-15.76,4.24,4.24-15.76,15.76Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        ) : (
          <div className="lg:hidden cursor-pointer" onClick={toggleDropdown}>
            <svg viewBox="0 0 30 30" width="26" fill="black">
              <path d="M2,4v2h26V4H2z M2,16h26v-2H2V16z M2,26h26v-2H2V26z"></path>
            </svg>
          </div>
        )}
        <div className="flex gap-6 items-center  w-full justify-end font-medium text-sm max-lg:hidden">
          <div className="border-r-[1px] border-[#8080803c] pr-6 cursor-pointer hover:bg-[#80808013] p-2 rounded">
            Request a demo
          </div>
          <div className="flex gap-6 items-center cursor-pointer ">
            <div className="hover:bg-[#80808013] p-2 rounded">Login</div>
            <div className="bg-black text-white p-2 rounded w-full strong cursor-pointer hover:bg-[#000000d4]">
              Get Notion free
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
