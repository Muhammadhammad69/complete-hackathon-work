import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import payIcon1 from "../../../Images/payment-icons/Visa.png";
import payIcon2 from "../../../Images/payment-icons/Mastercard.png";
import payIcon3 from "../../../Images/payment-icons/Paypal.png";
import payIcon4 from "../../../Images/payment-icons/ Pay.png";
import payIcon5 from "../../../Images/payment-icons/G Pay.png";
import { NewsletterSection } from "../commoncomponents/newsletter";
export const FooterSec = () => {
  return (
    <>
   <div className="w-[3rem] h-24"></div>
    <footer className="bg-mainColor flex dark:bg-gray-900 text-satoshi relative mt-20  flex-col justify-center items-center ">
      <div className="absolute w-[100%] 2xl:w-[1400px] top-[-120px] md:top-[-78px] ">
      <NewsletterSection  />
      </div>
      <div className="mx-auto w-[95%] 2xl:w-[1400px]  sm:px-8 dl:px-0  pb-6 lg:pb-8 pt-[12rem] md:pt-[9rem] ">
        {/* {md:flex md:justify-between} */}
        <div className="grid grid-cols-[object-fit] dl:grid-cols-[minmax(0,280px),repeat(1,minmax(0,auto))] justify-center dl:justify-normal justify-items-start dl:justify-items-stretch gap-y-6 dl:gap-0">
          <div className="mb-6 md:mb-0 flex flex-col gap-y-[35px]">
            <div className="flex flex-col gap-y-[25px]">
              <Link href={"/"} className="">
                <span className=" text-[66px] dl:text-[34px] font-bold font-oswald whitespace-nowrap dark:text-white">
                  Shop.co
                </span>
              </Link>
              <p className="text-[14px] text-[#000000] w-[250px]">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
            </div>
            <div className="flex gap-x-4 ">
              <i className="bg-white w-12 h-12 rounded-[2rem] flex justify-center items-center hover:bg-black hover:text-white ">
                <FaTwitter size={28} className="cursor-pointer" />
              </i>
              <i className="bg-white w-12 h-12 rounded-[2rem] flex justify-center items-center hover:bg-black hover:text-white">
                <FaFacebookF size={28} className="cursor-pointer" />
              </i>
              <i className="bg-white w-12 h-12 rounded-[2rem] flex justify-center items-center hover:bg-black hover:text-white">
                <FaInstagram size={28} className="cursor-pointer" />
              </i>
              <i className="bg-white w-12 h-12 rounded-[2rem] flex justify-center items-center hover:bg-black hover:text-white">
                <IoLogoGithub size={28} className="cursor-pointer" />
              </i>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(2,minmax(0,1fr))]  sm:grid-cols-[repeat(4,minmax(0,1fr))] gap-x-3 sm:gap-x-6 lg:gap-x-0 justify-items-start dl:justify-items-end gap-y-6 sm:gap-y-0">
            <div className="text-[16px] font-light font-satoshi">
              <h2 className="mb-6  font-medium text-black  uppercase dark:text-white ">
                Company
              </h2>
              <ul className="text-gray-500 text-[14px] md:text-[16px] font-light dark:text-gray-400">
                <li className="mb-4">
                  <Link href={""} className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={""} className="hover:underline">
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={""} className="hover:underline">
                    Works
                  </Link>
                </li>
                <li>
                  <Link href={""} className="hover:underline">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-[16px] font-light font-satoshi">
              <h2 className="mb-6  font-medium text-gray-900 uppercase dark:text-white">
                Help
              </h2>
              <ul className="text-gray-500 font-light dark:text-gray-400 text-[14px] md:text-[16px]">
                <li className="mb-4">
                  <Link href={""} className="hover:underline">
                    Customer Support
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={""} className="hover:underline">
                    Delivery Details
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={""} className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href={""} className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-[16px] font-light font-satoshi">
              <h2 className="mb-6  font-medium text-gray-900 uppercase dark:text-white">
                FAQ
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 text-[14px] md:text-[16px] font-light">
                <li className="mb-4">
                  <Link href={""} className="hover:underline">
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={""} className="hover:underline">
                    Manage Delivers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={""} className="hover:underline">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href={""} className="hover:underline">
                    Payments
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-[16px] font-light font-satoshi">
              <h2 className="mb-6  font-medium text-gray-900 uppercase dark:text-white">
                RESOURCES
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 text-[14px] md:text-[16px] font-light">
                <li className="mb-4">
                  <Link href={""} className="hover:underline">
                    Free eBooks
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={""} className="hover:underline">
                    Development Tutorials
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={""} className="hover:underline">
                    How to Blog
                  </Link>
                </li>
                <li>
                  <Link href={""} className="hover:underline">
                    Youtube Playlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-[14px] font-satoshi text-gray-500 text-center dark:text-gray-400">
            <Link href={""} className="hover:underline">
              Shop.co &nbsp;
            </Link>
            © 2000-2023 . All Rights Reserved.
          </span>
          <div className="flex mt-4 justify-center gap-x-3 sm:mt-0">
            <div className="bg-white p-2 rounded-md w-[46px] h-[30px] ">
              <Image src={payIcon1} width={25} height={25} alt="visa" 
              className="w-[32px] h-[11px] "/>
            </div>
            <div className="bg-white p-2 rounded-md w-[46px] h-[30px]">
              <Image src={payIcon2} width={25} height={25} alt="mastercard" 
              className="w-[25px] h-[15px] "/>
            </div>
            <div className="bg-white p-2 rounded-md w-[46px] h-[30px]">
              <Image src={payIcon3} width={35} height={35} alt="paypal" 
              className="w-[34px] h-[9px] "/>
            </div>
            <div className="bg-white p-2 rounded-md w-[46px] h-[30px]">
              <Image src={payIcon4} width={25} height={25} alt=".pay" 
              className="w-[26px] h-[11px] "/>
            </div>
            <div className="bg-white p-2 rounded-md w-[46px] h-[30px]">
              <Image src={payIcon5} width={25} height={25} alt="g-pay" 
              className="w-[28px] h-[11px] "/>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
