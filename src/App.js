import React, { useState } from "react";
import { Header } from "./Header/Header";
import { Form } from "./Form/Form";
import { Result } from "./Result/Result";
import { Container } from "./Container";
import { useApiRates } from "./useRatesApi";

function App() {
  const [result, setResult] = useState();

  const ratesData = useApiRates();
  const calculateResult = (currency, amount, sourceCurrency) => {
    const rate = ratesData.rates[currency];
    const sourceRate = ratesData.rates[sourceCurrency];

    setResult({
      sourceAmount: +amount,
      targetAmount: (amount * rate) / sourceRate,
      currency,
      sourceCurrency,
    });
  };

  return (
    <>
      <Container>
        <Header title="Kalkulator Walut" />
        <Form
          calculateResult={calculateResult}
          rates={ratesData.rates}
          ratesData={ratesData}
        />
        <Result result={result} />
      </Container>
    </>
  );
}

export default App;
