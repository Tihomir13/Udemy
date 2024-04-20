import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  let isLegit = false;

  const [inputs, setInputs] = useState({
    initial: "",
    annual: "",
    exReturn: "",
    duration: "",
  });

  function getInput(newValue, name) {
    setInputs((prevValue) => {
      return {
        ...prevValue,
        [name]: +newValue,
      };
    });
  }

  if (
    inputs.initial > 0 &&
    inputs.annual > 0 &&
    inputs.exReturn > 0 &&
    inputs.duration > 0
  )
    isLegit = true;

  return (
    <>
      <Header />
      <Form onInputChange={getInput} />
      {isLegit ? <Table inputs={inputs}/> : <p className="center">Enter numbers in the input fields</p>}
    </>
  );
}

export default App;
