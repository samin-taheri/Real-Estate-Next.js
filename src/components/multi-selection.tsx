import React, { useState } from 'react';
import QuizForm from './quiz-form';

interface QuizQuestion {
    question: string;
    answers: string[];
  }

const MultipleChoiceQuestion: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    
    const [quizQuestions] = useState<QuizQuestion[]>([
      {
        question: 'What is the purpose of buying real estate?',
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
      if (currentImageIndex < 5) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
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
        if (currentImageIndex < 5) {
          setCurrentImageIndex(currentImageIndex - 1);
        }
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
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
