import React from "react";
import Login from "./Login";

var isloggedIn = false;

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {isloggedIn ? <h1>Hello</h1>: <Login />}
      {currentTime > 12 && <h1>Why are you working?</h1>}
    </div>
  );
}

export default App;
