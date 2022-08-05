export default `

  type Promotion {
    value: Int
    Percent: Int
    expired: String
    name: String
    type: [Category]
  }

  input CreatePromotionInput {
    value: Int
    Percent: Int
    expired: String
    name: String
    type: [String]
  }
`
