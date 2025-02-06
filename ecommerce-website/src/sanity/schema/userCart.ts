import {defineField, defineType} from "sanity";


export const userCartItem = defineType({
    name: 'userCart',
    title: 'User Cart',
    type: 'document',
    fields: [
        defineField({
            name: 'customerId',
            title: 'Customer Id',
            type: 'string',
        }),
        defineField({
            name: 'productId',
            title: 'Product Id',
            type: 'string',
        }),
        defineField({
            name: 'size',
            title: 'Size',
            type: 'string',
        }),
        defineField({
            name: 'color',
            title: 'Color',
            type: 'string',            
        }),
        defineField({
            name: 'quantity',
            title: 'Quantity',
            type: 'number',
        }),
        
    ],
})