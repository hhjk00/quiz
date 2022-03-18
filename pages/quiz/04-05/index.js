//import axios from "axios";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationProduct() {
  const [seller, setSeller] = useState("")
  const [product, setProduct] = useState("")
  const [contents, setMyContents] = useState("")
  const [price, setPrice] = useState("")
  
  const [data, setData] = useState("")
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {  seller: seller,  createProductInput: {
          //객체로 묶어 실행
          name: product,
          detail: contents,
          price: price,
        },
      },
    });
    console.log(result);
    console.log(result.data.createProduct.message);
    setData(result.data.createProduct.message);
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value)
  }

  const onChangeProduct = (event) => {
    setProduct(event.target.value)
  }

  const onChangeContents = (event) => {
    setMyContents(event.target.value)
  }

  const onChangePrice = (event) => {
    setPrice(Number(event.target.value))
  }



  return (
    <>
      판매자: <input type="text"  onChange={onChangeSeller}/>
      <br />
      상품명: <input type="text" onChange={onChangeProduct}/>
      <br />
      상품내용: <input type="text" onChange={onChangeContents}/>
      <br />
      상품가격: <input type="text" onChange={onChangePrice}/>
      <br />
      <button onClick={onClickSubmit}>상품 등록하기</button>
    </>
  );
}
