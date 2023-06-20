import React, { useEffect, useState } from 'react'
import '../styles/game.css'
import Die from '../components/Die'
import { nanoid } from 'nanoid'

export default function Game() {

  const createGameData = () => {
    return({
      number: Math.ceil(Math.random() * 6),
      isHeld: false,
      key: nanoid()
    }
      )
  }

  const createGame = () => {

    let gameArray = []

    for(let i=0; i<10;i++){
      gameArray.push(createGameData())
    }

    return gameArray

  }

  const [gameArray, setGameArray] = useState(createGame())

  const [gameWon, setGameWon] = useState(false)

  useEffect(() => {
    const allHeld = gameArray.every(die => die.isHeld)
    const allSame = gameArray.every(die => gameArray[0].number===die.number)
    if(allHeld && allSame){
      setGameWon(true)
    }
    else{
      setGameWon(false)
    }
  }, [gameArray])
  
  
  
  function handleDieClick(key) {
    setGameArray(oldGameArray => 
      oldGameArray.map(die => {
        return(
          die.key === key
          ? {...die, isHeld: !die.isHeld}
          : die
        )
      })
    )
  }

  const dies = gameArray.map(
    (item)=>(
      <Die
        number={item.number}
        isHeld={item.isHeld} 
        key={item.key} 
        handleDieClick={()=>handleDieClick(item.key)}
      />
    )
  )

  function handleRoll(){
    setGameArray(oldGameArray => 
        oldGameArray.map(die => {
          return(
            die.isHeld? die : createGameData()
          )
        })
      )
  }

  function handleRestart(){
    setGameArray(createGame) 
  }

  
  return (
    <div className="wrapper">
      <div className='main-container'>

        <div className="info">
          <div className="heading">
            Tenzies
          </div>
          <div className="description">
            Roll until all dice are same. Click each die to freeze it at its current value between rolls.
          </div>
        </div>

        <div className="game-area">
          {dies}
        </div>

        <div className="footer">
          <button
            onClick={gameWon?handleRestart:handleRoll}
          >
            {gameWon?'Restart':'Roll'}
            </button>
        </div>

      </div>

    </div>
  )
}
