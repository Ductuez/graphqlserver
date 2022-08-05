import { gql } from 'apollo-server-express'

import product from './product'
import promotion from './promotion'
import upload from './upload'

export default gql`
  ${product}
  ${promotion}
  ${upload}
  type Message {
    text: String
    createdAt: String
    createdBy: String
  }

  type User {
    username: String
    password: String
    email: String
    role: String
  }

  enum CategoryMessage {
    WEB
    APP
  }

  input MessageInput {
    text: String
    username: String
    type: CategoryMessage
  }

  input CreateUserInput {
    username: String
    password: String
    email: String
    role: String
  }

  input LoginUserInput {
    username: String
    password: String
    email: String
  }

  type Token {
    jwt: ID!
  }

  type Query {
    message(id: ID!): Message
    hello: String
    getUsers: [User]
    getUser(id: ID!): User
    getProducts: [Product]
    getProduct(id: ID!): Product
    getPromotions: [Promotion]
    getPromotion(id: ID!): Promotion
  }

  type Mutation {
    createMessage(messageInput: MessageInput): Message!
    createUser(createUserInput: CreateUserInput): User!
    createProduct(createProductInput: CreateProductInput): Product!
    createPromotion(createPromotionInput: CreatePromotionInput): Promotion!
    login(loginUserInput: LoginUserInput): Token!
    singleUpload(file: Upload!): File!
  }
`
