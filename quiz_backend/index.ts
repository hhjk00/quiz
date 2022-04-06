import { DataSource } from "typeorm";
import { Product } from "./Product.postgres";
import { ApolloServer, gql } from "apollo-server";


// 1. 타입
const typeDefs = gql`
  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }

  type Product {
    _id: ID
    seller: String
    name: String
    detail: String
    price: Int
  }


  type Query {
    fetchProducts: [Product]
    fetchProduct(productId: ID) : Product
      }

  type Mutation {
    createProduct(seller: String, createProductInput: CreateProductInput!) : String
    updateProduct(productId: ID, updateProductInput: UpdateProductInput!) : String
    deleteProduct(productId: ID) : String
  }
`;

// 2. API
const resolvers = {
  Query: {
    fetchProduct: async (_:any, args:any ) => {
      const result = await Product.findOne({where:{_id :args.productId}})
      return result
    },

    fetchProducts: async () => {
      const result = await Product.find( );

      return result;
    },
  },

  Mutation : {
    createProduct: async (_: any, args: any) => {
      await Product.insert({
        ...args,
          ...args.createProductInput,
      })

      return "상품을 등록했습니다."
    },

    updateProduct: async (_:any, args:any) => {
      await Product.update({ _id: args.productId },
         { name : args.updateProductInput.name,
          detail : args.updateProductInput.detail,
          price : args.updateProductInput.price},
         )
         return "상품이 업데이트되었습니다"

    },

    deleteProduct: async (_:any, args:any) => {
      await Product.update({ _id: args.productId }, { deletedAt: new Date()})
      return "상품이 삭제되었습니다"
    }

  }
    
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors:true
});








const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5033,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Product],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공");
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결실패");
  });
