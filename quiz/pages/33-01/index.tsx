import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6267aad0a8255b002988cc3c" },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOptimisticUI = () => {
    likeBoard({
      variables: { boardId: "6267aad0a8255b002988cc3c" },

      // 쿼리가 2번 요청됨
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "6267aad0a8255b002988cc3c" },
      //   },
      // ],

      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1, // 기존에 있던거 + 1
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6267aad0a8255b002988cc3c" },
          data: {
            fetchBoard: {
              _id: "6267aad0a8255b002988cc3c",
              __typename: "Board",
              // 위 두개는 필수 입력. 아니면 작동 안함
              // likeCount: 10, // 우리가 10으로 조작
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <div>
      <h1>옵티미스틱UI</h1>
      <button>좋아요: {data?.fetchBoard.likeCount}</button>
      <button onClick={onClickOptimisticUI}>좋아요 올리기</button>
    </div>
  );
}
