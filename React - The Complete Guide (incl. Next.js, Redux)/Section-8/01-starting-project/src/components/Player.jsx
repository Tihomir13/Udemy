import { useState, useRef } from "react";

export default function Player() {
  const playerNameRef = useRef();

  const [savedPlayerName, setSavedPlayerName] = useState("unknown");

  function savePlayerName() {
    setSavedPlayerName(playerNameRef.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {savedPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={playerNameRef}
          type="text"
        />
        <button onClick={savePlayerName}>Set Name</button>
      </p>
    </section>
  );
}
