import React from "react";
import styled from "styled-components";
import "./index.css";
import Logo from "./Logo";
import QuizCard from "./QuizCard";
import GlobalStyles from "./GlobalStyles";
import bgImage from "./assets/background.png";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${bgImage});
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const Item = styled.div`
  text-align: center;
  color: white;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Background>
        <Container>
          <Item>
            <Logo />
            <QuizCard />
          </Item>
        </Container>
      </Background>
    </>
  );
};

export default App;
