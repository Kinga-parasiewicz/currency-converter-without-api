import styled from "styled-components";

export const StyledHeader = styled.header`
  display: block;
`;

export const Title = styled.h1`
  margin: 0 auto;
  padding-top: 110px;
  padding-bottom: 50px;
  color: ${({theme}) => theme.color.green};
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  letter-spacing: 1px;
  @media (max-width: ${({ theme }) => theme.breakpoint.horizontal}px) {
    padding-top: 20px;
  }
`;
