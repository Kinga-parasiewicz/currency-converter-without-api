import React, { useState } from "react";
import { currencies } from "./../currencies";
import {
  Fieldset,
  Legend,
  LabelText,
  Input,
  Select,
  Button,
  StyledForm,
} from "./styled";

export const Form = ({ calculateResult }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Uzupełnij dane</Legend>
        <LabelText>
          Kwota w zł*:
          <Input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Podaj kwotę w zł"
            type="number"
            required
            step="0.01"
          />
        </LabelText>
        <LabelText>
          Waluta:
          <Select
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.name}
              </option>
            ))}
          </Select>
        </LabelText>
        <Button>Przelicz</Button>
      </Fieldset>
    </StyledForm>
  );
};
