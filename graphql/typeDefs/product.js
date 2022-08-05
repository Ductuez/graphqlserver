export default `

  enum Category {
    Coat
    TShirt
    Shirts
    Trousers
  }

  enum Size {
    XS
    M
    S
    L
    XL
    XXL
  }

  type Product {
    price: Int
    oldPrice: Int
    size: Size
    outOfStock: Boolean
    name: String
    category: [Category]
    still: Int
    thumbnail: String
    listImages: [String]
  }

  input CreateProductInput {
    price: Int
    oldPrice: Int
    size: String
    outOfStock: Boolean
    name: String
    category: [String]
    thumbnail: String
    listImages: [String]
  }
`
