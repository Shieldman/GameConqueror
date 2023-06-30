import React from 'react'
import Card from '../Card/Card'
import './CardsModule.css'

const CardsModule = () => {

  return (
    <div className='cards-module'>
        <Card imageSource='./assets/sudoku-card-image.png' name='Sudoku' link='/sudoku'/>
        <Card imageSource='./assets/hangman-card-image.jpg' name='Hangman' link='/hangman'/>
        <Card imageSource='./assets/tic-tac-toe-card-image.png' name='Tic Tac Toe' link='/tic-tac-toe'/>
    </div>
  )
}

export default CardsModule