import React from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  let [time, setState] = React.useState(now);

  function updateTime(){
    let now = new Date().toLocaleTimeString();
    setState(now);
  }

  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{time.slice(0,-2)}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
