import React from "react";
import styled from "styled-components";
import bg from "../assets/static/images/backgroundImg.png";

const BgWrapper = styled.div`
  text-align: center;
  margin: 0 10%;
`;

const BgImg = styled.div`
  width: 100%;
  height: 100px;
  background: url(${bg});
  border-radius: 10px;
`;

const InputSearch = styled.input``;

const SearchBar = (props) => {
  console.log(bg);
  return (
    <BgWrapper>
      <BgImg>
        <InputSearch type="text" placeholder="input anything to find" />
      </BgImg>
    </BgWrapper>
  );
};

export default SearchBar;
