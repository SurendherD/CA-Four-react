import React, { useState } from 'react'
import "../App.css"
import questions from '../questions';
import Results from '../components/Result';
import Logo from './Logo';

export default function QuestionBox() {
  const [index,setIndex] = useState(0);
  const [color,setColor] = useState("darkblue");
  const [score,setScore] = useState(0);

  function handelInput(e) {
    const val = e.target.textContent;
    const correct=questions[index].options.filter(opt=>{
      if(opt.isCorrect===true){
        return opt;
      }
    })

    if(index<=questions.length){
      if(val===correct[0].text){
        setScore(score+1);
        setIndex(index+1);
      }else{
        setIndex(index+1);
      }
    }
  }


  function highlightHandel(){
    if(color==="darkblue"){
      setColor("red");
    }
  }
  
  function removeHighlightHandel(){
    if(color==="red"){
      setColor("blue")
    }
  }

  if(index<=4){
  return (
      <div className='container'>

        <div className='questionContainer'>
          <Logo />
          <p className='qnumber'>Question: {index+1+" "}Out of {questions.length}</p>
          <p className='question' style={{color:color}}>{questions[index].text}</p>
          <p className='opt' onClick={handelInput}>{questions[index].options[0].text}</p>
          <p className='opt' onClick={handelInput}>{questions[index].options[1].text}</p>
          <p className='opt' onClick={handelInput}>{questions[index].options[2].text}</p>
          <p className='opt' onClick={handelInput}>{questions[index].options[3].text}</p>

          <div className='footerBtns'>
            <h2 className='highlightBtn' onClick={highlightHandel}>Highlight</h2>
            <h2 className='removeHighlightBtn' onClick={removeHighlightHandel}>Remove Highlight</h2>
          </div>
        </div>

      </div>
  )
}else{
  return(
    <div>
      <Results score={score}  numberofQuestions={questions.length}/>
    </div>
  )
}
}
