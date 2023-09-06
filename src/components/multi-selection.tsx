import React, { useState } from 'react';
import ProgressBar from './progress-bar';

interface QuizQuestion {
    question: string;
    answers: string[];
  }
  
const MultipleChoiceQuestion: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const [quizQuestions] = useState<QuizQuestion[]>([
      {
        question: 'What is your purpose of buying real estate?',
        answers: ['For investment', 'For life', 'For temporary stay and recreation', 'For child/student'],
      },
      {
        question: 'Select the type of property you are interested in:',
        answers: ['Apartment/Apartment', 'Villa/Penthouse', 'Land plot', 'commercial real estate'],
      },
      {
        question: 'Choose the right layout:',
        answers: ['1+1 (two-room apartment)', '2+1 (three-room apartment)', '3+1 (four-room apartment)', '4+1 or more'],
      },
      {
        question: 'What budget are you looking for?',
        answers: ['up to 100 000 €', 'up to 150 000 €', 'up to 250 000 €', 'Over 250,000 €'],
      },
      {
        question: 'Need an installment or loan?',
        answers: ['No', 'Yes'],
      },
      {
        question: 'When do you plan to buy the property?',
        answers: ['Need urgently', 'Within 3 months', 'Within 6 months'],
      }
    ]);
  
    const handleAnswerClick = (answerIndex: number) => {
        setSelectedAnswer(answerIndex);
      };

    const handleNextClick = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedAnswer(null); // Reset selected answer
            setProgress((currentProgress) =>
              currentProgress + (15)
            );
        } else if (progress < 100) {
          // Complete the progress when it's not already 100%
          setQuizCompleted(true)
          setProgress(100);
        } else {
          setQuizCompleted(true); // Set quiz as completed
        }
      };
      
      const handlePreviousClick = () => {
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
      };

  return (
    <div> 
    <div className="question-container">
      <ProgressBar progress={progress} />
      <ul className="answers-list">
      {quizCompleted ? (
        <div>
            <h2 className="question-text pt-4">The collection is almost ready. You will receive it in a couple of minutes. 
            <br/>Where is the best place to send?</h2>
            <div className="mt-10 mb-10 flex w-full md:justify-start justify-center items-end">
        <div className="relative ml-5 lg:w-full xl:w-1/2 w-2/4">
          <input placeholder='Your Phone' type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-200 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex ml-5 text-white bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">Get an answer</button>
      </div>
        </div>
        ) : (
        <>
        <h2 className="question-text">{quizQuestions[currentQuestionIndex].question}</h2>
        {quizQuestions[currentQuestionIndex].answers.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(index)}
            className={`answer-item ${
                selectedAnswer === index ? 'selected-answer' : ''
              }`}
          >
            {answer}
          </li>
        ))}</>
        )}
      </ul>
    </div>
    {!quizCompleted && (
    <button
        onClick={handlePreviousClick}
        className={`px-10 py-2 rounded-lg mt-7 hover:bg-yellow-500 bg-yellow-400 text-white ${
          currentQuestionIndex === 0 ? 'disabled-button' : ''
        }`}
        disabled={true} 
      >
        Previous
      </button>
       )}
       {!quizCompleted && (
      <button
        onClick={handleNextClick}
        className={`px-10 py-2 ml-6 rounded-lg mt-7 hover:bg-yellow-500 bg-yellow-400 text-white ${
          currentQuestionIndex === 0 ? 'disabled-button' : ''
        }`}
        disabled={selectedAnswer === null && !quizCompleted}
      >
        Next
      </button>
      )}
  </div>
  );
};

export default MultipleChoiceQuestion;
