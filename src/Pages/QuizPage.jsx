import React, { useState, useEffect } from 'react';

// Component
import Answer from '../components/Answer';

// Fetch
import axios from 'axios';

// Animation
import { motion } from 'framer-motion';

// Redux hooks
import { useSelector } from 'react-redux';

// Routing
import { Link } from 'react-router-dom';

export default function QuizPage() {
  const [questionsArray, setQuestionsArray] = useState([]);
  const [questionsLength, setQuestionsLength] = useState(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const selectedOption = useSelector((state) => state.selectedOption);
  const [end, setEnd] = useState(false);
  const [correctAnswersNumber, setCorrectAnswrsNumber] = useState(0);

  const categoriesObject = {
    'General Knowledge':
      'https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=5',
    History: 'https://the-trivia-api.com/api/questions?categories=history&limit=5',
    Geography: 'https://the-trivia-api.com/api/questions?categories=geography&limit=5',
  };

  const apiUrl = categoriesObject[selectedOption];

  useEffect(() => {
    axios.get(apiUrl).then((data) => {
      setQuestionsArray(data.data);
      setQuestionsLength(data.data.length);
    });
  }, []);

  const nextQuestion = (answer) => {
    if (currentQuestionNumber + 1 === questionsArray.length) {
      setEnd(true);
    }
    if (answer === questionsArray[currentQuestionNumber].correctAnswer) {
      setCorrectAnswrsNumber(correctAnswersNumber + 1);
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  const answersNewArray =
    questionsArray.length > 0 && end === false
      ? questionsArray[currentQuestionNumber].incorrectAnswers
      : [];
  if (questionsArray.length > 0 && end === false) {
    answersNewArray.push(questionsArray[currentQuestionNumber].correctAnswer);
  }
  const sortedArray = end === false ? answersNewArray.sort(() => Math.random() - 0.5) : [];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
      }}>
      <h2 className="text-center font-bold uppercase text-yellow-50">
        {questionsArray[currentQuestionNumber]
          ? questionsArray[currentQuestionNumber].question
          : ''}
      </h2>
      <div className="flex flex-col gap-[10px] mt-[30px]">
        {questionsArray[currentQuestionNumber]
          ? sortedArray.map((item, index) => (
              <Answer text={item} index={index} key={index} nextQuestion={nextQuestion} />
            ))
          : ''}
      </div>
      {end ? (
        <div>
          <h1 className="text-center text-[24px] font-bold text-white ">Correct Answers:</h1>
          <p className="text-center">{correctAnswersNumber} out of 5</p>
          <Link
            to="/"
            className="mx-auto block w-[160px] mt-[20px] text-center bg-transparent transition ease-in delay-150 border rounded-[30px] hover:bg-gray-900 hover:text-white text-black p-[10px] ">
            Play Again
          </Link>
        </div>
      ) : null}
    </motion.div>
  );
}
