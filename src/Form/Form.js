import React, { useState } from "react";
import { Clock } from "../Clock/Clock";
import {
  Fieldset,
  Legend,
  LabelText,
  Input,
  Select,
  Button,
  StyledForm,
  InformationApi,
} from "./styled";

export const Form = ({ calculateResult, rates, state, date }) => {
  const [currency, setCurrency] = useState("PLN");
  const [sourceCurrency, setSourceCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount, sourceCurrency);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Fieldset>
        {state === "loading" ? (
          <InformationApi>
            Poczekaj chwilkę, ładuję teraz dane z Europejskiego Banku
            Centralnego 😄
          </InformationApi>
        ) : state === "error" ? (
          <InformationApi>
            ? Ojojoj...😟 wygląda na to, że wystapił błąd, chyba masz problem z
            internetem, jeśli nie - spróbuj później
          </InformationApi>
        ) : (
          <>
            <Legend>Uzupełnij dane</Legend>
            <Clock />
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
                {Object.keys(rates).map((sourceCurrency) => (
                  <option key={sourceCurrency} value={sourceCurrency}>
                    {sourceCurrency}
                  </option>
                ))}
              </Select>
            </LabelText>
            <LabelText>
              Waluta na:
              <Select last
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {Object.keys(rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </Select>
            </LabelText>
            <Button>Przelicz</Button>
            <p>Aktualizacja walut z dnia: {date}</p>
          </>
        )}
      </Fieldset>
    </StyledForm>
  );
};
