import React from 'react'
import "../styles/die.css"

export default function Die({number, isHeld, handleDieClick}) {

  const dotDie = (number) =>{
    if(number===1){
        return(
        <span
          style={{
            color:'black',
            fontSize:'2.5rem',
            margin: 'auto'
          }
        }
        >•</span>)
    } else if(number===2){
      return(
        <span className='two-container' style={{display:'flex', flexDirection:'column',color:'black',fontSize:'2.5rem', width:'100%', lineHeight:'77%', padding:'3px'}}>
          <span style={{width:'100%', textAlign:'left'}}>•</span>
          <span style={{width:'100%', textAlign:'right'}}>•</span>
        </span>
      )
  } else if(number===3){
    return(
      <span className='three-container' style={{display:'flex', flexDirection:'column',color:'black',fontSize:'2.5rem', width:'100%', lineHeight:'49%', padding:'3px'}}>
          <span style={{width:'100%', textAlign:'left'}}>•</span>
          <span style={{width:'100%', textAlign:'center'}}>•</span>
          <span style={{width:'100%', textAlign:'right'}}>•</span>
      </span>
    )
    } else if(number===4){
      return(
        <span className='four-container' style={{display:'flex', flexDirection:'column',color:'black',fontSize:'2.5rem', width:'100%', lineHeight:'86%'}}>
          <span style={{display:"flex"}}>
            <span style={{margin:'auto'}}>•</span>
            <span style={{margin:'auto'}}>•</span>
          </span>

          <span style={{display:"flex"}}>
            <span style={{margin:'auto'}}>•</span>
            <span style={{margin:'auto'}}>•</span>
          </span>
        </span>
      )
    } else if(number === 5){
      return (
        <span className='five-container' style={{display:'flex', flexDirection:'column',color:'black',fontSize:'2.5rem', width:'100%', lineHeight:'53%', padding:'3px 0 3px 0'}}>
          <span style={{display:"flex"}}>
            <span style={{margin:'auto'}}>•</span>
            <span style={{margin:'auto'}}>•</span>
          </span>

          <span style={{display:"flex", margin:'auto'}}>•</span>

          <span style={{display:"flex"}}>
            <span style={{margin:'auto'}}>•</span>
            <span style={{margin:'auto'}}>•</span>
          </span>
        </span>
      )
    } else if(number===6){
      return(
        <span className='six-container' style={{display:'flex', flexDirection:'column',color:'black',fontSize:'2.5rem', width:'100%', margin:'auto', lineHeight:'77%'}}>
          <span style={{display:"flex"}}>
            <span style={{margin:'auto'}}>•</span>
            <span style={{margin:'auto'}}>•</span>
            <span style={{margin:'auto'}}>•</span>
          </span>

          <span style={{display:"flex"}}>
            <span style={{margin:'auto'}}>•</span>
            <span style={{margin:'auto'}}>•</span>
            <span style={{margin:'auto'}}>•</span>
          </span>

        </span>
      )
    }
  }

  return (
    // <div 
    //   className='die'
    //   onClick={handleDieClick}
    //   style={isHeld?{backgroundColor: '#59E391'}:{backgroundColor: '#FFFFFF'}}  
    // >
    //   <span className='text'>
    //     {number}
    //   </span>
    // </div>

    <div 
      className='die'
      onClick={handleDieClick}
      style={isHeld?{backgroundColor: '#59E391'}:{backgroundColor: '#FFFFFF'}}  
    >
      {dotDie(number)}
    </div>
  )
}
