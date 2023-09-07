import React from 'react';
import QuizQuestion from './quiz-questions'; 
import QuizProgressBar from './quiz-progress-bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Button from './button';

interface QuizFormProps {
  currentQuestionIndex: number;
  progress: number;
  quizCompleted: boolean;
  selectedAnswer: number | null;
  onNextClick: () => void;
  onPreviousClick: () => void;
  onAnswerClick: (answerIndex: number) => void; 
  quizQuestions: {
    question: string;
    answers: string[];
  }[];
}

const QuizForm: React.FC<QuizFormProps> = ({
  currentQuestionIndex,
  progress,
  quizCompleted,
  selectedAnswer,
  onNextClick,
  onPreviousClick,
  onAnswerClick, 
  quizQuestions,
}) => (
  <div>
    <QuizProgressBar progress={progress} />
    {quizCompleted ? (
      <div>
        <h2 className="question-text pt-4">The collection is almost ready. You will receive it in a couple of minutes. 🤩</h2>
        <div className="mt-10 mb-10 flex w-full md:justify-start justify-center items-end">
          <div className="relative ml-5 lg:w-full xl:w-1/2 w-2/4">
            <input
              placeholder="Your Phone"
              type="text"
              id="hero-field"
              name="hero-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-200 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="inline-flex ml-5 text-white bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">
            Get an answer
          </button>
        </div>
      </div>
    ) : (
      <>
        <QuizQuestion
            question={quizQuestions[currentQuestionIndex].question}
            answers={quizQuestions[currentQuestionIndex].answers}
            selectedAnswer={selectedAnswer}
            onAnswerClick={onAnswerClick}
        />
      </>
    )}
    <div className="flex justify-between">
    {!quizCompleted && (
     
      <Button
      onClick={onPreviousClick}
      disabled={currentQuestionIndex === 0}
      iconLeft={<FontAwesomeIcon icon={faAnglesLeft} className="ml-3" /> }
    >
      Previous
    </Button>
    )}
    {!quizCompleted && (
      <Button
      onClick={onNextClick}
      disabled={selectedAnswer === null && !quizCompleted}
      iconRight={<FontAwesomeIcon icon={faAnglesRight} className="ml-3" /> }
    >
      Next
    </Button>
    )}
    </div>
  </div>
);

export default QuizForm;
