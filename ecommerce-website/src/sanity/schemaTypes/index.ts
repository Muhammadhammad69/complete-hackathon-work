import { type SchemaTypeDefinition } from 'sanity'
import { products } from '../schema/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
}
