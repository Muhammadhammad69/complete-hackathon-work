"use client";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import {useFilterContext} from "@/context/filterContext/filtercontext";
import {IFilterContext} from "@/context/contextTypes";
export const SizeSelector = ({ sizes }: { sizes: string[] }) => {
  const {getFilterValues} = useFilterContext() as IFilterContext;
  const [icon, setIcon] = useState(false);
  const [sizeNames, setSizeNames] = useState<string[]>([]);
  const sortOrder = ["S", "M", "L", "XL", "XXL"];
  const sortedSizes: string[] = sizes ? sortOrder.filter((size) => sizes.includes(size.toLowerCase())) : [];
  // console.log("sizes", sortedSizes);
  const sizeHandler = (value:string)=> {
    if (sizeNames.includes(value)) {
      setSizeNames(sizeNames.filter((color) => color !== value));
    } else {
      setSizeNames([...sizeNames, value]);
    }
  }
  getFilterValues("size",sizeNames);
  return (
    <div className="bg-white   mx-auto w-[100%] sm:w-[248px]">
      <div
        className="flex justify-between  cursor-pointer"
        onClick={() => {
          setIcon(!icon);
        }}
      >
        <h2 className="text-[20px] font-bold  ">Size</h2>
        {icon ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      {icon && (
        <div className="grid grid-cols-4 gap-4 font-satoshi text-[14px] mt-8">
          {sortedSizes.map((size, i) => {
            return (
              <button className={` w-12 h-12 rounded-full flex items-center justify-center  text-center p-1 ${sizeNames.includes(size)? "bg-black text-white" : "bg-mainColor text-black"}`}
              key={i}
              onClick={() => sizeHandler(size)}
              >
            {size}
          </button>
            )
          })}
        {/* <div className="flex gap-2">
          <button className="bg-mainColor w-[7rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white ">
            XX-Small
          </button>
          <button className="bg-mainColor w-[5rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white">
            X-Small
          </button>
        </div> */}
        {/* <div>
          <div className="flex gap-2">
            <button className="bg-mainColor w-[5rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white ">
              Small
            </button>
            <button className="bg-mainColor w-[6rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white">
              Medium
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <button className="bg-mainColor w-[5rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white  ">
              Large
            </button>
            <button className="bg-mainColor w-[6rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white">
              X-Large
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <button className="bg-mainColor w-[7rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white ">
              XX-Large
            </button>
            <button className="bg-mainColor w-[6rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white">
              3X-Large
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <button className="bg-mainColor w-[6rem] h-[2.5rem] rounded-[2rem] hover:bg-black hover:text-white ">
              4X-Large
            </button>
          </div>
        </div> */}
      </div>
      )}
      <hr className="mt-4 mb-4" />
    </div>
  );
};
