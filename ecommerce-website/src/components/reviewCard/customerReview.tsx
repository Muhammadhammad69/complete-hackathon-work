import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaEllipsis } from "react-icons/fa6";

interface CardInfo {
  author: string;
  rating: number;
  halfRating?: boolean;
  verified: boolean;
  width: string;
  height: string;
  content: string;
  icon?: boolean;
  postDate?: string;
}
export const ReviewCard = ({ review }: { review: CardInfo }) => {
  // console.log(review);
  return (
    <div
      className={`bg-white border-2 border-borderColor py-6 px-8  h-auto  rounded-[20px] `}
    >
      <div className="flex  w-full flex-col gap-y-3  mb-2">
        <div className="flex justify-between text-yellow-500">
          <div className="flex gap-x-1">
            {[...Array(review.rating)].map((_, index) => (
              <FaStar
                key={index}
                className={`h-5 w-5 ${
                  index <= review.rating ? "fill-current" : "text-gray-300"
                }`}
              />
            ))}
            {review.halfRating && (
              <FaStarHalf className="h-5 w-5 text-yellow-500" />
            )}
          </div>
          {review.icon && (
            <div>
              <FaEllipsis size={28} className="text-gray-500" />
            </div>
          )}
        </div>
        <div className="flex gap-x-2">
          <span className=" font-bold text-[20px] font-satoshi">
            {review.author}
          </span>
          <div>
            {review.verified && <RiVerifiedBadgeFill size={22} fill="green" />}
          </div>
        </div>
        <div
          className={`text-[16px] font-satoshi ${review.height}  overflow-hidden text-gray-600 font-normal `}
        >
          <p>{review.content}</p>
        </div>
      </div>
      {review.postDate?.length && (
        <div>
          <h4 className="text-gray-500 font-satoshi font-semibold  text-[16px]">
            Posted on {review.postDate}
          </h4>
        </div>
      )}
    </div>
  );
};
