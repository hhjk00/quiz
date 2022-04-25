import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useRecoilState } from "recoil";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState } from "../../../commons/store";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 AccessToken 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            //  operation.getContext().headers; // 이 쿼리에서 작성됐던 헤더를 가지고 온다
            operation.setContext({
              headers: {
                ...operation.getContext().headers, // 기존 헤더는 그대로 가져오기
                Authorization: `Bearer ${newAccessToken}`, //  accessToken만 바꿔치기
              },
            });

            // 3-2. 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
