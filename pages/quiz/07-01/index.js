import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled"
import { Fragment } from "react";


const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
        _id
      seller
      name
      detail
      price
    }
  }
`;

const DELETE_PRODUCT = gql`
    mutation deleteBoard($productId: ID){
        deleteProduct(productId: $productId){
            message
        }
    }
    `

const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: 20%;
`

export default function MapBoardPage() {
  const [ deleteProduct ] = useMutation(DELETE_PRODUCT)
  const { data } = useQuery(FETCH_PRODUCTS)

  console.log(data)

  const onClickDelete = (event) => {
      deleteProduct({

          variables: { productId: String(event.target.id) },
           //html에서 문자열로 넘어가므로 숫자형으로 바꿔준다
           refetchQueries: [{ query: FETCH_PRODUCTS}]
      })
  }

  return(
    <Fragment>
        {data?.fetchProducts.map((el)=> (
          // <Fragment key={el.number}
            <Row key={el._id}>
                <Column><input type="checkbox"/></Column>
                <Column>{el._id}</Column>                
                <Column>{el.seller}</Column>
                <Column>{el.name}</Column>
                <Column>{el.detail}</Column>
                <Column>{el.price}</Column>

                <Column><button id={el._id} onClick={onClickDelete}>삭제</button></Column>
            </Row>
    ))}
    
    </Fragment>

    
  )
} 
