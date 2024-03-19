import { Link, NavLink as NL } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./theme";


// export const Buttonn = styled.button`
//   background: ${colors.light};
//   border-radius: 3px;
//   border: 2px solid ${ colors.rosado };
//   color: ${ colors.rosado };
//   font-size: 0.9em;
//   margin: 0;
//   padding: 0.25em 1em;
//   cursor: pointer;
// `;

export const Header = styled.header`
  display: flex;
  background-color: ${colors.gris};
  color: ${colors.light};
  flex-direction: row;
  align-content: center;
  padding: 5px;
  justify-content: space-between;
`;


export const BtnLink = styled.button`
 background-color: #000d20;
 width: 150px;
 height: 100px;
 color: white;
 padding: 0.5em;
 border-radius: 5px;
 border: solid 1px;
 cursor: pointer;
 margin: 10px auto;
 margin-left: 10px ;
 &:hover {
        background-color: #0036e6;
        text-decoration: underline;
    font-weight: bold;
    }
`;

export const DetailsCont = styled.div`
 background-color: transparent;
 padding: 0.5em;
 border: 1px solid #0fd4f7;
 border-radius: 10px;
 margin-top: 1em;
 width: 70%;
 margin: 0 auto;
 h3, h4{
     color: #eef4f5;
 }
`;

export const CenteredCont = styled.div`
     height: 100vh;
     width: 50%;
     margin: 0 auto;
`;