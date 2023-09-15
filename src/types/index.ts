import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export interface BenefitCardProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
  }
  export interface BenefitsOfWorkingCardProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    color: string; 
  }
  export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
  }
  export interface ColoredCardsProps {
    title: string;
    description: string;
    backgroundColor?: string;
    link: string;
    linkColor: string;
  }
  export interface IconProps {
    icon: IconDefinition;
    onClick: () => void;
    isOpen: boolean;
  }
  export type LanguageSelectorProps = {
    imageUrl: string;
    onClick: () => void;
    isOpen: boolean;
  };

  export interface InfoSectionProps {
    children: ReactNode;
  }
  export interface ModalProps {
    closeModal: () => void;
    step: number;
    selectedOption: string;
    selectedOptionForMoney: string;
    handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleSelectChangeForMoney: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    nextStep: () => void;
  }
  export interface QuizQuestion {
    question: string;
    answers: string[];
  }
  export interface PostListProps {
    posts: {
      id: number;
      title: string;
      description: string;
      location: string;
      image: string;
      permit: string;
      priceRange: string;
    }[];
  }
  export interface PostProps {
    post: {
      id: number;
      title: string;
      description: string;
      location: string;
      image: string;
      permit: string;
      priceRange: string;
    };
  }
  export interface ProgressBarProps {
    progress: number;
  }
  export interface PropertyInfoProps {
    title: string;
    description: string;
    image: string;
    button: string;
  }
  export interface QuizFormProps {
    currentQuestionIndex: number;
    progress: number;
    quizCompleted: boolean;
    selectedAnswer: number | null;
    onNextClick: () => void;
    onPreviousClick: () => void;
    onAnswerClick: (answerIndex: number) => void; 
    quizQuestions: {
      question: string;
      answers: string[];
    }[];
    currentImageIndex: number;
  }
  export interface QuizProgressBarProps {
    progress: number;
  }
  export interface QuizQuestionProps {
    question: string;
    answers: string[];
    selectedAnswer: number | null;
    onAnswerClick: (answerIndex: number) => void;
    currentImageIndex: number;
  }
  export interface RightMenuProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
  }
  export interface TableRowProps {
    title: string;
    permitValue: string;
    citizenshipValue: string;
    icon?: React.ReactNode;
  }
  export interface CatalogPopupProps {
    onClose: () => void;
  }
  export interface AccordionItemProps {
    question: string;
    answer: string;
  }
  export interface Message {
    text: string;
  }
  export interface Language {
    code: string;
    label: string;
    image: string;
  }
  
  export interface PopoverProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    languages: Language[];
    onChangeLanguage: (code: string) => void;
  }
  export type User = {
    id: number;
    name: string;
  };
  
  export type UsersProps = {
    users: User[];
  };