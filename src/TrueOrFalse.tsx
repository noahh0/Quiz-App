import { useContext } from "react";
import { QuizContext } from "./QuizContext";

// Answer component for T/F questions
function TrueOrFalse() {
  const {
    setSiteState,
    questions,
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
  } = useContext(QuizContext)!;

  // Update score and move to next question
  const processAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    if (currentQuestion === questions.length - 1) {
      setSiteState("results");
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="w-full grid grid-cols-2 p-16">
      <button
        className="w-full text-l bg-slate-50 p-2 py-8 rounded-lg hover:bg-slate-200 border-black border-2"
        onClick={(e) => {
          e.preventDefault();
          processAnswer("True");
        }}
      >
        True
      </button>
      <button
        className="w-full text-l bg-slate-50 p-2 rounded-lg hover:bg-slate-200 border-black border-2"
        onClick={(e) => {
          e.preventDefault();
          processAnswer("False");
        }}
      >
        False
      </button>
    </div>
  );
}

export default TrueOrFalse;
