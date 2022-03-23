import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function BoardsDetailPage() {
  const router = useRouter()

  const { data } = useQuery(FETCH_PRODUCT, { 
    variables: { productId: String(router.query.myproductId) }
  })

  const onClickMove = () => {
      router.push(`/quiz/08-01/${router.query.myproductId}/edit`)
  }


  return(
    <div>
    <div>판매자: {data? data.fetchProduct.seller : "loading..." }</div>
    <div>상품명: {data? data.fetchProduct.name : "loading..." }</div>
    <div>상품내용: {data? data.fetchProduct.detail : "loading..." }</div>
    <div>상품가격: {data? data.fetchProduct.price : "loading..." }</div>
    <button onClick={onClickMove}>수정하기</button>

       {/* 조건부 렌더링: 데이터가 있으면 뒤에꺼(데이터) 보여줘 없으면 앞에꺼(작성자..) 보여줘 */}
      {/* //  data && data.fetchBoard.number = data?.fetchBoard.number
              Optional-Chaining이라고 한다. 최신버전에서만 가능 */}

    </div>

    
  )
} 
