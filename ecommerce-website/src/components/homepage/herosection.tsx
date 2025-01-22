import heroImg from "../../../Images/hero-sections-images/hero.png";
import star from "../../../Images/hero-sections-images/Vector (1).png";

import Image from "next/image";
export const Herosection = () => {
  return (
    <div className="bg-mainColor ">
      <div className="w-[95%] 2xl:w-[1400px] mx-auto flex items-center justify-center dl:justify-between flex-col dl:flex-row">
        <div className="w-[70%] dl:w-[50%] space-y-6 my-14">
          <div>
            <h1 className="text-[40px] sm:text-[64px] font-oswald">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[16px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>
          <button className="bg-black px-8 py-2 rounded-[7rem] text-white w-full  sm:max-w-[14rem] ">
            Shop Now
          </button>
          <div className="font-satoshi font-bold text-[24px] grid grid-cols-2 justify-items-center sm:justify-items-start sm:grid-cols-3 gap-4">
            <div className="">
              <h1>200+</h1>
              <p className="text-[12px] font-normal">International Brands</p>
            </div>
            <div className="">
              <h1>2,000+</h1>
              <p className="text-[12px] font-normal">High Quality</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h1>30,000+</h1>
              <p className="text-[12px] font-normal">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end mt-6 relative">
          <Image
            src={star}
            width={100}
            height={100}
            alt="star"
            className="absolute top-[22px] right-[35px]  w-[60px] h-[60px] sm:w-[95px] sm:h-[95px] sm:right-0"
          />
          <Image
            src={star}
            width={100}
            height={100}
            alt="star2"
            className="absolute  left-[10px] top-[150px] sm:top-[189px] sm:left-[0] w-[50px] h-[50px] sm:w-[50px] sm:h-[50px]"
          />
          <Image src={heroImg} width={500} height={500} alt="hero-image " />
        </div>
      </div>
    </div>
  );
};
