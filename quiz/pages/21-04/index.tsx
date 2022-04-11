import { useState } from "react";

export default function StatePrevPage() {

const [state, setState] = useState(0)
  

    const onClickCounter = () => {
        setState(qwer => qwer + 1)
    }

return (
    <div>
      <div>현재 카운트: {state}</div>
      <button onClick={onClickCounter}>카운트 증가</button>
    </div>
  );

}