import React from 'react';
import ProgressBar from './progress-bar';
import { QuizProgressBarProps } from '@/types';

const QuizProgressBar: React.FC<QuizProgressBarProps> = ({ progress }) => (
  <ProgressBar progress={progress} />
);

export default QuizProgressBar;
