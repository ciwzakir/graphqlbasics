import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

export const typeDefs = `#graphql

  type Product {
    id: ID!
    name: String,
    image:String,
    description: String,
    price: Float,
    quantity: Float,
    createdAt: String,
    updatedAt: String,
    onStock: Boolean,
    category: Category
    reviews : [Review]
  }
  type Category {
    id: ID!
    name: String,
    products : [Product]
  }
  type Review {
    id : ID
    review : String
    rating: Float
    date : String
    productId: String
  }

  type Query {
    products: [Product]
    SingleProduct(productId:ID!):Product
    categories:[Category]
    category(categoryId:ID!):Category
  }
`;
