import React, { useState } from "react";
import { Header } from "./Header/Header";
import { currencies } from "./currencies";
import { Form } from "./Form/Form";
import { Result } from "./Result/Result";
import { Container } from "./Container/styled"

function App() {
  const [result, setResult] = useState();
  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <>
      <Container>
      <Header title="Kalkulator Walut" />
      <Form calculateResult={calculateResult}/>
      <Result result={result} />
      </Container>
    </>
  );
}

export default App;
