import { useContext } from "react";
import { QuizContext } from "./QuizContext";
import Answers from "./Answers";
import TrueOrFalse from "./TrueOrFalse";

function Question() {
  const qC = useContext(QuizContext);

  return (
    <div>
      <div>Question tbi</div>
      {qC!.questions[qC!.currentQuestion].type === "multiple" ? (
        <Answers />
      ) : (
        <TrueOrFalse />
      )}
    </div>
  );
}

export default Question;
