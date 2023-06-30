import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import SudokuPage from "./Pages/SudokuPage";
import HangmanPage from "./Pages/HangmanPage";
import TicTacToePage from "./Pages/TicTacToePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sudoku" element={<SudokuPage />} />
            <Route path="/hangman" element={<HangmanPage />} />
            <Route path="/tic-tac-toe" element={<TicTacToePage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
