import React, { useState } from 'react';
import QuizForm from './quiz-form';
import { QuizQuestion } from '@/types';
import {useTranslations} from 'next-intl';

const MultipleChoiceQuestion: React.FC = () => {
    const t = useTranslations('Index');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    
    const [quizQuestions] = useState<QuizQuestion[]>([
      {
        question: t('quiz-question-1'), 
        answers: [t('quiz-answer-1-1'), t('quiz-answer-1-2'), t('quiz-answer-1-3'), t('quiz-answer-1-4')],
      },
      {
        question: t('quiz-question-2'), 
        answers: [t('quiz-answer-2-1'), t('quiz-answer-2-2'), t('quiz-answer-2-3'), t('quiz-answer-2-4')],
      },
      {
        question: t('quiz-question-3'), 
        answers: [t('quiz-answer-3-1'), t('quiz-answer-3-2'), t('quiz-answer-3-3'), t('quiz-answer-3-4')],
      },
      {
        question: t('quiz-question-4'), 
        answers: [t('quiz-answer-4-1'), t('quiz-answer-4-2'), t('quiz-answer-4-3'), t('quiz-answer-4-4')],
      },
      {
        question: t('quiz-question-5'), 
        answers: [t('quiz-answer-5-1'), t('quiz-answer-5-2')],
      },
      {
        question: t('quiz-question-6'), 
        answers: [t('quiz-answer-6-1'), t('quiz-answer-6-2'), t('quiz-answer-6-3')],
      }
    ]);
  
    const handleAnswerClick = (answerIndex: number) => {
        setSelectedAnswer(answerIndex);
      };

    const handleNextClick = () => {
        if (currentQuestionIndex < quizQuestions.length - 1 && currentImageIndex < 5) {
          setCurrentImageIndex(currentImageIndex + 1);
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
        if (currentQuestionIndex > 0 && currentImageIndex < 5) {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
          setCurrentImageIndex(currentImageIndex - 1);
          setSelectedAnswer(null); // Reset selected answer
      
          // Calculate the progress percentage for the previous question
          const previousProgress = (currentQuestionIndex - 1) * (100 / (quizQuestions.length - 1));
          setProgress((currentProgress) => currentProgress - 15);
        }
      };      

  return (
    <div> 
    <QuizForm
        currentQuestionIndex={currentQuestionIndex}
        progress={progress}
        quizCompleted={quizCompleted}
        selectedAnswer={selectedAnswer}
        onNextClick={handleNextClick}
        onPreviousClick={handlePreviousClick}
        onAnswerClick={handleAnswerClick}
        quizQuestions={quizQuestions} 
        currentImageIndex={currentImageIndex}
      />
  </div>
  );
};

export default MultipleChoiceQuestion;
