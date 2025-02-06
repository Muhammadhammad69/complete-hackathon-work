import { NextResponse, NextRequest } from "next/server";
import { client } from "@/sanity/lib/client"

export const POST = async (request: NextRequest) => {

    try {
        const data = await request.json();
        const { id, cart } = data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cartItems = cart.map(async (item: any) => {
            await client.createOrReplace({
                _id: `${item.id}-${item.color.toLowerCase()}-${item.size.toLowerCase()}`,
                _type: "userCart",
                customerId: id,
                productId: item.id,
                color: item.color,
                size: item.size,
                quantity: item.quantity
            });
            // console.log("Cart Item Send Successfully");
        });
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
        const cartItemsResponse = await Promise.all(cartItems);
        return NextResponse.json({ success: true, message: "success" }, { status: 200 });

    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ success: true, message: "Body is missing" }, { status: 409 });
    }

}