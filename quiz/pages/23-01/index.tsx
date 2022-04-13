export default function HofPage() {
    const onClickChild = (el) => (event) => {
      console.log(el);
    };
  
    return (
      <div>
        <h1>HOF 연습 페이지입니다!!!</h1>
          <button onClick={onClickChild(123)}>버튼</button>
        
      </div>
    );
  }