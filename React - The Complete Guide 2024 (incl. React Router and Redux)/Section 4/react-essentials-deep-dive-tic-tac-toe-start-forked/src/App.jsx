import Player from "./components/Player";
export default function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={"Player 1"} symbol={"O"} />
          <Player name={"Player 2"} symbol={"X"} />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}
