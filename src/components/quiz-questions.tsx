import React from 'react';
import { QuizQuestionProps } from '@/types';

const imageUrls = [
  'bg-24.jpg',
  'bg-21.jpg',
  'bg-26.jpg',
  'bg-25.jpg',
  'bg-26.jpg',
  'bg-27.jpg',
];

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  answers,
  selectedAnswer,
  onAnswerClick,
  currentImageIndex,
}) => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row">
      <div className="question-container lg:w-1/2 md:w-1/2 sm:w-full" style={{ maxWidth: '500px' }}>
        <h2 className="question-text">{question}</h2>
        <ul className="answers-list">
          {answers.map((answer, index) => (
            <li
              key={index}
              onClick={() => onAnswerClick(index)}
              className={`answer-item ${selectedAnswer === index ? 'selected-answer' : ''}`}
            >
              {answer}
            </li>
          ))}
        </ul>
      </div>
      <div className="question-container lg:w-1/2 md:w-1/2 sm:w-full" style={{ maxWidth: '450px' }}>
        {/* Use hidden sm:block to hide the image on screens smaller than sm (small) */}
        <img
          src={imageUrls[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="w-full h-full hidden sm:block"
        />
      </div>
    </div>
  );
};

export default QuizQuestion;
