import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: "myfont";
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
    // 브라우저에서는 폰트가 없기 때문에 vscode에서 다운받아서 나오게 됨
  }
`;
