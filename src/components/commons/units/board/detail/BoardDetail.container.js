import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
    const router = useRouter()
    console.log(router)
  
    const { data } = useQuery(FETCH_BOARD, { //요청이 날아감(비어있는 상태 undefined)
      variables: { number: Number(router.query.number) } // 83013
    })
  
    console.log(data)

    return (
        <BoardDetailUI
         data={data}
         />
    )
}