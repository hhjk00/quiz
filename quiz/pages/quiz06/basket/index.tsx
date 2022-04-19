import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  /* width: 25%; */
`;

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  // 서버에서 실행 X 브라우저에서만 실행, didMount형태라서 한번만 실행된다. 너무 많은 렌더링 방지

  return (
    <div>
      {basketItems.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
