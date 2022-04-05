import { useEffect, useRef } from "react";


export default function CounterPage() {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);


  return (
    <div>비밀번호: 
      <input type="text" ref={inputRef} />
    </div>
  );
}
