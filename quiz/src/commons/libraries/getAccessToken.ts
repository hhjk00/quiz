import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async () => {
  try {
    // graphql client를 사용하지 않고 axios를 사용해 백엔드로 요청하는 방법
    // axios.post("https://backend06.codebootcamp.co.kr/graphql", {
    //   query: `
    //   mutation restoreAccessToken {
    //     restoreAccessToken {
    //       accessToken
    //     }
    //   }
    // `
    // })

    const graphQLClient = new GraphQLClient(
      "https://backend06.codebootcamp.co.kr/graphql", // secure 옵션 때문에 https로 변경
      { credentials: "include" }
    );

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    console.log(error);
  }
};
