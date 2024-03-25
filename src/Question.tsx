import { useContext } from "react";
import he from "he";
import { QuizContext } from "./QuizContext";
import Answers from "./Answers";
import TrueOrFalse from "./TrueOrFalse";

// Question component with current question and answers
function Question() {
  const { questions, currentQuestion } = useContext(QuizContext)!;

  return (
    <div className="h-full grid content-around">
      <p className="text-center h-fit">
        {currentQuestion + 1}.{"  "}
        {he.unescape(questions[currentQuestion].question)}
      </p>
      {questions[currentQuestion].type === "multiple" ? (
        <Answers />
      ) : (
        <TrueOrFalse />
      )}
    </div>
  );
}

export default Question;
