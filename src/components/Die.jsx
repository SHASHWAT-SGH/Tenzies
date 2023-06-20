import React from 'react'
import "../styles/die.css"

export default function Die({number, isHeld, handleDieClick}) {

  return (
    <div 
      className='die'
      onClick={handleDieClick}
      style={isHeld?{backgroundColor: '#59E391'}:{backgroundColor: '#FFFFFF'}}  
    >
      <span className='text'>
        {number}
      </span>
    </div>
  )
}
