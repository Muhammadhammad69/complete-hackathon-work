import { NextResponse,NextRequest } from "next/server";
import { client } from "@/sanity/lib/client";
export const POST = async (request:NextRequest) =>{
    try{
      const data = await request.json();
      const { cart } = data;
      // console.log("data", cart);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = cart.map(async(item:any)=>{
        const id = `${item.id}-${item.color.toLowerCase()}-${item.size.toLowerCase()}`
        await client.delete(id);
        // console.log("item deleted successfully");
      })
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const responseHold = await Promise.all(response);
      return NextResponse.json({ success: true, message: "success" }, { status: 200 });
    }catch (error){
      console.log("error", error);
        return NextResponse.json({ success: true, message: "Internal Server Error" }, { status: 500 });
    }
   
}