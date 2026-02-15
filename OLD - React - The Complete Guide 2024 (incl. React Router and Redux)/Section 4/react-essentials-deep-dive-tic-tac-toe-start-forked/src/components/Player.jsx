import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName}) {
  const [playerName,setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(() => !isEditing);
    if(isEditing)
    onChangeName(symbol, playerName);
  }

  function handleChange(event) {
    const value = event.target.value;
    setPlayerName(value)
  }
  
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let button = "Edit";

  if(isEditing){
    editablePlayerName = <input type="text" className="player input" required value={playerName} onChange={handleChange} />
    button = "Save";
  }

  return (
    <li className={isActive ? 'active': undefined}>
      <span>
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{button}</button>
      </span>
    </li>
  );
}
