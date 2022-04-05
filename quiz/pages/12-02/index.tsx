import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccessButton = () => {
    Modal.success({
      content: "게시글이 등록되었습니다.",
    });
  };

  return (
    <div>
      <button onClick={onClickSuccessButton}>모달열기</button>
    </div>
  );
}
