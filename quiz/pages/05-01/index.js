// import axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const [callApi] = useMutation(CREATE_PRODUCT);

  const callGraphqlApi = async () => {
    //   const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
    //                              get=메서드        endpoint= posts/1

    try {
      const result = await callApi({
        variables: { seller: seller, createProductInput:{
            name: name,
            detail : detail,
            price : price
        } },
      }); // graphql-api방식
      console.log(result);
      console.log(result.data.createProduct.message);
      alert("게시글 등록에 성공했어요");
      alert("상세 페이지로 이동해 볼까요?");
      router.push(
      //  ↓주소 틀렸었음
        `/05-02/${result.data.createProduct._id}`
      );
      //             ↑ 템플릿 리터럴

      // const banana = 3
      // const apple = 2

      // "철수는 바나나를" + banana + "개 가지고 있고," + "사과를" + apple + "개 가지고 있습니다."
      // `철수는 바나나를" + ${banana} + "개 가지고 있고," + "사과를" + ${apple} + "개 가지고 있습니다.`
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  }

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(Number(event.target.value));
  };


  return (
    <div>
      {/* <div>{data}</div> */}
      판매자: <input type="text" onChange={onChangeSeller} /> <br />
      상품명: <input type="text" onChange={onChangeName} /> <br />
      상품내용: <input type="text" onChange={onChangeDetail} /> <br />
      상품가격: <input type="number" onChange={onChangePrice} /> <br />
      <button onClick={callGraphqlApi}>Graphql-API 요청하기!!!</button>
    </div>
  );
  
}
