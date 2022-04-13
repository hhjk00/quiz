import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store"; 
import { WithAuth } from "../../../src/components/commons/hoc/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;


 function LoginSuccessPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  console.log(accessToken)
  

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>;
  // 이름이 안나오는 이유: accessToken을 넘겨주는 header가 없어서!
}

export default WithAuth(LoginSuccessPage)