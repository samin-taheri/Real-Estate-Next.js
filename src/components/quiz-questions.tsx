import React from 'react';

interface QuizQuestionProps {
    question: string;
    answers: string[];
    selectedAnswer: number | null;
    onAnswerClick: (answerIndex: number) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  answers,
  selectedAnswer,
  onAnswerClick,
}) => {
  return (
    <div className="flex">
    <div className="question-container w-1/2" style={{width: '500px'}}>
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
    </div>
  );
};

export default QuizQuestion;
