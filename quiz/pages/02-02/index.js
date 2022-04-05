import { useState } from 'react'

export default function CounterStatePage(){
    function onClickCounter(){
        let result = Number(document.getElementById("count").innerText) + 1
        document.getElementById("count").innerText = result
    
    }


    const [ count, setCount ] = useState(0)

    function counter(){
        setCount(count + 1)
    }

     return (
         <div>
            <div id="count">0</div>
            <button onClick={onClickCounter}>카운터 올리기</button>        

            <div>{count}</div>
            <button onClick={counter}>카운터 올리기</button>
         </div>
         
     )
}