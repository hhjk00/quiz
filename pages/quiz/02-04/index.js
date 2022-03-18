import { useState } from 'react'
import { Warn,
         Wrapper,
         Title } from '../../../styles/signup'

export default function SignupStatePage(){
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function onChangeEmail(event){
        console.log(event.target.value)
        // event.target       => 태그전체 <input type="text" ...
        // event.target.value => 우리가 입력한 값 a@a.com
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    function onChangePasswordCheck(event){
        setPasswordCheck(event.target.value)
   //     setPasswordError(event.target.value !== password)
    }

    function onClickSignup(){
        // 진짜 포장이 잘 됐는지 확인해보기
        console.log(email)
        console.log(password)
        console.log(passwordCheck)

        if(email.includes("@") === false){
            setEmailError("이메일이 올바르지 않습니다!")
        } else {
            setEmailError("")
        }

        if(password !== passwordCheck){
            setPasswordError("비밀번호가 일치하지 않습니다!")
        } else {
            setPasswordError("")
        }
    }

    return (
        <Wrapper>
            <Title>코드캠프 회원가입</Title>
            이메일: <input type="text" onChange={onChangeEmail} /><br />
            <Warn>{emailError}</Warn>
            비밀번호: <input type="password" onChange={onChangePassword} /><br />
            비밀번호 확인: <input type="password" onChange={onChangePasswordCheck} /><br />
            <Warn>{passwordError}</Warn>
            <button onClick={onClickSignup}>회원가입</button>
        </Wrapper>
    )

}