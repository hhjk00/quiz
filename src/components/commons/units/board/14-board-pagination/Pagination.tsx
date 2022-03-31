import { useState } from "react";
import styled from "@emotion/styled";

const Color = styled.span`
  color : ${(props) => props.current == props.id ? "orange" : "black"};
`

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(false)

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) }); // variables 객체 , page는 숫자이므로 Number로 감싸줌
    setCurrent(event.target.id)
  };

  const onClickNextPage = (event) => {
    if (!(startPage + 10 <= props.lastPage)) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 }); // variables 객체 , page는 숫자이므로 Number로 감싸줌
    setCurrent(event.target.id)

  };

  const onClickPrevPage = (event) => {
    if (startPage === 1) return
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 }); // variables 객체 , page는 숫자이므로 Number로 감싸줌
    setCurrent(event.target.id)

  };

  return (
    <div>
      <button onClick={onClickPrevPage} disabled={startPage === 1 ? true : false}>＜</button>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <Color
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
              current = {current}
            >
              {` `} {index + startPage}
            </Color>
          )
      )}
      <button onClick={onClickNextPage} disabled={startPage + 10 >= props.lastPage ? true : false}>＞</button>
    </div>
  );
}
