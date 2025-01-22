// import { NextRequest, NextResponse } from "next/server";
// import {client} from "@/sanity/lib/client"

// export const GET = async (request: NextRequest, {params}: {params:{id:string}}) => {
// const singleProduct = await client.fetch(`*[_type == "products" && _id == "${params.id}"]`,{},{cache:"no-store"});
// console.log("single Product is fetch",singleProduct)
// //     console.log(params.id)
// if(singleProduct.length === 0)  {
//     console.log("hi123")
//    return  NextResponse.json({ message: "Product not found" }, {status:404})
// }
//     return NextResponse.json({ message: "success",singleProduct: singleProduct[0] });   
// }


import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
    try {
        // Validate params
        if (!params?.id) {
            return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
        }

        // Fetch single product
        const singleProduct = await client.fetch(
            `*[_type == "products" && _id == $id]`,
            { id: params.id },
            { cache: "no-store" }
        );

        console.log("Single Product fetched:", singleProduct);

        // Check if product exists
        if (!singleProduct || singleProduct.length === 0) {
            console.log("Product not found");
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        // Return success response
        return NextResponse.json({ message: "Success", singleProduct: singleProduct[0] });
    } catch (error) {
        console.error("Error fetching product:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};