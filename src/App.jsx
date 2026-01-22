import { useState } from "react";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const App = () => {
  const [board, setBoard] = useState([]);
  let [player, setPlayer] = useState(0);
  let [gameStart, setGameStart] = useState(false);

  const startGame = () => {
    setBoard(Array(9).fill(null));
    setGameStart(true);
    setPlayer(1);
  };

  const cellClick = (index) => {
    if (!gameStart) return;
    if (board[index] !== null) return;

    const newBoard = [...board];
    newBoard[index] = player === 1 ? "x" : "o";
    setBoard(newBoard);
    setPlayer(player === 1 ? 2 : 1);
  };

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
            <div className="flex justify-start items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-600 flex justify-center items-center">
                <p className="text-2xl text-white">
                  <ImCross />
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-lg">Player 1</p>
              </div>
            </div>
            <div className="flex justify-end items-center gap-4">
              <div className="flex flex-col">
                <p className="text-lg">Player 1</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-600 flex justify-center items-center">
                <p className="text-3xl text-white">
                  <BsFillRecordCircleFill />
                </p>
              </div>
            </div>
          </div>
          <div className="text-zinc-600 mt-4">
            {gameStart ? `Player ${player}'s turn` : ``}
          </div>
          <div className="text-green-600 mt-8 text-lg font-bold">
            {/* {gameStart ? `Player ${platerWin} Win` : ``} */}
          </div>

          <div className="h-20 w-full mt-16 flex justify-center items-center px-20">
            <button
              className="bg-zinc-800 text-zinc-200 font-semibold px-8 py-3 rounded-lg cursor-pointer hover:bg-zinc-800/90 hover:scale-105 active:bg-zinc-800 active:scale-100 hover:shadow-2xl transition-all duration-300"
              onClick={startGame}
            >
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
