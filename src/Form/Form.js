import React, { useState } from "react";
import { currencies } from "./../currencies";
import { Clock} from "../Clock/Clock";
import {
  Fieldset,
  Legend,
  LabelText,
  Input,
  Select,
  Button,
  StyledForm,
} from "./styled";

export const Form = ({ calculateResult, }) => {
  const [currency, setCurrency] = useState(currencies[1].short);
  const [sourceCurrency, setSourceCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount, sourceCurrency);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Uzupełnij dane</Legend>
        <Clock/>
        <LabelText>
          Kwota *:
          <Input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Podaj kwotę"
            type="number"
            required
            step="0.01"
          />
        </LabelText>
        <LabelText>
          Waluta z :
          <Select
            value={sourceCurrency}
            onChange={({ target }) => setSourceCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.name}
              </option>
            ))}
          </Select>
        </LabelText>
        <LabelText>
          Waluta na:
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
