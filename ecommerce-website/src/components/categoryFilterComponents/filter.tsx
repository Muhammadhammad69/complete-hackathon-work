"use client";
import { SlidersHorizontal,ChevronDownIcon, ChevronUpIcon} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import {useFilterContext} from "@/context/filterContext/filtercontext";
import {IFilterContext} from "@/context/contextTypes";
export const Filter = ({ category }: {category: string[]}) => {
  const {getFilterValues} = useFilterContext() as IFilterContext;
  const [viewMore, setViewMore] = useState(false);
  const [selectCategories, setSelectCategories] = useState<string[]>([]);
  const arrayOfUniqueSubcategories =category ? category : [""];
  const handleChecked = (checked: boolean, subCategory:string) => {
    // console.log("hi", subCategory);
    if(selectCategories.includes(subCategory)){
      setSelectCategories(selectCategories.filter((item) => item !== subCategory));
      
    }else {
      setSelectCategories([...selectCategories, subCategory]);
     
    }
   

    // setChecked(checked);
  };
  getFilterValues("category",selectCategories);
  
  // console.log("selectCategories", selectCategories);
  return (
    <div className="bg-white  mx-auto w-[100%] sm:w-[248px]">
      <div className=" flex justify-between font-satoshi text-[20px] font-bold ">
        <h2 className="text-[20px] font-bold mb-4">Filters</h2>
        <SlidersHorizontal className="hidden lg:block" />
      </div>
      <hr className="mb-4" />
      <div className="space-y-4 font-satoshi ">
        {arrayOfUniqueSubcategories.slice(0, 5).map((subCategory: string, i:number) => {
          return (
            <div className="flex items-center space-x-2" key={i}>
              <Checkbox id={`${subCategory}`} value={`${subCategory}`}  onCheckedChange={(checked)=>{handleChecked(checked as boolean, subCategory.toLowerCase())}} />
              <label
                htmlFor={`${subCategory}`}
                className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize font-satoshi"
              >
                {subCategory}
              </label>
            </div>
          );
        })}
        {arrayOfUniqueSubcategories.length > 5 && (
          <div className="space-y-4 font-satoshi">
            {!viewMore && (
              <button
                className="flex gap-1 items-center font-medium"
                onClick={() => setViewMore(true)}
              >
                <i>
                  <ChevronDownIcon size={20} />
                </i>
                View More
              </button>
            )}
            {viewMore && (
              <div>
                <div className="space-y-4 font-satoshi">
                  {arrayOfUniqueSubcategories
                    .slice(5)
                    .map((subCategory: string, i:number) => {
                      return (
                        <div className="flex items-center space-x-2" key={i}>
                          <Checkbox id={`${subCategory}`} />
                          <label
                            htmlFor={`${subCategory}`}
                            className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize font-satoshi"
                          >
                            {subCategory}
                          </label>
                        </div>
                      );
                    })}
                </div>
                <button
                  className="mt-4 flex gap-1 items-center font-medium"
                  onClick={() => setViewMore(false)}
                >
                  <i>
                    <ChevronUpIcon size={20} />
                  </i>
                  View More
                </button>
              </div>
            )}
          </div>
        )}
        {/* Rest of the filter options */}
      </div>
      <hr className="mt-4 mb-4" />
    </div>
  );
};
