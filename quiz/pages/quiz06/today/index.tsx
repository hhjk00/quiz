import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const MyRow = styled.div`
  display: flex;
  cursor: pointer;
`;

const MyColumn = styled.div`
  width: 300px;
  font-size: 22px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const getDate = (date) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = String(newdate.getMonth() + 1).padStart(2, "0");
  const dd = String(newdate.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export default function BoardsPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [basketItems, setBasketItems] = useState([]);

  const onClickRow = (el) => () => {
    // 불러오기
    const baskets = JSON.parse(
      localStorage.getItem(getDate(new Date())) || "[]"
    );

    // 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem(getDate(new Date()), JSON.stringify(baskets));

    const newBaskets = JSON.parse(
      localStorage.getItem(getDate(new Date())) || "[]"
    );
    setBasketItems(newBaskets);
  };

  useEffect(() => {
    const baskets = JSON.parse(
      localStorage.getItem(getDate(new Date())) || "[]"
    );
    setBasketItems(baskets);
  }, []);

  return (
    <Wrapper>
      <div>
        {data?.fetchBoards.map((el) => (
          <MyRow key={el._id} onClick={onClickRow(el)}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
      </div>

      <div>
        {basketItems.map((el) => (
          <MyRow key={el._id}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
      </div>
    </Wrapper>
  );
}
