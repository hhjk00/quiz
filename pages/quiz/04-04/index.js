// import axios from 'axios'
import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_PRODUCT = gql`
  mutation {
    createProduct(
      seller: "혜진"
      createProductInput: { name: "신발", detail: "깨끗합니다", price: 20000 }
    ) {
      _id
      number
      message
    }
  }
`;        


export default function GraphqlMutationPage(){
    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_PRODUCT)


    const callGraphqlApi = async () => {
    //   const result = await axios.get("https://koreanjson.com/posts/1") //rest-api방식
        //get=메서드                 endpoint= posts/1

        const result = await callApi() // graphql-api방식
        console.log(result)
        console.log(result.data.createProduct.message)
        setData(result.data.createProduct.message)
        // console.log(result.data.title)
        // setData(result.data.title)
    }

    return (
        <div>
            <div>{data}</div>
            <button onClick={callGraphqlApi}>상품 등록하기</button>
        </div>
    )
}