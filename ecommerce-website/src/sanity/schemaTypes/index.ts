import { type SchemaTypeDefinition } from 'sanity'
import { products } from '../schema/product'
import {users} from '../schema/users'
import {userCartItem} from '../schema/userCart'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    products, 
    users,
    userCartItem
  ],
}
