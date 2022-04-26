import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const [file1, setFile1] = useState<File>();

  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다!");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
        setFile1(file);
      }
    };
  };

  const onClickSubmit = async (data) => {
    const result1 = await uploadFile({ variables: { file: file1 } });
    const imageUrl = result1.data.uploadFile.url;

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자: <input type="text" {...register("writer")} /> <br />
        비밀번호 : <input type="password" {...register("password")} /> <br />
        제목: <input type="text" {...register("title")} /> <br />
        내용: <input type="text" {...register("contents")} /> <br />
        <input type="file" onChange={onChangeFile} />
        <br />
        <img src={imageUrl} />
        <button>게시글 등록하기</button>
      </form>
    </div>
  );
}
