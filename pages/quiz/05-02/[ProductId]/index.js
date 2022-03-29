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

export default function DynamicRoutedPage() {
  const router = useRouter()
  console.log(router)

  const { data } = useQuery(FETCH_PRODUCT, { //요청이 날아감(비어있는 상태 undefined)
    variables: { productId: router.query.ProductId }
            //    ↑ gql에서 지정하는 값
  })

  console.log(data)

  return(
    <div>
    <div>{data?.fetchProduct._id} 게시글에 오신 것을 환영합니다</div>
    <div>판매자: {data? data.fetchProduct.seller : "loading..." }</div>
    <div>상품명: {data? data.fetchProduct.name : "loading..." }</div>
    <div>상품내용: {data? data.fetchProduct.detail : "loading..." }</div>
    <div>상품가격: {data? data.fetchProduct.price : "loading..." }</div>

       {/* 조건부 렌더링: 데이터가 있으면 뒤에꺼(데이터) 보여줘 없으면 앞에꺼(작성자..) 보여줘 */}
      {/* //  data && data.fetchBoard.number = data?.fetchBoard.number
              Optional-Chaining이라고 한다. 최신버전에서만 가능 */}

    </div>

    
  )
} 
