import React, { useState, Dispatch, SetStateAction } from "react";

// Question type returned by API
interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuizContext {
  siteState: string;
  setSiteState: Dispatch<SetStateAction<string>>;
  questions: Question[];
  setQuestions: Dispatch<SetStateAction<Question[]>>;
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  showAnswers: boolean;
  setShowAnswers: Dispatch<SetStateAction<boolean>>;
  timePerQuestion: number | null;
  setTimePerQuestion: Dispatch<SetStateAction<number | null>>;
}

const QuizContext = React.createContext<QuizContext | null>(null);

// Context provider for quiz state
function QuizProvider({ children }: { children: React.ReactNode }) {
  const [siteState, setSiteState] = useState<string>("options");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const [timePerQuestion, setTimePerQuestion] = useState<number | null>(null);

  return (
    <QuizContext.Provider
      value={{
        siteState,
        setSiteState,
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion,
        score,
        setScore,
        showAnswers,
        setShowAnswers,
        timePerQuestion,
        setTimePerQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizContext };
export default QuizProvider;
