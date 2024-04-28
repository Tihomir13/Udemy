import { useState, useRef } from 'react';

export default function Player() {
  
  const [name, setName] = useState(null);
  const PlayerName = useRef();

  function handleClick(){
    setName(PlayerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input ref={PlayerName} type="text" name='input' />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}