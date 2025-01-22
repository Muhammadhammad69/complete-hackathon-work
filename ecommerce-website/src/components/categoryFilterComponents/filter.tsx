import { SlidersHorizontal, ChevronRightIcon } from "lucide-react";
export const Filter = () => {
  return (
    <div className="bg-white  mx-auto w-[100%] sm:w-[248px]">
      <div className=" flex  justify-between font-satoshi text-[20px] font-bold ">
        <h2 className="text-[20px] font-bold mb-4">Filters</h2>
        <SlidersHorizontal className="hidden lg:block" />
        
      </div>
      <hr className="mb-4" />
      <div className="space-y-4 font-satoshi font-light text-[16px]">
        <div className="flex items-center justify-between cursor-pointer">
          <h3 className="  flex items-center">T-shirts</h3>
          <ChevronRightIcon size={18} className="" />
        </div>
        <div className="flex items-center justify-between cursor-pointer">
          <h3 className="  flex items-center">Shorts</h3>
          <ChevronRightIcon size={18} className="" />
        </div>
        <div className="flex items-center justify-between cursor-pointer">
          <h3 className="  flex items-center">Shirts</h3>
          <ChevronRightIcon size={18} className="" />
        </div>
        <div className="flex items-center justify-between cursor-pointer">
          <h3 className="  flex items-center">Hoodie</h3>
          <ChevronRightIcon size={18} className="" />
        </div>
        <div className="flex items-center justify-between cursor-pointer">
          <h3 className="flex items-center">Jeans</h3>
          <ChevronRightIcon size={18} className="" />
        </div>
        {/* Rest of the filter options */}
      </div>
      <hr className="mt-4 mb-4" />
    </div>
  );
};
