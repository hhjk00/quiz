import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardsProductUI from "./BoardWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./BoardWrite.queries";

export default function BoardsProduct(props) {
  const router = useRouter();

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT)


  const onClickEdit = async() => { //수정
    await updateProduct({
        variables : { productId: (router.query.myproductId), updateProductInput: {
          name: name, detail: detail, price: price
        }} //어떤 게시글을 수정할것인가
    })
    alert("게시글 수정에 성공하였습니다!")
    router.push(`/08-01/${router.query.myproductId}`)
 
    }

  const onClickSubmit = async () => { //등록
    try {
      const result = await createProduct({
        variables: { seller: seller, createProductInput:{
            name: name,
            detail : detail,
            price : price
        } },
      }); 
      alert("게시글 등록에 성공했어요");
      router.push(
        `/08-01/${result.data.createProduct._id}`
      );
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
    <BoardsProductUI
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}

      isEdit={props.isEdit}
      />
  );
  
}
