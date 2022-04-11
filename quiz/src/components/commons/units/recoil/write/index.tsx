import { useRecoilState } from "recoil"
import { isEditState } from "../../../../../commons/store"

export default function RecoilWritePage() {
    const [isEdit, setIsEdit] = useRecoilState(isEditState)



    return(
        <h1>{isEdit ? "수정하기" : "등록하기"}</h1>
        // <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>

    )
}