// QuizProgressBar.tsx
import React from 'react';
import ProgressBar from './progress-bar';

interface QuizProgressBarProps {
  progress: number;
}

const QuizProgressBar: React.FC<QuizProgressBarProps> = ({ progress }) => (
  <ProgressBar progress={progress} />
);

export default QuizProgressBar;
