import { ColorPicker } from "./colorpicker"
import {DressStyle} from "./dressStyle"
import { Filter } from "./filter"
import { StaticPriceRange } from "./priceRange"
import {SizeSelector} from "./sizeSelector"
export const MainFilter = () =>{
return(
    <div className="w-[295px] min-h-[600px] max-h-[1330px] border py-6 rounded-[20px] border-borderColor">
        <Filter />
        <StaticPriceRange />
        <ColorPicker />
        <SizeSelector />
        <DressStyle />
    </div>
        

)
}