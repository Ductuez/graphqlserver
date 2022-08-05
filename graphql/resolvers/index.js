import messagesResolvers from './messages'
import userResolvers from './user'
import productResolvers from './product'
import promotionResolvers from './promotion'
import uploadResolvers from './upload'

export default {
  Query: {
    ...messagesResolvers.Query,
    ...userResolvers.Query,
    ...productResolvers.Query,
    ...productResolvers.Query,
    ...promotionResolvers.Query,
    hello: () => 'hello world',
  },
  Mutation: {
    ...messagesResolvers.Mutation,
    ...userResolvers.Mutation,
    ...productResolvers.Mutation,
    ...promotionResolvers.Mutation,
    ...uploadResolvers.Query,
  },
}
