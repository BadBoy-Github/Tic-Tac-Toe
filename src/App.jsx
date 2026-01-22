import { useState } from "react";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const App = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let [cross, setCross] = useState(false);
  let [play, setPlay] = useState(false);

  const clicked = () => {
    setCross(!cross);
  };
  return (
    <div className="w-full h-screen bg-zinc-800 flex justify-center items-center">
      <div className="bg-zinc-200/90 w-[70%] h-[80%] rounded-3xl shadow-lg shadow-zinc-600 grid grid-cols-2 overflow-hidden">
        <div className=" flex justify-center items-center">
          <div className="w-[70%] h-[70%] bg-zinc-800 rounded-lg grid grid-cols-3 grid-rows-3 p-4 gap-4">
            {arr.map((index, no) => {
              return (
                <div
                  className="bg-zinc-600/50 rounded-lg flex justify-center items-center cursor-pointer hover:bg-zinc-600/80 transition-all duration-300"
                  key={no}
                  onClick={clicked}
                >
                  {play ? "" : ""}
                  {cross ? (
                    <ImCross className="text-4xl text-red-600" />
                  ) : (
                    <BsFillRecordCircleFill className="text-5xl text-blue-600" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-zinc-600/20 p-4 flex flex-col items-center pt-10">
          <h1 className="text-4xl">Tic Tac Toe</h1>
          <p>This is a duo player game!!!</p>
          <div className="w-full h-20 mt-4 flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-600 flex justify-center items-center">
                <p className="text-2xl text-white">
                  <ImCross />
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-lg">Player 1</p>
                <p className="text-sm">Score: </p>
              </div>
            </div>
            <div className="flex justify-end items-center gap-4">
              <div className="flex flex-col">
                <p className="text-lg">Player 1</p>
                <p className="text-sm">Score: </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-600 flex justify-center items-center">
                <p className="text-3xl text-white">
                  <BsFillRecordCircleFill />
                </p>
              </div>
            </div>
          </div>
          <div className="text-zinc-600 mt-4">Player 1's turn</div>
          <div className="text-green-600 mt-8 text-lg font-bold">Player 1 Win</div>
        </div>
      </div>
    </div>
  );
};

export default App;
