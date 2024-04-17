import { useState } from "react";

export default function Player({ name, symbol }) {

  const [editState,setEditState] = useState(false);

  function handleClick() {
    setEditState(!editState);
  }

  return (
    <li>
      <span>
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{editState ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
