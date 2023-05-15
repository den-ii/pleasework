import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import he from 'he';

export default function FetchData(props) {
    const [questions, setQuestions] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);


    useEffect(() => {    
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
          .then(response => response.json())
          .then(data => {
      const theQuestions =    data.results.map(x => he.decode(x.question));
      const theRightAnswers = data.results.map(x => he.decode(x.correct_answer));  
      const theWrongAnswers = data.results.map(x => x.incorrect_answers.map(y => he.decode(y)));
      setQuestions(theQuestions);
      setRightAnswers(theRightAnswers);
      setWrongAnswers(theWrongAnswers);
            }
          );
        }, []);



useEffect(() => {
        if (wrongAnswers.length > 0 && wrongAnswers[0].length > 0) {
          
const quizItems = [
      {
        id: 1,
        question: questions[0],
        answeredCorrectly : false,    
        answers: [
          {
            id: 1,
            answer: rightAnswers[0],
            correct: true,
            clicked: false,
            submitted: false
          },
          {
            id: 2,
            answer: wrongAnswers[0][0],  
            correct: false,
            clicked: false,
            submitted: false
          },
          {
            id: 3,
            answer: wrongAnswers[0][1],
            correct: false,
            clicked: false,
            submitted: false

          },
          {
            id: 4,
            answer: wrongAnswers[0][2],
            correct: false,
            clicked: false,
            submitted: false
          }
        ]
      },
      {
        id: 2,
        question: questions[1],
        answeredCorrectly  : false,
        answers: [
          {
            id: 1,
            answer: rightAnswers[1],
            correct: true,
            clicked: false,
            submitted: false
          },
          {
            id: 2,
            answer: wrongAnswers[1][0],
            correct: false,
            clicked: false,
            submitted: false
          },
          {
            id: 3,
            answer: wrongAnswers[1][1],
            correct: false,
            clicked: false,
            submitted: false
          },
          {
            id: 4,
            answer: wrongAnswers[1][2],
            correct: false,
            clicked: false,
            submitted: false
          }
        ]
      },
      {
        id: 3,
        question: questions[2],
        answeredCorrectly  : false,
        answers: [
          {
            id: 1,
            answer: rightAnswers[2],
            correct: true,
            clicked: false,
            submitted: false
          },
          {
            id: 2,
            answer: wrongAnswers[2][0],
            correct: false,
            clicked: false,
            submitted: false
          },
          {
            id: 3,
            answer: wrongAnswers[2][1],
            correct: false,
            clicked: false,
            submitted: false
          },
          {
            id: 4,
            answer: wrongAnswers[2][2],
            correct: false,
            clicked: false,
            submitted: false
          }
        ]
      },
      {
        id: 4,
        question: questions[3],
        answeredCorrectly  : false,
        answers: [
          {
            id: 1,
            answer: rightAnswers[3],
            correct: true,
            clicked: false,
            submitted: false
          },
          {
            id: 2,
            answer: wrongAnswers[3][0],
            correct: false,
            clicked: false,
            submitted: false
          },
          {
            id: 3,
            answer: wrongAnswers[3][1],
            correct: false,
            clicked: false,
            submitted: false
          },
          {
            id: 4,
            answer: wrongAnswers[3][2],
            correct: false,
            clicked: false,
            submitted: false
          }
        ]
      },
      {
        id: 5,
        question: questions[4],
        answeredCorrectly : false,
        answers: [
          {
            id: 1,
            answer: rightAnswers[4],
            correct: true,
            clicked: false,
            submitted: false
          },
          {
            id: 2,
            answer: wrongAnswers[4][0],
            correct: false,
            clicked: false,
            submitted: false
          },
          {
            id: 3,
            answer: wrongAnswers[4][1],
            correct: false,
            clicked: false,
            submitted: false
          },
          {
            id: 4,
            answer: wrongAnswers[4][2],
            correct: false,
            clicked: false,
            submitted: false
          }
        ]
        
      }
    ]
    props.onQuizItemsChange(quizItems);
}
}, [questions, rightAnswers, wrongAnswers]);
  
}


FetchData.propTypes = {
    onQuizItemsChange: PropTypes.func.isRequired
  };
