import React from 'react'
import Logo from './Logo'

export default function Result(props) {
  return (
    <div className='container'>
      <div className='questionContainer'>
        <Logo />
        <h1>Final Results</h1>
        <h2>{props.score} Out of {props.numberofQuestions} Correct - ({props.score/props.numberofQuestions * 100}%)</h2>
        <div className='h3div'>
          <h3 onClick={()=>{window.location.reload()}}>Restart</h3>
        </div>
      </div>
    </div>
  )
}
