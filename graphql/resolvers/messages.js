import Message from '../../models/Message'

export default {
  Mutation: {
    async createMessage(_, { messageInput: { text, username } }, context) {
      console.log(context)
      const newMessage = new Message({
        text: text,
        createdBy: username,
        createdAt: new Date().toISOString(),
      })

      const res = await newMessage.save()
      return {
        id: res.id,
        ...res._doc,
      }
    },
  },
  Query: {
    message: (_, { ID }) => Message.findById(ID),
  },
}
