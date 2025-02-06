import { NextRequest, NextResponse } from "next/server";
import {client} from "@/sanity/lib/client"
export const POST = async (request: NextRequest) => {
    try{
        const {id} = await request.json();
        
        let sanityData = await client.fetch(`*[_type == "userCart" && customerId == "${id}"]`,{},{
            cache: "no-store",
        });   
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sanityData = sanityData.map(async(item:any)=>{
            const product = await client.fetch(`*[_type == "products" && _id == "${item.productId}"]`,{},{
                cache: "no-store",
            })
            // console.log("fetchProduct", product);
            return {...item,product:product[0]};
        })
        const sanityData1 = await Promise.all(sanityData);
        // console.log("sanityData", sanityData1);
        return NextResponse.json({ success: true, message: "success", cartItems:sanityData1 }, { status: 200 });
    }catch(error){
        console.log("error", error);
        return NextResponse.json({ success: true, message: "internal server error" }, { status: 500 });
    }

    
}