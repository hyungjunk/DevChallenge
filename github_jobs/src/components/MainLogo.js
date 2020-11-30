import React from "react";
import styled from "styled-components";

const MainLogo = () => {
  const ThickText = styled.span`
    font-size: 24px;
    @media ${(props) => props.theme.mobile} {
      width: 100%;
      margin: 0 auto;
      font-size: 72px;
    }
  `;

  return (
    <span>
      <ThickText>Github</ThickText> Jobs
    </span>
  );
};

export default MainLogo;
