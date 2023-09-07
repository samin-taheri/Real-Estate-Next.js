import React from 'react';
import QuizQuestion from './quiz-questions'; 
import QuizProgressBar from './quiz-progress-bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Button from './button';
import CompletedQuiz from './completed-quiz';

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
  currentImageIndex: number;
}

const imageUrls = [
  'bg-24.jpg',
  'bg-21.jpg',
  'bg-28.jpg',
  'bg-25.jpg',
  'bg-26.jpg',
  'bg-27.jpg',
];

const QuizForm: React.FC<QuizFormProps> = ({
  currentQuestionIndex,
  progress,
  quizCompleted,
  selectedAnswer,
  onNextClick,
  onPreviousClick,
  onAnswerClick, 
  quizQuestions,
  currentImageIndex,
}) => (
  <div>
    <QuizProgressBar progress={progress} />
    {quizCompleted ? (
      <CompletedQuiz/>
    ) : (
      <div className="flex">
        <QuizQuestion
            question={quizQuestions[currentQuestionIndex].question}
            answers={quizQuestions[currentQuestionIndex].answers}
            selectedAnswer={selectedAnswer}
            onAnswerClick={onAnswerClick}
        />
        <div className="w-1/2 ml-10">
        <div className="question-container w-1/2" style={{width: '450px'}}>
        <img src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="w-45 h-45" />
        </div>
      </div>
    </div>
    )}
    <div className="flex justify-between">
    {!quizCompleted && (
     
      <Button
      onClick={onPreviousClick}
      disabled={currentQuestionIndex === 0}
      iconLeft={<FontAwesomeIcon icon={faAnglesLeft} className="mr-3" /> }
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
