import React, { useState } from "react";
import { wordsArray } from "./HangmanWords";
import "./HangmanBoard.css";

const HangmanBoard = () => {
  const [startGame, setStartGame] = useState(false);
  const [word, setWord] = useState();
  const [solution, setSolution] = useState([]);
  const [mistakes, setMistakes] = useState("1");

  const handleStartGame = () => {
    setStartGame(true);
    const selectedWord =
      wordsArray[Math.floor(Math.random() * wordsArray.length)];
    setWord(selectedWord);
    setSolution(selectedWord.split(""));
    console.log(selectedWord);
  };

  const handleNewLetter = () => {

    //You are HERE
    const inputBox = document.getElementById("new-letter");
    var correctLetters = 0;
  
    if (solution.indexOf(inputBox.value) !== -1) {
      correctLetters++;
      const existingLetters = document.getElementsByClassName("letter-box");
      for (let i = 0; i < existingLetters.length; i++) {
        existingLetters[i].innerHTML = inputBox.value;
      }
      console.log(correctLetters);
    }
  };
  

  return (
    <>
      <h1>Hangman!</h1>
      <div className="hangman-board">
        {!startGame ? (
          <button className="game-buttons" onClick={handleStartGame}>
            Start Game
          </button>
        ) : null}
        {word
          ? solution.map((letter, index) => (
              <div className="letter-box" key={index} id={letter}></div>
            ))
          : null}
      </div>
      {startGame ? (
        <div className="play-zone">
          <div className="input-and-used-letters">
            <label>
              <input
                className="letter-input"
                id="new-letter"
                type="text"
                maxLength={1}
                placeholder="New letter"
              />
            </label>
            <button className="game-buttons" onClick={handleNewLetter}>
              Submit
            </button>
          </div>
          <div className="hanged-man">
            <img src={`./assets/stage${mistakes}.png`}></img>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HangmanBoard;
