import axios from "axios";
import { copyFileSync } from "fs";
import { result } from "lodash";
import { useState } from "react";

export default function CallbackPromiseAsyncawaitPage() {
  const [callback, setCallback] = useState([]);
  const [promise, setPromise] = useState([]);
  const [asyncawait, setAsyncawait] = useState([]);

  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0]; // 131 (랜덤숫자)
      // console.log(num)

      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        // console.log(res.target.response);
        const userId = JSON.parse(res.target.response).UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          // console.log(res.target.response)
          const result = JSON.parse(res.target.response); // 최종 결과값!!!
          setCallback(result);
        });
      });
    });
  };

  // new Promise((resolve, reject) => {
  //   // 외부 요청 코드
  //   const ccc = new XMLHttpRequest();
  //   ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
  //   ccc.send();
  //   ccc.addEventListener("load", (res) => {
  //     console.log(res); // 최종 결과값
  //   });

  //   // 성공했을 때
  //   resolve("철수");

  //   // 실패했을 때
  //   reject("에러발생");

  // }).then((res) => {} ).catch(err => {})

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0]; // 71(랜덤숫자)
        // console.log(num);
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        // console.log(userId);
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        // console.log(res);
        const result = res.data;
        setPromise(result);
      });
  };

  const onClickAsyncawait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
    // console.log(aaa)
    const num = aaa.data.split(" ")[0];
    // console.log(num);
    const bbb = await axios.get(`https://koreanjson.com/posts/${num}`);
    // console.log(bbb);
    const userId = bbb.data.UserId;
    // console.log(userId);
    const ccc = await axios.get(`http://koreanjson.com/posts?userId=${userId}`);
    // console.log(ccc);
    const result = ccc.data;
    setAsyncawait(result);
  };

  return (
    <div>
      <button onClick={onClickCallback}>Callback 요청하기</button>
      {callback.map((el) => (
        <div key={el.title}>{el.title}</div>
      ))}
      <br />
      <button onClick={onClickPromise}>Promise 요청하기</button>
      <br />
      {promise.map((el) => (
        <div key={el.title}>{el.title}</div>
      ))}
      <button onClick={onClickAsyncawait}>Asyncawait 요청하기</button>
      {asyncawait.map((el) => (
        <div key={el.title}>{el.title}</div>
      ))}
    </div>
  );
}
