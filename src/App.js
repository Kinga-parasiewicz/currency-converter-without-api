import React, { useState } from "react";
import { Header } from "./Header/Header";
import { currencies } from "./currencies";
import { Form } from "./Form/Form";
import { Result } from "./Result/Result";
import { Container } from "./Container";


function App() {
  const [result, setResult] = useState();
  const calculateResult = (currency, amount, sourceCurrency) => {
    const rate = currencies.find(({ short }) => short === currency).rate;
    const sourceRate = currencies.find(({ short }) => short === sourceCurrency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: (amount * sourceRate) / rate,
      currency,
      sourceCurrency,
    });
  };

  return (
    <>
      <Container>
        <Header title="Kalkulator Walut" />
        <Form calculateResult={calculateResult} />
        <Result result={result} />
      </Container>
    </>
  );
}

export default App;
