import styled, {css} from "styled-components";

export const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  
`;

export const Fieldset = styled.fieldset`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 4px;
  box-shadow: 3px 3px ${({ theme }) => theme.color.green};
  background-color: ${({ theme }) => theme.color.white};
`;

export const Legend = styled.legend`
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.green};
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const LabelText = styled.label`
  width: 100%;
  max-width: 600px;
  display: block;
  text-align: left;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.horizontal}px) {
    margin-top: 15px;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 250px;
  padding: 10px;
  margin-left: 35px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:required {
    background-color: ${({ theme }) => theme.color.gallery};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-left: 0px;
  }
`;

export const Select = styled.select`
  width: 100%;
  max-width: 250px;
  padding: 10px;
  margin-top: 10px;
  margin-left: 16px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-left: 0px;
  }

  ${({last}) => last && css`
  margin-left:9px;
  `}
`;

export const Button = styled.button`
  margin: 10px auto;
  display: flex;
  justify-content: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.green};
  cursor: pointer;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
export const InformationApi = styled.div`
  font-size: 20px;
  font-style: italic;
  line-height: 1.5;
`;
