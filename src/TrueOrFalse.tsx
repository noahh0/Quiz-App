import { useContext } from "react";
import { QuizContext } from "./QuizContext";

// Answer component for T/F questions
function TrueOrFalse() {
  const { questions, currentQuestion, setCurrentQuestion, score, setScore } =
    useContext(QuizContext)!;

  const processAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          processAnswer("True");
        }}
      >
        True
      </button>
      <button
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
