import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import styled from "@emotion/styled";
import Button01 from "../../src/components/commons/buttons/01";
import Input01 from "../../src/components/commons/inputs/01";

const Error = styled.div`
  color: red;
  font-size: 15px;
`;

interface IFormValues {
  writer?: string;
  password?: string
  title?: string;
  contents?: string;
}

const schema = yup.object({
    writer: yup.string().max(5, "5자 이내로 입력해주세요.").required("필수 입력 사항입니다."),
    password: yup.string().required("필수 입력 사항입니다.").matches(
        /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{0,8}$/,
        "비밀번호는 영문, 숫자, 특수문자를 포함해 8자리 이내로 입력해주세요."
      ),
    title: yup.string().max(100, "100자 이내로 입력해주세요.").required("필수 입력 사항입니다."),
    contents: yup.string().max(1000, "1000자 이내로 입력해주세요.").required("필수 입력 사항입니다."),
})

export default function ReactHookFormPage() {
  const { register, handleSubmit,formState } = useForm({
      resolver: yupResolver(schema),
      mode: "onChange"
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };


  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <Input01 type="text" register={register("writer")} /> <br />
      <Error>{formState.errors.writer?.message}</Error>

      비밀번호 : <Input01 type="password" register={register("password")} /> <br />
      <Error>{formState.errors.password?.message}</Error>

      제목: <Input01 type="text" register={register("title")} /> <br/>
      <Error>{formState.errors.title?.message}</Error>
      내용: <Input01 type="text" register={register("contents")} /> <br />
      <Error>{formState.errors.contents?.message}</Error> 

      <Button01 isActive={formState.isValid } title="게시물 등록하기"/>
    </form>

    //   {/* 작성자: <input type="text" {...register("writer")} /> <br />
    //   <Error>{formState.errors.writer?.message}</Error>
    //   비밀번호 : <input type="password" {...register("password")} /> <br />
    //   <Error>{formState.errors.password?.message}</Error>
    //   제목: <input type="text" {...register("title")} /> <br/>
    //   <Error>{formState.errors.title?.message}</Error>
    //   내용: <input type="text" {...register("contents")} />
    //   <Error>{formState.errors.contents?.message}</Error>  */}

    //   {/* <button>게시물 등록하기</button> */}
  );
}
