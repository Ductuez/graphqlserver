import { model, Schema } from 'mongoose'

const promotionSchema = new Schema({
  value: Number,
  percent: Number,
  expired: Date,
  name: String,
  type: Array,
})

export default model('Promotion', promotionSchema)
