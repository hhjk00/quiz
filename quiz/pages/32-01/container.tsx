import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다.");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => countLet, []);
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    // countLet = countLet + 1;
    countLet += 1;
    console.log(countLet + 1);
  }, []);

  // const onClickCountState = useCallback(() => {
  //   setCountState((prev) => prev + 1);
  //   // console.log(countState + 1);
  // }, []);

  // useMemo로 useCallback 만들어보기
  const onClickCountState = useMemo(() => {
    return () => {
      setCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <div>
      <div>======================</div>
      <h1>이것은 컨테이너 입니다.</h1>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) + 1 올리기</button>
      <div>카운트(state): {countState}</div>
      {/* <button onClick={onClickCountState}>카운트(state) + 1 올리기</button> */}
      <button
        onClick={() => {
          setCountState((prev) => prev + 1);
        }}
      >
        카운트(state) +1 올리기
      </button>
      <div>======================</div>
      <MemoizationPresenterPage />
    </div>
  );
}
