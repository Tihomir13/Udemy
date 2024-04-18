import Player from "./components/Player";
export default function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName={"Player 1"} symbol={"O"} />
          <Player initialName={"Player 2"} symbol={"X"} />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}
