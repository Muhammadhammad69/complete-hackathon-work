import React from "react";
import Image from "next/image";
import img1 from "../../../Images/dress-style-sec/image 11.png";
import img2 from "../../../Images/dress-style-sec/image 13.png";
import img3 from "../../../Images/dress-style-sec/image 12.png";
import img4 from "../../../Images/dress-style-sec/image 14.png";
export const DressStyleSec = () => {
  return (
    <div>
      <div className="bg-mainColor px-4 sm:px-8 lg:px-16 py-16 w-[95%] 2xl:w-[1400px] mx-auto rounded-[40px] mt-12">
        <h2 className="text-[48px] font-bold mb-12 text-center font-oswald ">
          BROSWER BY DRESS STYLE
        </h2>

        <div className="w-[95%] sm:w-[80%] md:w-full gap-y-8 md:gap-y-4 grid grid-rows-1 md:grid-rows-[repeat(2,minmax(0,50%))] mx-auto font-satoshi">
          <div className="grid grid-rows-[repeat(2,50%)] gap-y-4 md:gap-y-0 md:flex md:gap-x-4 flex-col md:flex-row ">
            <div className="relative ">
              <Image
                src={img1}
                width={289}
                height={289}
                loading="lazy"
                alt="casual"
                className="rounded-[20px]  w-full h-full  "
              />
              <span className="absolute font-bold text-[24px] sm:text-[36px] top-[5px] left-[20px] ">
                Casual
              </span>
            </div>
            <div className="relative md:flex-grow ">
              <Image
                src={img2}
                width={289}
                height={289}
                loading="lazy"
                alt="Formal"
                className="rounded-[20px] h-full w-full "
              />
              <span className="absolute font-bold text-[24px] sm:text-[36px] top-[5px] left-[20px]">
                Formal
              </span>
            </div>
          </div>
          <div className="grid grid-rows-[repeat(2,45%)] gap-y-4 md:gap-y-0 md:flex flex-col md:flex-row md:gap-x-4 ">
            <div className="relative md:flex-grow ">
              <Image
                src={img3}
                width={289}
                height={289}
                loading="lazy"
                alt="Party"
                className="rounded-[20px]  h-full w-full"
              />
              <span className="absolute font-bold text-[24px] sm:text-[36px] top-[5px] left-[20px]">
                Party
              </span>
            </div>
            <div className="relative ">
              <Image
                src={img4}
                width={289}
                height={289}
                loading="lazy"
                alt="Gym"
                className="rounded-[20px]  h-full w-full "
              />
              <span className="absolute font-bold text-[24px] sm:text-[36px] top-[5px] left-[20px]">
                Gym
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
