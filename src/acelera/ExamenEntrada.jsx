import { useState } from "react";
import React from "react";
import {Data} from './Components/Data'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,

  } from 'mdb-react-ui-kit';
import SearchBar from "./Components/SearchBar";


const ExamenEntrada = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })
  
    const { questions } = Data
    const { question, choices, correctAnswer } = questions[activeQuestion]
  
    const onClickNext = () => {
      // again reset the selectedAnwerIndex, so it won't effect next question
      setSelectedAnswerIndex(null)
      setActiveQuestion((prev) => prev + 1)
      setResult((prev) =>
        selectedAnswer
          ? {
              ...prev,
              score: prev.score + 5,
              correctAnswers: prev.correctAnswers + 1,
            }
          : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
      )
    }
  
    const onAnswerSelected = (answer, index) => {
      setSelectedAnswerIndex(index)
      if (answer === correctAnswer) {
        setSelectedAnswer(true)
      } else {
        setSelectedAnswer(false)
      }
    }
  
    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
  
    return (
    
    <MDBContainer fluid>
    <SearchBar></SearchBar>
      <div className="quiz-container" >
        <div>
          <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
          <span className="total-question">/{addLeadingZero(questions.length)}</span>
        </div>
        <h2>{question}</h2>
        <ul>
          {choices.map((answer, index) => (
            <li
              onClick={() => onAnswerSelected(answer, index)}
              key={answer}
              className={selectedAnswerIndex === index ? 'selected-answer' : null}>
              {answer}
            </li>
          ))}
        </ul>
        <div className="flex-right">
          <MDBBtn   onClick={onClickNext} disabled={selectedAnswerIndex === null}>
            {activeQuestion === questions.length - 1 ? 'Terminar' : 'Siguiente'}
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
    )
  }
  
  export default ExamenEntrada