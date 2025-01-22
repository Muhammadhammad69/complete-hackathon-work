import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProductImage = ({images}: {images: any}) => {
  return (
     <div className="flex flex-col lg:flex-row gap-2 h-auto  justify-center md:justify-normal items-center md:items-start"> 
      <div className=" order-last lg:order-first  grid grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-5 ">
        <Image
          src={`${images === undefined ? "/image.png" : urlFor(images).width(120).height(120).url()}`}
          alt="T-shirt view 1"
          width={152}
          height={168}
          className="border rounded-[20px] cursor-pointer"
          loading="lazy"
        />
        <Image
          src={`${images === undefined ? "/image.png" : urlFor(images).width(120).height(120).url()}`}
          alt="T-shirt view 2"
          width={152}
          height={168}
        
          className="border rounded-[20px] cursor-pointer self-center"
        />
        <Image
          src={`${images === undefined ? "/image.png" : urlFor(images).width(120).height(120).url()}`}
          alt="T-shirt view 3"
          width={152}
          height={28}
          className="border rounded-[20px] cursor-pointer self-end "
        />
      </div>
      <div className="rounded-[20px] overflow-hidden flex">
        <Image
          src={`${images === undefined ? "/image.png" : urlFor(images).width(500).height(500).url()}`}
          alt="One Life Graphic T-Shirt"
          width={500}
          height={500}
          className="object-cover object-center rounded-[20px] "
        />
      </div>
    </div>
  );
};
