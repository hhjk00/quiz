import  { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function CounterPage() {
  const router = useRouter();

  const [isChange, setIsChange] = useState(false);


  useEffect(() => {
    alert("Changed!")
}, [isChange]); // 맨 처음 한번은 먼저 실행된다

useEffect(() => {
    alert("Rendered!");

    return () => {
      alert("Bye!!");
    };
  }, []);

  const onClickIsChange = () => {
    setIsChange(true);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <div>
    
      <button onClick={onClickIsChange}>변경</button>
      {isChange}<br/>
      <button onClick={onClickMove}>이동</button>
    </div>
  );
}
