import { useState } from 'react'

export default function CounterStatePage(){
    function onClickCounter () {
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("auth").innerText = token
    }
    



    const [ auth, setAuth ] = useState("000000")

    function counter(){
        setAuth(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"))
    }

     return (
         <div>
            <div id="auth">000000</div>
            <button onClick={onClickCounter}>인증번호 전송</button>        

            <div>{auth}</div>
            <button onClick={counter}>인증번호 전송</button>
         </div>
         
     )
}