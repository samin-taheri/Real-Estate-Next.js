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
    <div className="w-1/2 ml-10">
    <div className="question-container w-1/2" style={{width: '500px'}}>
        <img src="/bg-24.jpg" alt="Quiz Image" className="w-45 h-45"/>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
