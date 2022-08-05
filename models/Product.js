import { model, Schema } from 'mongoose'

const productSchema = new Schema({
  price: Number,
  oldPrice: Number,
  size: String,
  outOfStock: Boolean,
  name: String,
  category: Array,
  still: Number,
  thumbnail: String,
  listImages: Array,
})

export default model('Product', productSchema)
