import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

export const Fieldset = styled.fieldset`
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 3px 3px green;
`;

export const Legend = styled.legend`
  background-color: white;
  color: green;
  padding: 10px;
  border: 1px solid green;
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

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 250px;
  padding: 10px;
  margin-left: 20px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:required {
    background-color: #eee;
  }

  @media(max-width:767px){
    margin-left:0px;
  }
`;

export const Select = styled.select`
  width: 100%;
  max-width: 250px;
  padding: 10px;
  margin-top: 10px;
  margin-left: 16px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const Button = styled.button`
  margin: 10px auto;
  display: flex;
  justify-content: center;
  padding: 10px;
  border: 1px solid green;
  color: green;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
