import { useState } from "react";
// Install react-icons if not already installed: npm install react-icons
import { X, Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex font-satoshi cs:hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white  transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 py-8`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 "
        >
          <X />
        </button>
        <div className="p-6 overflow-y-auto h-full  ">
          <Link
            href={"./"}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <h1 className="text-[32px]  font-bold mb-6">SHOP.CO</h1>
          </Link>
          <div className="flex flex-col space-y-4 text-gray-700">
          <Link href="/" className="hover:text-black" onClick={() => {
                setIsOpen(false);
            }}>
              Home
            </Link>
            <Link
              href="/shop"
              className="hover:text-black flex justify-between"
              onClick={() => {
                setIsOpen(false);
            }}
            >
              Shop
              <ChevronDown strokeWidth={1.75} />
            </Link>
            <Link href="/sale" className="hover:text-black" onClick={() => {
                setIsOpen(false);
            }}>
              On Sale
            </Link>
            <Link href="/newarrivals" className="hover:text-black" onClick={() => {
                setIsOpen(false);
            }}>
              New Arrivals
            </Link>
            {/* <Link href="#" className="hover:text-black" onClick={() => {
                setIsOpen(false);
            }}>
              Brands
            </Link> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <button onClick={() => setIsOpen(true)} className="m-4    rounded ">
          <Menu size={26} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
