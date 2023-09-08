import React from "react";
import { ProgressBarProps } from '@/types';

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mb-3">
          Survey passed on:
          </span>
        </div>
      </div>
      <div className="flex h-5 mb-4 overflow-hidden text-xs bg-gray-200 rounded-lg">
        <div className="justify-center text-center text-white shadow-none whitespace-nowrap bg-gray-500 pl-5 pr-4 pt-0.5">
          {progress}%
        </div>
        <div
          style={{ width: `${progress}%` }}
          className="h-5 bg-gray-500 rounded-r-lg"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
