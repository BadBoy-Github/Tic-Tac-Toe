import { useState } from "react";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  let [warn, setWarn] = useState(null);
  let [player, setPlayer] = useState(null);
  let [gameStart, setGameStart] = useState(false);
  let [winner, setWinner] = useState(null);

  const startGame = () => {
    setBoard(Array(9).fill(null));
    setGameStart(true);
    setPlayer(1);
    setWarn("");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameStart(false);
    setPlayer(null);
    setWarn("");
    setWinner(null);
  };

  const cellClick = (index) => {
    if (!gameStart) {
      setWarn("Please start the game first!");
    }
    if (!gameStart || winner || board[index] !== null) return;

    const newBoard = [...board];
    newBoard[index] = player === 1 ? "x" : "o";
    setBoard(newBoard);
    setPlayer(player === 1 ? 2 : 1);

    const win = checkWinner();
    if (win) {
      setWinner(win);
      setGameStart(false);
    }else {
      setPlayer(player === 1 ? 2 : 1);
    }
  };

  const checkWinner = () => {};

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return (
    <div className="w-full h-screen bg-zinc-800 flex justify-center items-center">
      <div className="bg-zinc-200/90 w-[70%] h-[80%] rounded-3xl shadow-lg shadow-zinc-600 grid grid-cols-2 overflow-hidden">
        <div className=" flex justify-center items-center">
          <div className="w-[70%] h-[70%] bg-zinc-800 rounded-lg grid grid-cols-3 grid-rows-3 p-4 gap-4">
            {board.map((value, index) => {
              return (
                <div
                  className="bg-zinc-600/50 rounded-lg flex justify-center items-center cursor-pointer hover:bg-zinc-600/80 transition-all duration-300"
                  key={index}
                  onClick={() => cellClick(index)}
                >
                  {value == "x" && (
                    <ImCross className="text-red-600 text-3xl" />
                  )}
                  {value == "o" && (
                    <BsFillRecordCircleFill className="text-blue-600 text-4xl" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-zinc-600/20 p-4 flex flex-col items-center pt-10">
          <h1 className="text-4xl font-bold">Tic. Tac. Toe...</h1>
          <p className="mt-2">Challenge your friend. Outsmart every move.</p>
          <div className="w-[80%] h-20 mt-4 flex justify-between items-center ">
            <div
              className={`flex justify-start items-center gap-4 ${player === 1 ? `opacity-100` : `opacity-50`}`}
            >
              <div className="w-12 h-12 rounded-full bg-red-600 flex justify-center items-center">
                <p className="text-2xl text-white">
                  <ImCross />
                </p>
              </div>
              <div className="flex flex-col">
                <p className={`text-lg ${player === 1 ? `font-semibold` : ``}`}>
                  Player 1
                </p>
              </div>
            </div>
            <div
              className={`flex justify-start items-center gap-4 ${player === 2 ? `opacity-100` : `opacity-50`}`}
            >
              <div className="flex flex-col">
                <p className={`text-lg ${player === 2 ? `font-semibold` : ``}`}>
                  Player 2
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-600 flex justify-center items-center">
                <p className="text-3xl text-white">
                  <BsFillRecordCircleFill />
                </p>
              </div>
            </div>
          </div>
          <div className="text-green-600 mt-8 text-xl font-bold">
            {winner && `🎉 Player ${winner} Wins!`}
          </div>
          <div className="text-amber-700 mt-20 text-lg font-semibold">
            {warn}
          </div>

          <div className="flex justify-center items-center px-20 absolute bottom-40 gap-10">
            <button
              className={`bg-zinc-800 border-3 border-zinc-800 text-zinc-200 font-semibold px-8 py-3 rounded-lg cursor-pointer hover:bg-zinc-800/90 hover:scale-105 hover:border-zinc-800/90 active:bg-zinc-800 active:scale-100 active:border-zinc-800 hover:shadow-2xl transition-all duration-300`}
              onClick={startGame}
            >
              Start Game
            </button>
            <button
              className={`border-3 border-zinc-800 text-zinc-800 font-semibold px-8 py-3 rounded-lg cursor-pointer hover:scale-105 active:scale-100 hover:shadow-2xl transition-all duration-300`}
              onClick={resetGame}
            >
              Reset Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
