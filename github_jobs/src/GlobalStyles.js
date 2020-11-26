import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
   ${reset};
   * > body,
   * > body * {
      font-family: 'Noto Sans KR', sans-serif;
       padding:0;
       margin:0;
   }
   a{
       text-decoration:none;
       color:inherit;
   }
   *{
       box-sizing:boerder-box;
   }
   li, dt, dd {
      list-style:none;
   }
`;

export default GlobalStyles;
