import React, { useEffect, useState } from "react";
import { wordsArray } from "./HangmanWords";
import "./HangmanBoard.css";

const HangmanBoard = () => {
  const [startGame, setStartGame] = useState(false);
  const [word, setWord] = useState();
  const [solution, setSolution] = useState([]);
  const [mistakes, setMistakes] = useState(1);
  const [gameEnd, setGameEnd] = useState(false);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [partialSolution, setPartialSolution] = useState(0);
  const [endGame, setEndGame] = useState(false);

  const handleStartGame = () => {
    setStartGame(true);
    const selectedWord =
      wordsArray[Math.floor(Math.random() * wordsArray.length)];
    setWord(selectedWord);
    setSolution(selectedWord.split(""));
  };

  const handleNewLetter = () => {
    const existingLetters = document.getElementsByClassName("letter-box");
    const inputBox = document.getElementById("new-letter");
    var correctLetters = 0;

    if (solution.indexOf(inputBox.value) != -1) {
      for (let i = 0; i < existingLetters.length; i++) {
        if (existingLetters[i].id == inputBox.value) {
          existingLetters[i].innerHTML = inputBox.value;
          correctLetters++;
        }
      }
    }

    if (correctLetters == 0) {
      if (!wrongLetters.includes(inputBox.value)) {
        const error = [...wrongLetters, inputBox.value];
        setWrongLetters(error);
        setMistakes(mistakes + 1);
      }
    }

    const addedLetters = partialSolution + correctLetters;
    setPartialSolution(addedLetters);

    inputBox.value = "";
  };

  useEffect(() => {
    if (mistakes == 8) {
      setGameEnd(true);
    }

    if (partialSolution == solution.length && partialSolution != 0) {
      setEndGame(true);
    }
  }, [mistakes, partialSolution, endGame]);

  return (
    <>
      <h1>Hangman!</h1>
      {!endGame ? (
        <>
          {word ? (
            <div className="hangman-board">
              {
              solution.map((letter, index) => (
              <div className="letter-box" key={index} id={letter}></div>
              ))}
            </div>
          ) : null}

          {startGame ? (
            <div className="play-zone">
              {!gameEnd ? (
                <div className="input-and-used-letters">
                  <label>
                    <input
                      className="letter-input"
                      id="new-letter"
                      type="text"
                      maxLength={1}
                      placeholder="New letter"
                      autoComplete="off"
                    />
                  </label>
                  <button className="game-buttons" onClick={handleNewLetter}>
                    Submit
                  </button>
                </div>
              ) : (
                <>
                  <div className="looser">
                    <h2>You lost! 😥 || Solution: {word}</h2>
                    <button
                      className="game-buttons"
                      onClick={() => {
                        window.location.reload();
                      }}
                    >
                      Play Again!
                    </button>
                  </div>
                </>
              )}

              <div className="hanged-man">
                <img src={`./assets/stage${mistakes.toString()}.png`}></img>
                <div id="wrong-letters">
                  {wrongLetters ? wrongLetters.join(", ") : null}
                </div>
              </div>
            </div>
          ) : (
            <button className="game-buttons" onClick={handleStartGame}>
              Start Game
            </button>
          )}
        </>
      ) : (
        <>
          <h2>You won! 😃 || Solution: {word}</h2>
          <button
            className="game-buttons"
            onClick={() => {
              setStartGame(false);
              setWord();
              setSolution([]);
              setMistakes(1);
              setGameEnd(false);
              setWrongLetters([]);
              setPartialSolution(0);
              setEndGame(false);
            }}
          >
            Play Again!
          </button>
        </>
      )}
    </>
  );
};

export default HangmanBoard;
