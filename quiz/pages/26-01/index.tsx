import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button01 from "../../src/components/commons/buttons/01";
import Input01 from "../../src/components/commons/inputs/01";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const Table = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
`;

const Writer = styled.div`
  width: 20%;
`;
const Contents = styled.div`
  width: 30%;
`;

const Title = styled.div`
  width: 30%;
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  //   const [inputs, setInputs] = useState(Inputs);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      //   refetchQueries: [{ query: FETCH_BOARDS }],

      update(cache, { data }) {
        // 캐시를 직접 업데이트 해줘, {data}=useQuery결과
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              ); // el._id가 안되므로, readField에서 꺼내오기
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async (data) => {
    // 등록하기로직

    await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
      //   refetchQueries: [{ query: FETCH_BOARDS }],

      update(cache, { data }) {
        data.createBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              // prev 안에는 10개의 객체 [{},{},{}...]
              return [data.createBoard, ...prev]; // 새로운 글 + 기존 글 = 11개의 글이 만들어짐
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>
        {data?.fetchBoards.map((el) => (
          <Table key={el._id}>
            <Writer>{el.writer}</Writer>
            <Title>{el.title}</Title>
            <Contents>{el.contents}</Contents>
            <button onClick={onClickDelete(el._id)}>X</button>
          </Table>
        ))}
      </div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자: <Input01 type="text" register={register("writer")} />
        비밀번호 : <Input01 type="password" register={register("password")} />
        <br />
        제목: <Input01 type="text" register={register("title")} />
        내용: <Input01 type="text" register={register("contents")} />
        <Button01 title="등록" />
      </form>
    </>
  );
}
