import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <ul className="main-menu">
      <li className="main-menu-button">
        <NavLink to="/"><img className="main-menu-icon brand-logo" src="./assets/home-logo.png" alt="home-logo" /> <b>Game Conqueror</b></NavLink>
      </li>
      <li className="main-menu-button">
        <NavLink to="/sudoku"><img className="main-menu-icon" src="./assets/sudoku-logo.png" alt="sudoku-logo" /></NavLink>
      </li>
      <li className="main-menu-button">
        <NavLink to="/hangman"><img className="main-menu-icon" src="./assets/hangman-logo.png" alt="hangman-logo" /></NavLink>
      </li>
      <li className="main-menu-button">
        <NavLink to="/tic-tac-toe"><img className="main-menu-icon" src="./assets/tictactoe-logo.png" alt="tictactoe-logo" /></NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
