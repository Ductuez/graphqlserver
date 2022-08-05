import Promotion from '../../models/Promotion'

const { AuthenticationError } = require('apollo-server-express')
export default {
  Mutation: {
    async createPromotion(_, { createPromotionInput: { value, percent, expired, name, type } }, { userId }) {
      if (!userId) throw new AuthenticationError('Accept Denied')
      const newProdut = new Promotion({
        value,
        percent,
        expired,
        name,
        type,
        createdAt: new Date().toISOString(),
      })

      const res = await newProdut.save()
      return {
        id: res.id,
        ...res._doc,
      }
    },
  },
  Query: {
    getPromotion: (_, { ID }) => Promotion.findById(ID),
    getPromotions: (_, { ...arg }, { userId }) => {
      const promotion = Promotion.find()
        .clone()
        .catch(function (err) {
          console.log(err)
        })
      return promotion
    },
  },
}
