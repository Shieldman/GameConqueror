import React from 'react'
import SudokuBoard from '../components/SudokuBoard/SudokuBoard'
import Logout from '../components/Logout/Logout'

const SudokuPage = () => {
  return (
    <>
      <h1>Sudoku!</h1>
      <SudokuBoard />
      <Logout/>
    </>
  )
}

export default SudokuPage