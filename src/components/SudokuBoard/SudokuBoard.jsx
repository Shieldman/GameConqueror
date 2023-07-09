import React, { useEffect, useState } from "react";
import sudoku from "sudoku";
import "./SudokuBoard.css";

const SudokuBoard = () => {
  const [sudokuBoard, setSudokuBoard] = useState([]);
  const [modifiedIndex, setModifiedIndex] = useState([]);
  const [solutionCheck, setSolutionCheck] = useState(null);
  const gamecount=1;

  useEffect(() => {
    const newBoard = sudoku.makepuzzle();
    setSudokuBoard(newBoard);
  }, [gamecount]);

  const handleInputNumber = (ev) => {
    const updatedBoard = [...sudokuBoard];
    const updatedIndex = [...modifiedIndex];
    updatedBoard[ev.target.id] = ev.target.value;
    updatedIndex.push(ev.target.id);
    setSudokuBoard(updatedBoard);
    setModifiedIndex(updatedIndex);
  };

  const handleCheckSolution = () => {
    const solved = sudoku.solvepuzzle(sudokuBoard);
    console.log(solved);
    console.log(sudokuBoard);
    if (JSON.stringify(solved) == JSON.stringify(sudokuBoard)) {
      console.log("its a win");
      setSolutionCheck(<h3>Congratulations! You completed the sudoku</h3>);
    } else {
      setSolutionCheck(
        <div className="solution">
          <h3>The solution is not correct</h3>
          <div className="solution-buttons">
            <button
              className="game-buttons"
              onClick={() => {
                setSudokuBoard(solved);
              }}
            >
              Show solution
            </button>
            <button
              className="game-buttons"
              onClick={() => {
                setSolutionCheck();
              }}
            >
              Keep trying
            </button>
          </div>
        </div>
      );
    }
  };

  const handleShowSolution = () => {
    const solved = sudoku.solvepuzzle(sudokuBoard);
    setSudokuBoard(solved);
  };

  return (
    <>
      {solutionCheck}

      <div className="sudoku-board">
        {sudokuBoard === "null" ? (
          <h2>Loading....</h2>
        ) : (
          sudokuBoard.map((number, index) => {
            if (number === null) {
              return (
                <input
                  className="board-slot"
                  key={index}
                  id={index}
                  type="number"
                  value=""
                  min={0}
                  max={9}
                  onChange={handleInputNumber}
                />
              );
            } else if (modifiedIndex.includes(index.toString())) {
              return (
                <input
                  className="board-slot"
                  key={index}
                  id={index}
                  type="number"
                  value={number}
                  min={0}
                  max={9}
                  onChange={handleInputNumber}
                />
              );
            } else {
              return (
                <input
                  className="board-slot original-number"
                  key={index}
                  id={index}
                  type="number"
                  value={number}
                  readOnly
                />
              );
            }
          })
        )}
      </div>
      <div className="board-controls">
        {!sudokuBoard.includes(null) ? (
          <>
            <button className="game-buttons" onClick={handleCheckSolution}>
              Check solution
            </button>
            <button className="game-buttons" onClick={handleShowSolution}>
              Show solution
            </button>
          </>
        ) : (
          <>
            <button
              className="button-disabled"
              onClick={handleCheckSolution}
              disabled={true}
            >
              Check solution
            </button>
            <button className="game-buttons" onClick={handleShowSolution}>
              Show solution
            </button>
          </>
        )}
        <button
          className="game-buttons"
          onClick={() => {
            gamecount++;
          }}
        >
          Reset game
        </button>
      </div>
    </>
  );
};

export default SudokuBoard;
