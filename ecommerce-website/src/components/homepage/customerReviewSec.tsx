import { ReviewCard } from "@/components/reviewCard/customerReview";
import { ArrowRight, ArrowLeft } from "lucide-react";
export const CustomerReviewSec = () => {
  const review = [
    {
      author: "Sarah M.",
      rating: 5,
      verified: true,
      width: "",
      height: "h-[120px]",
      content:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      author: "Alex K.",
      rating: 5,
      verified: true,
      width: "",
      height: "h-[120px] ",
      content:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      author: "James L.",
      rating: 5,
      verified: true,
      width: "",
      height: "h-[120px] ",
      content:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];
  return (
    <div>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto my-8">
        <div className="flex justify-between items-center py-8">
          <h1 className="uppercase text-[28px] sm:text-[38px] md:text-[48px] lg:text-[58px] font-bold font-oswald">
            Our Happy Customer
          </h1>
          <div className="flex gap-x-2">
            <div className="bg-mainColor w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-[1.5rem] ">
              <ArrowLeft
                size={28}
                strokeWidth={1.25}
                className="cursor-pointer hover:stroke-2"
              />
            </div>
            <div className="bg-mainColor w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-[1.5rem] ">
              <ArrowRight
                size={28}
                strokeWidth={1.25}
                className="cursor-pointer hover:stroke-2"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(1,minmax(0,400px))] sm:grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(0,400px))]  justify-center sm:justify-between gap-x-6 lg:gap-x-4 gap-y-6">
        
          {review.map((item,i)=>{
            return(
              <ReviewCard  review={item} key={i} />
            )
          })}
        </div>
      </div>
    </div>
  );
};
