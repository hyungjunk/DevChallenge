import React from "react";
import styled from "styled-components";
import MAIN_SVG from "./assets/main.svg";

const Styled = styled.div`
  position: relative;
  font-size: 30px;
  text-align: left;
`;

const SVGContainer = styled.img`
  position: absolute;
  top: -40px;
  right: -30px;
  width: 150px;
`;

const Logo = () => {
  return (
    <Styled>
      <p>COUNTRY QUIZ</p>
      <SVGContainer src={MAIN_SVG} />
    </Styled>
  );
};

export default Logo;
