// components/Tabs.tsx

import { SlidersVertical, ChevronDown } from "lucide-react";
export const Tabs = () => {
  return (
    <div className="border-b border-gray-200 font-satoshi">
      <div className="flex justify-around sm:space-x-20">
        <button className="pb-2 border-b-2 border-transparent font-medium text-gray-500 hover:text-black hover:border-black sm:w-64">
          Product Details
        </button>
        <button className="pb-2 border-b-2 border-black font-medium text-black sm:w-64">
          Rating & Reviews
        </button>
        <button className="pb-2 border-b-2 border-transparent font-medium text-gray-500 hover:text-black hover:border-black sm:w-64">
          FAQs
        </button>
      </div>
    </div>
  );
};

export const ReviewHead = () => {
  return (
    <div className="flex justify-between font-satoshi">
      <div className="flex ">
        <h1 className="text-[20px] sm:text-[24px] font-bold ">
          All Review<span className="ml-2 text-[12px] font-medium text-gray-500">(231)</span>
        </h1>
      </div>
      <div className="flex gap-x-4">
        <div className="bg-mainColor p-3 rounded-full flex items-center justify-center hover:bg-black hover:text-white cursor-pointer">
          <SlidersVertical  />
        </div>
        <button className="px-6 py-2  bg-mainColor rounded-full justify-center items-center gap-x-4 hover:bg-black hover:text-white hidden sm:flex ">
          Latest
          <ChevronDown size={18} />
        </button>
        <button className="bg-mainColor text-[14px] sm:text-[16px] rounded-full py-3 px-4 sm:px-8 hover:bg-black hover:text-white font-medium">
            Write a Review
        </button>
      </div>
    </div>
  );
};
