import Product from '../../models/Product'
const { AuthenticationError } = require('apollo-server-express')
export default {
  Mutation: {
    async createProduct(
      _,
      { createProductInput: { price, oldPrice, size, outOfStock, name, category, thumbnail, listImages, still } },
      { userId }
    ) {
      if (!userId) throw new AuthenticationError('Accept Denied')
      const newProdut = new Product({
        price,
        oldPrice,
        size,
        outOfStock,
        name,
        category,
        thumbnail,
        listImages,
        createdAt: new Date().toISOString(),
        still,
      })

      const res = await newProdut.save()
      return {
        id: res.id,
        ...res._doc,
      }
    },
  },
  Query: {
    getProduct: (_, { ID }) => Product.findById(ID),
    getProducts: (_, { ...arg }, { userId }) => {
      const products = Product.find()
        .clone()
        .catch(function (err) {
          console.log(err)
        })
      return products
    },
  },
}
