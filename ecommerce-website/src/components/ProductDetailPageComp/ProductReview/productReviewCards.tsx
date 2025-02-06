import { ReviewCard } from "@/components/reviewCard/customerReview";
interface CardDetails {
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
export const ProductReviewCards = () => {
  const cardsDetails: CardDetails[] = [
    {
      author: "Samantha D.",
      rating: 4,
      halfRating: true,
      verified: true,
      width: "",
      height: "",
      content:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      icon: true,
      postDate: "August 14 2024",
    },
    {
      author: "Alex M.",
      rating: 4,
      halfRating: false,
      verified: true,
      width: "",
      height: "h-[100px] ",
      content:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      icon: true,
      postDate: "Augest 18 2024",
    },
    {
      author: "Ethan R.",
      rating: 3,
      halfRating: true,
      verified: true,
      width: "",
      height: "h-[100px]",
      content:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      icon: true,
      postDate: "Augest 19 2024",
    },
    {
      author: "Olivia P.",
      rating: 4,
      halfRating: false,
      verified: true,
      width: "",
      height: "h-[100px]",
      content:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      icon: true,
      postDate: "Augest 19 2024",
    },
    {
      author: "Liam K.",
      rating: 4,
      halfRating: false,
      verified: true,
      width: "",
      height: "h-[100px]",
      content:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      icon: true,
      postDate: "September 12 2024",
    },
    {
      author: "Ava H.",
      rating: 4,
      halfRating: true,
      verified: true,
      width: "",
      height: "h-[100px]",
      content:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      icon: true,
      postDate: "September 15 2024",
    },
  ];
  return (
    <div className="font-satoshi ">
      
      <div className="grid  sm:grid-cols-2 gap-4 sm:gap-6">
        {cardsDetails.map((item, i) => {
          return <ReviewCard review={item} key={i}/>;
        })}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-8 py-2 sm:px-12 sm:py-3 border-2 border-borderColor rounded-full  hover:font-bold hover:underline hover:underline-offset-4">Load More Reviews</button>
      </div>
    </div>
  );
};
