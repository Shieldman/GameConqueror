import React from 'react'
import TicTacToeBoard from '../components/TicTacToeBoard/TicTacToeBoard'
import Logout from '../components/Logout/Logout'

const TicTacToePage = () => {
  return (
    <>
      <h1>Tic Tac Toe!</h1>
      <TicTacToeBoard />
      <Logout/>
    </>
  )
}

export default TicTacToePage