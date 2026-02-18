import { useState } from "react";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Results from "./components/Results";

function App() {
  const [userInfo, setUserInfo] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleInfoChange(inputIdentifier, newValue) {
    setUserInfo((prevInfo) => {
      return {
        ...prevInfo,
        [inputIdentifier]: newValue,
      };
    });
  }

  isInputValid = userInfo.duration > 0;

  return (
    <>
      <Header />
      <UserInputs onHandleChange={handleInfoChange} userInfo={userInfo} />
      {isInputValid && <Results userInfo={userInfo} />}
    </>
  );
}

export default App;
