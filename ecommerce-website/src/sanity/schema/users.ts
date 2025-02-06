import {defineField, defineType} from 'sanity'

export const users = defineType({
    name: 'users',
    title: 'Users',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'password',
            title: 'Password',
            type: 'string',
        }),
        defineField({
            name: 'isAdmin',
            title: 'Is Admin',
            type: 'boolean',
            initialValue: false,            
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
        }),
        defineField({
            name: 'orders',
            title: 'Orders',
            type: 'array',
            of: [{type: 'string'}]
        })
    ],
})