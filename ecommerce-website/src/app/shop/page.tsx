import React from "react";
import { ChevronRightIcon } from "lucide-react";
import { CategoryPage } from "@/components/productGridDisplay";
import { Suspense } from "react";
const Page = () => {
  return (
    <>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto">
        <hr />

        <div className="mt-4 font-satoshi text-gray-600 text-[16px] flex items-center gap-1">
          <span>Home</span>
          <ChevronRightIcon size={20} />
          <span className="text-black">Casual</span>
        </div>
      </div>

      <div>
        <Suspense>
          <CategoryPage />
        </Suspense>
      </div>
    </>
  );
};

export default Page;
