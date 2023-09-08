import React from 'react';
import ProgressBar from './progress-bar';
import {QuizProgressBarProps} from './interfaces';

const QuizProgressBar: React.FC<QuizProgressBarProps> = ({ progress }) => (
  <ProgressBar progress={progress} />
);

export default QuizProgressBar;
