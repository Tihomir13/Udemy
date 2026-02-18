import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((prevIsEditing) => !prevIsEditing);
    
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameContent = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameContent = (
      <input type="text" onChange={handleChange} value={playerName} />
    );
  }

  return (
    <li className={isActive ? "active" : null}>
      <span>
        {playerNameContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
