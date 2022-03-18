import { useState } from 'react'

export default function CounterStatePage(){
    function onClickLetHello(){
        let result = "반갑습니다"
        document.getElementById("letHello").innerText = result
    
    }


    const [ hello, setHello ] = useState("안녕하세요")

    function onClickHello(){
        setHello("반갑습니다")
    }

     return (
         <div>
            <button onClick={onClickLetHello} id="letHello">안녕하세요</button>        
            <button onClick={onClickHello}>{hello}</button>
         </div>
         
     )
}