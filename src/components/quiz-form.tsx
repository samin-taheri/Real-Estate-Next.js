"use client";
import React from 'react';
import QuizQuestion from './quiz-questions'; 
import QuizProgressBar from './quiz-progress-bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Button from './button';
import CompletedQuiz from './completed-quiz';
import {QuizFormProps} from '@/types';
import {useTranslations} from 'next-intl';

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
}) =>  {
  const t = useTranslations('Index');
  return(
  <div>
    <QuizProgressBar progress={progress} />
    {quizCompleted ? (
  <CompletedQuiz />
) : (
  <div>
    <QuizQuestion
      question={quizQuestions[currentQuestionIndex].question}
      answers={quizQuestions[currentQuestionIndex].answers}
      selectedAnswer={selectedAnswer}
      onAnswerClick={onAnswerClick}
      currentImageIndex={currentImageIndex}
    />
  </div>
)}

    <div className="flex justify-between">
    {!quizCompleted && (
      <Button
      onClick={onPreviousClick}
      disabled={currentQuestionIndex === 0}
      iconLeft={<FontAwesomeIcon icon={faAnglesLeft} className="mr-3" /> }
    >
      {t("previous-button")}
    </Button>
    )}
    {!quizCompleted && (
      <Button
      onClick={onNextClick}
      disabled={selectedAnswer === null && !quizCompleted}
      iconRight={<FontAwesomeIcon icon={faAnglesRight} className="ml-3" /> }
    >
      {t("next-button")}
    </Button>
    )}
    </div>
  </div>
  );
};

export default QuizForm;
