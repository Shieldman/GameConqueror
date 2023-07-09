import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from './context/AuthContext.jsx'

import FreeLayout from "./layouts/FreeLayout";
import { ProtectedLayout } from "./layouts/ProtectedLayout";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import SudokuPage from "./Pages/SudokuPage";
import HangmanPage from "./Pages/HangmanPage";
import TicTacToePage from "./Pages/TicTacToePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
        <AuthProvider>
          <Routes>
            <Route element={<FreeLayout />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<ProtectedLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/sudoku" element={<SudokuPage />} />
              <Route path="/hangman" element={<HangmanPage />} />
              <Route path="/tic-tac-toe" element={<TicTacToePage />} />
            </Route>
          </Routes>
          </AuthProvider>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
