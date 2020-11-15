import React from "react";
import styled from "styled-components";

const Styled = styled.p`
  color: #345273;
  font-weight: 900;
`;

const CountryFlagContainer = styled.div`
  max-height: 80px;
`;

const CountryFlag = styled.img`
  width: 150px;
  background: lightgrey;
  padding: 10px;
`;

const QuizQuestion = ({ sentence }) => {
  const isSVGFile = sentence?.startsWith("https://");
  if (isSVGFile) {
    const dom = (
      <CountryFlagContainer>
        <CountryFlag src={sentence} />
        <p>{`Which country is this flag of?`}</p>
      </CountryFlagContainer>
    );
    return dom;
  } else {
    return <Styled>{sentence}</Styled>;
  }
};

export default QuizQuestion;
