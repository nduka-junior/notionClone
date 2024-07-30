import React from "react";
import { NavItems } from "@/utils/headers";
import Image from "next/image";

function NavItemsComponent({ navItems }: { navItems: NavItems[] }) {
  return (
    <div className="lg:flex w-full">
      {navItems.map((navItem, index) => (
        <div
          key={index}
          className="flex flex-col   gap-1   lg:border-r-[1px] border-[#00000024] pr-8  last:border-0 p-2
          "
        >
          {navItem.labels && (
            <h1 className="relative text-[10px] uppercase text-[#0009] tracking-widest ">
              {navItem.labels}
            </h1>
          )}
          <div className="flex   flex-col !w-full  ">
            {navItem.navFields && navItem.navFields.map((field, fieldIndex) => (
              <div
                key={fieldIndex}
                className="flex flex-col  hover:bg-[#80808013] rounded-lg p-2 pl-3 cursor-pointer w-full"
              >
                {field.imageURL ? (
                  <div className="flex gap-1 items-center w-full">
                    <Image
                      src={field.imageURL}
                      width={100}
                      height={100}
                      alt="navIcon"
                      className="w-[30px] mr-1 "
                    />
                    <div className=" leading-4 ">
                      <h2 className=" lg:font-medium text-sm ">
                        {field.title}
                      </h2>
                      <p className="text-[#0009] text-sm  max-lg:hidden  ">
                        {field.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className=" leading-4 ">
                    <h2 className=" lg:font-medium text-sm ">{field.title}</h2>
                    {field.description && (
                      <p className="text-[#0009] text-sm max-lg:hidden">
                        {field.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NavItemsComponent;
