import { Page, Search, Title, My, Profile, Name, Arrow1, SubTitle, Menu1, Menu2, Menu3, Menu4, Line, Body, Q1, QNumber, Question, Footer, Home, Locate, Like, My2} from '../../../styles/faq'
// 

export default function FAQ() {


    // 여기는 자바스크립트 쓰는곳

  return (
  <Page>
    <Search>
    <img src="/aaa/search.png"/>
    </Search>

    <Title>
      <My>마이</My>
      <Profile>
      <img src="/aaa/profile.png"/>
      </Profile>
      <Name>임정아</Name>
      <Arrow1>
        <img src="/aaa/arrow1.png"/>
      </Arrow1>
    </Title>  

    <SubTitle>
      <Menu1>공지사항</Menu1>
      <Menu2>이벤트</Menu2>
      <Menu3>FAQ</Menu3>
      <Menu4>Q&A</Menu4>
    </SubTitle>

  <Line></Line>

    <Body>
      <Q1>
        <QNumber>Q. 01</QNumber>
        <Question>리뷰 작성은 어떻게 하나요?
        <img src="/aaa/arrow2.png"/>
        </Question>
      </Q1>

      <Q1>
        <QNumber>Q. 02</QNumber>
        <Question>리뷰 수정/삭제는 어떻게 하나요?
        <img src="/aaa/arrow2.png"/>
        </Question>
      </Q1>

      <Q1>
        <QNumber>Q. 03</QNumber>
        <Question>아이디/비밀번호를 잊어버렸어요.
        <img src="/aaa/arrow2.png"/>
        </Question>
      </Q1>

      <Q1>
        <QNumber>Q. 04</QNumber>
        <Question>회원탈퇴를 하고 싶어요.
        <img src="/aaa/arrow2.png"/>
        </Question>
      </Q1>

      <Q1>
        <QNumber>Q. 05</QNumber>
        <Question>출발지 설정은 어떻게 하나요?
        <img src="/aaa/arrow2.png"/>
        </Question>
      </Q1>

      <Q1>
        <QNumber>Q. 06</QNumber>
        <Question>비밀번호를 변경하고 싶어요.
        <img src="/aaa/arrow2.png"/>
        </Question>
      </Q1>
    </Body>

    <Line></Line>

    <Footer>
      <Home>
        <img src="/aaa/home.png"/>
        홈
      </Home>
      <Locate>
        <img src="/aaa/locate.png"/>
        잇츠로드
      </Locate>
      <Like>
        <img src="/aaa/like.png"/>
        마이찜
      </Like>
      <My2>
        <img src="/aaa/my.png"/>
        마이
      </My2>
    </Footer>
  
  </Page>
    )
}
