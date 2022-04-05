import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import LayoutHeader from "../../../src/components/commons/layout/header";
import LayoutBanner from "../../../src/components/commons/layout/banner";
import LayoutNavigation from "../../../src/components/commons/layout/navigation";
import LayoutFooter from "../../../src/components/commons/layout/footer";

const BodyWrapper = styled.div`
  display: flex;
`;
const Body = styled.div`
height: 500px;
`;

const LayoutSidebar = styled.div`
  width: 300px;
  height: 500px;
  background-color: orange;
`;

const HIDDEN_HEADERS = [
  // ...
  // ...
  // ...
];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar>사이드바 영역</LayoutSidebar>
        <Body>{props.children}영역</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
