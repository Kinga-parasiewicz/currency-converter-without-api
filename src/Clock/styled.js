import styled from "styled-components";

export const StyledClock = styled.p`
  font-size: 16px;
  color: green;
  font-weight: bold;
  margin-bottom: 20px;
  text-align:right;

  @media(max-width:768px){
    text-align:right;
    font-size:12px;
  }
`;
