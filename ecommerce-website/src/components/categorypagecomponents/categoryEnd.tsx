import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { totalPage } from "./categoryCards";
import { FaEllipsis } from "react-icons/fa6";
export const Pagination = ({ page }: { page: number }) => {
  const pageNumbers = [];
  console.log("page", page);
  console.log("total", totalPage);
  for (let i = page - 1; i <= page + 1; i++) {
    if (i >= 1 && page <= totalPage) {
      pageNumbers.push(i);
    }
    if (i === page + 1 && pageNumbers.length - 1 === 0) {
      console.log("hi123");

      pageNumbers.push(pageNumbers[0] + 1);
    }
    if (i === page + 1 && pageNumbers.length === 2) {
      pageNumbers.push(pageNumbers[pageNumbers.length - 1] + 1);
    }
  }
  console.log(pageNumbers);

  return (
    <div className="flex items-center justify-between w-full  mx-auto mt-8 font-satoshi">
      {/* Previous Button */}
      <Link
        href={`/shop?${new URLSearchParams({ page: String(page > 1 ? page - 1 : page) }).toString()}`}
      >
        {page > 1 && (
          <button
            className="flex items-center px-3 sm:px-4 py-2 text-sm font-medium text-black border border-borderColor rounded-md hover:bg-gray-100 text-[12px] sm:text-[14px] "
            disabled={page > totalPage}
            // Add logic to disable if on the first page
          >
            <FaArrowLeft className="mr-2" />
            Previous
          </button>
        )}
      </Link>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">
        {pageNumbers.map((number: number, index: number) => {
          return (
            // { totalPage  number && (

            <Link
              key={index}
              href={`/shop?${new URLSearchParams({ page: String(number < totalPage ? number : totalPage).toString() })}`}
            >
              {index < 3 && (
                <button
                  className={`px-4 py-2 text-sm font-medium  bg-white rounded-md text-black ${page === number ? "border" : "hover:bg-gray-100"} `}
                  disabled={number > totalPage}
                >
                  {number}
                </button>
              )}
            </Link>
          );
        })}
        <FaEllipsis className="text-black" size={15} />
      </div>

      {/* Next Button */}
      <Link
        href={`/shop?${new URLSearchParams({ page: String(page < totalPage ? page + 1 : page) }).toString()}`}
      >
        {page < totalPage && (
          <button
            className="flex items-center px-2 sm:px-4 py-2 text-sm font-medium text-black border border-borderColor rounded-md hover:bg-gray-100 text-[10px] sm:text-[14px]"
            // Add logic to disable if on the last page
          >
            Next
            <FaArrowRight className="ml-2" />
          </button>
        )}
      </Link>
    </div>
  );
};
