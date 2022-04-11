import Presenter from "../21-02-presenter";

// container 부분
export default function Container() {
  return (
    <>
      {<Presenter child="철수" age={13} />}
    </>
  );
}