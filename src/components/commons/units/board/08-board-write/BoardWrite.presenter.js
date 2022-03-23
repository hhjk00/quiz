export default function BoardsProductUI(props) {

return (
    <div>
      판매자: <input type="text" onChange={props.onChangeSeller} /> <br />
      상품명: <input type="text" onChange={props.onChangeName} /> <br />
      상품내용: <input type="text" onChange={props.onChangeDetail} /> <br />
      상품가격: <input type="number" onChange={props.onChangePrice} /> <br />
      <button onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit }>
        {props.isEdit ? "수정" : "등록"}
      </button>
    </div>
  );
}