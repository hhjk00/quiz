import { } from './BoardDetail.styles'

export default function BoardDetailUI (props) {

return(
    <div>
    <div>{props.data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다</div>
    <div>작성자: {props.data?.fetchBoard.writer}</div>
    <div>제목: {props.data?.fetchBoard.title}</div>
    <div>내용: {props.data?.fetchBoard.contents}</div>
       {/* 조건부 렌더링: 데이터가 있으면 뒤에꺼(데이터) 보여줘 없으면 앞에꺼(작성자..) 보여줘 */}
      {/* //  data && data.fetchBoard.number = data?.fetchBoard.number
              Optional-Chaining이라고 한다. 최신버전에서만 가능 */}
    </div>

    
  )
}