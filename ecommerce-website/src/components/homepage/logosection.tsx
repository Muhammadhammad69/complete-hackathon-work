import Image from "next/image";
import logo1 from "../../../Images/logo/1.png";
import logo2 from "../../../Images/logo/2.png";
import logo3 from "../../../Images/logo/3.png";
import logo4 from "../../../Images/logo/4.png";
import logo5 from "../../../Images/logo/5.png";
export const Logosection = () => {
  return (
    <div className="bg-black">
      <div className="w-[95%] 2xl:w-[1400px] mx-auto grid grid-cols-[repeat(3,minmax(0,206px))]  lg:grid-cols-[repeat(4,minmax(0,206px))_minmax(0,230px)] items-center justify-between justify-items-center py-8 gap-8 ">
        <Image src={logo1} height={500} width={500} alt="logo1" className="" />

        <Image
          src={logo2}
          height={500}
          width={500}
          alt="logo1"
          className="w-[91px] h-[37px]"
        />

        <Image src={logo3} height={500} width={500} alt="logo1" className="" />

        <div className="flex   sm:block">
          <Image
            src={logo4}
            height={500}
            width={500}
            alt="logo1"
            className=""
          />
          
        </div>
        <div >
        <Image
            src={logo5}
            height={500}
            width={500}
            alt="logo1"
            
          />
        </div>
      </div>
    </div>
  );
};
