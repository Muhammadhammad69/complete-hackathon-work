import { defineType } from "sanity"

export const products = defineType({
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: "stockQuantity",
            type: 'number',
        },
        {
            name: "unitSold",
            type: 'number',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            // 👇 Enables crop and hotspot tools
            options: {
                hotspot: true
            },
        },
        {
            name: "subCategory",
            type: 'string',
            options: {
                list: [
                    { title: 'T-Shirt', value: 'tshirt' },
                    { title: 'Short', value: 'short' },
                    { title: 'Jeans', value: 'jeans' },
                    { title: 'Hoddie', value: 'hoodie' },
                    { title: 'Shirt', value: 'shirt' },
                ]
            }
        },
        {
            name: "discountPercent",
            title: "Discount Percent",
            type: 'number',
        },
        {
            name: "isNew",
            type: 'boolean',
        },
        {
            name: "colors",
            title: "Colors",
            type: 'array',
            of: [
                { type: 'string' }
            ]
        },
        {
            name: "sizes",
            title: "Sizes",
            type: 'array',
            of: [
                { type: 'string' }
            ]
        }
    ],
})