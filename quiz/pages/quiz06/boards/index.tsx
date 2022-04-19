import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BoardsPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data);

  const onClickBasket = (el) => () => {
    console.log(el);

    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const temp = baskets.filter((basketEl) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담은 게시물입니다.");
      return;
    }

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickBasketCancel = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const newBasket = baskets.filter((basketEl) => basketEl._id !== el._id);

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(newBasket));
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickBasket(el)}>게시물 담기</button>
          <button onClick={onClickBasketCancel(el)}>담기 취소</button>
        </MyRow>
      ))}
    </div>
  );
}
