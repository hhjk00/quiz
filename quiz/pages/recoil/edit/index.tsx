import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/store";
import RecoilWritePage from "../../../src/components/commons/units/recoil/write";

export default function RecoilEditPage() {
    const [isEdit, setIsEdit] = useRecoilState(isEditState)

    
  useEffect(() => {
    setIsEdit(true);
  }, []);

    return(
        <RecoilWritePage isEdit={true}/>

    )
}