import { model, Schema } from 'mongoose'

const messageSchema = new Schema({
  username: String,
  password: String,
  email: String,
  role: String,
})

export default model('User', messageSchema)
