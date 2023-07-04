import React, { useEffect, useState } from "react";
import "./TicTacToeBoard.css";

const TicTacToeBoard = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [tictactoeBoard, setTictactoeBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [turn, setTurn] = useState("Player ❌");
  const [winner, setWinner] = useState(null);

  const handleStartGame = () => {
    setIsStarted(true);
  };

  const handleTurnChange = (ev) => {
    const boardChange = [...tictactoeBoard];

    if (turn === "Player ❌") {
      setTurn("Player ⭕");
      boardChange[ev.target.id] = "❌";
    } else {
      setTurn("Player ❌");
      boardChange[ev.target.id] = "⭕";
    }

    ev.target.disabled = true;
    setTictactoeBoard(boardChange);

  };

  const handleResetGame = () => {
    setTictactoeBoard([null, null, null, null, null, null, null, null, null]);
    setIsStarted(false);
    setTurn("Player ❌");
    setWinner(null);
  };

  const checkIfItsAWin = () => {

    //check rows
    for (let i = 0; i < 9; i = i + 3) {
      if (
        tictactoeBoard[i] != null &&
        tictactoeBoard[i] == tictactoeBoard[i + 1] &&
        tictactoeBoard[i] == tictactoeBoard[i + 2]
      ) {
        tictactoeBoard[i] == "❌"
          ? setWinner(<><h2>Player ❌ wins!</h2><button className="game-buttons" onClick={handleResetGame}>Play Again!</button></>)
          : setWinner(<><h2>Player ⭕ wins!</h2><button className="game-buttons" onClick={handleResetGame}>Play Again!</button></>);
      }
    }

    //check columns
    for (let i = 0; i < 3; i++) {
      if (
        tictactoeBoard[i] != null &&
        tictactoeBoard[i] == tictactoeBoard[i + 3] &&
        tictactoeBoard[i] == tictactoeBoard[i + 6]
      ) {
        tictactoeBoard[i] == "❌"
          ? setWinner(<><h2>Player ❌ wins!</h2><button className="game-buttons" onClick={handleResetGame}>Play Again!</button></>)
          : setWinner(<><h2>Player ⭕ wins!</h2><button className="game-buttons" onClick={handleResetGame}>Play Again!</button></>);
      }
    }

    //check diagonals
      if (
        tictactoeBoard[0] != null &&
        tictactoeBoard[0] == tictactoeBoard[4] &&
        tictactoeBoard[4] == tictactoeBoard[8]
      ) {
        tictactoeBoard[0] == "❌"
          ? setWinner(<><h2>Player ❌ wins!</h2><button className="game-buttons" onClick={handleResetGame}>Play Again!</button></>)
          : setWinner(<><h2>Player ⭕ wins!</h2><button className="game-buttons" onClick={handleResetGame}>Play Again!</button></>);
      }
      if (
        tictactoeBoard[2] != null &&
        tictactoeBoard[2] == tictactoeBoard[4] &&
        tictactoeBoard[4] == tictactoeBoard[6]
      ) {
        tictactoeBoard[2] == "❌"
          ? setWinner(<><h2>Player ❌ wins!</h2><button className="game-buttons" onClick={handleResetGame}>Play Again!</button></>)
          : setWinner(<><h2>Player ⭕ wins!</h2><button className="game-buttons" onClick={handleResetGame}>Play Again!</button></>);
      }

      //check draw
      if (!tictactoeBoard.includes(null) && !winner) {
        setWinner(<><h2>It's a Draw!</h2><button className="game-buttons" onClick={handleResetGame}>Play Again!</button></>)        
      }

  };

  useEffect(() => {
    checkIfItsAWin();
    console.log(winner);
    console.log(isStarted);
    console.log(tictactoeBoard);
  }, [tictactoeBoard]);

  return (
    <>
      {isStarted && !winner ? <h2>It's {turn} turn!</h2> : winner}
      {isStarted && !winner ? (
        <div className="TicTacToe-board">
          {tictactoeBoard.map((fill, index) => {
            return (
              <button
                className="board-square"
                key={index}
                id={index}
                onClick={handleTurnChange}
              >
                {fill}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="board-controls">
        {isStarted && !winner ? (
          <button className="game-buttons" onClick={handleResetGame}>
            Reset game
          </button>
        ) : null}
        { !isStarted && !winner ? (
          <button className="game-buttons" onClick={handleStartGame}>
            Start game
          </button>
        ):null}
      </div>
    </>
  );
};

export default TicTacToeBoard;
