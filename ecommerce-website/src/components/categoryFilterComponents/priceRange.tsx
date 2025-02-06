"use client";
import {useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import {useFilterContext} from "@/context/filterContext/filtercontext";
import {IFilterContext} from "@/context/contextTypes";
export function StaticPriceRange({price}:{price:{minPrice:number,maxPrice:number}}) {
  // console.log('price',price);
  const {getFilterValues} = useFilterContext() as IFilterContext;
  const [value, setValue] = useState<number[]>([50, 150]);
  const [icon, setIcon] = useState(false);
  const handleChange = (newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      const [start, end] = newValue;
      // Ensure minimum distance of 50
      if (end - start >= 100) {
        setValue([start, end]);
      }
    }
    getFilterValues("price",value);
  };
  return (
    <div className="bg-white mx-auto w-[100%] sm:w-[248px] font-satoshi">
      <div className="flex justify-between  cursor-pointer" onClick={()=> {
        setIcon(!icon)
      }}>
        <h2 className="text-[20px] font-bold ">Price</h2>
        {icon ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      {icon && (
        <>
        
      <div className="mt-8">
        
        <Slider
          range
          className="t-slider"
          min={0}
          max={price.maxPrice}
          value={value}
          defaultValue={[78, 150]}
          onChange={handleChange}
          step={1}
          allowCross={false}
        />
      </div>
      <div className="flex justify-between w-[80%] mx-auto mt-2">

      <p className="mt-2">
        Min: ${value[0]}
      </p>
      <p className="mt-2">
        Max: ${value[1]}
      </p>
      </div>
      </>
      )}
      <hr  className="mt-4 mb-4"/>
    </div>
  );
}
