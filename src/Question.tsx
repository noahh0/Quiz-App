import { useContext } from "react";
import { QuizContext } from "./QuizContext";
import Answers from "./Answers";
import TrueOrFalse from "./TrueOrFalse";

function Question() {
  const { questions, currentQuestion } = useContext(QuizContext)!;

  return (
    <div>
      <p>{questions[currentQuestion].question}</p>
      {questions[currentQuestion].type === "multiple" ? (
        <Answers />
      ) : (
        <TrueOrFalse />
      )}
    </div>
  );
}

export default Question;
