"use client";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, Check } from "lucide-react";
import {useFilterContext} from "@/context/filterContext/filtercontext";
import {IFilterContext} from "@/context/contextTypes";
export const ColorPicker = ({ colors }: { colors: string[] }) => {
  // console.log("colors", colors);
  const {getFilterValues} = useFilterContext() as IFilterContext;
  const colorArray = colors ? colors : [""];
  const [icon, setIcon] = useState(false);
  const [colorNames, setColorNames] = useState<string[]>([]);
  const colorHandler = (colorName: string) => {
    if (colorNames.includes(colorName)) {
      setColorNames(colorNames.filter((color) => color !== colorName));
    } else {
      setColorNames([...colorNames, colorName]);
    }
  };
  getFilterValues("color",colorNames);
  return (
    <div className="bg-white w-[100%] sm:w-[248px] mx-auto ">
      <div
        className="flex justify-between  cursor-pointer"
        onClick={() => {
          setIcon(!icon);
        }}
      >
        <h2 className="text-[20px] font-bold  ">Color</h2>
        {icon ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      {icon && (
        <>
          <div className="grid grid-cols-5 gap-4 mt-8 ">
            {/* Color options */}
            {colorArray.map((color, i) => {
              return (
                <button
                  className={`rounded-full   w-10 h-10 flex justify-center items-center   cursor-pointer border-2 border-[#d6d6d6] ${color === "white" ? "text-black" : "text-white"}`}
                  style={{ backgroundColor: color }}
                  key={i}
                  onClick={() => colorHandler(color)}
                >
                  {colorNames.includes(color) && <Check strokeWidth={2} />}
                </button>
              );
            })}
          </div>
        </>
      )}
      <hr className="mt-4 mb-4" />
    </div>
  );
};
