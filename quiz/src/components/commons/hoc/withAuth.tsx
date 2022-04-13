import { useRouter } from "next/router";
import { useEffect } from "react";

export const WithAuth = (Component) => (props) => {
    const router = useRouter()

    // 권한분기 로직 추가
    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
          alert("로그인을 먼저 해야합니다");
          router.push("/hoc/login");
        }
      }, []);

        return(
            <Component {...props}/>
        )
}