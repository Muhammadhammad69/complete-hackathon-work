import { MainFilter } from "./categoryFilterComponents/main";
import { CategoryCards } from "./categorypagecomponents/categoryCards";
import { CategoryTop } from "./categorypagecomponents/categoryTop";

export const CategoryPage = () => {
  return (
      <div className="w-[99%] xs:w-[95%] 2xl:w-[1400px] mx-auto mt-4 flex gap-x-8 ">
        <div className="hidden lg:block">
        <MainFilter />
        </div>
      <div className=" w-full">
        <div>
          <CategoryTop />
          <CategoryCards />
          {/* <hr className="mt-4"/>
          <Pagination /> */}
          {/* <div className="w-24 h-24 md:w-12 md:h-12"></div> */}
        </div>
      </div>
      
    </div>
  );
};
