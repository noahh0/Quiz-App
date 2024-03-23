import { useContext } from "react";
import { QuizContext } from "./QuizContext";

// Page to display final score
function QuizResults() {
  const { score, questions, setSiteState, setCurrentQuestion, setScore } =
    useContext(QuizContext)!;

  return (
    <div>
      <h2>Your Score:</h2>
      <p>
        {score}/{questions.length}
      </p>
      <button
        onClick={(e) => {
          e.preventDefault();
          setCurrentQuestion(0);
          setScore(0);
          setSiteState("options");
        }}
      >
        Start New Quiz
      </button>
    </div>
  );
}

export default QuizResults;
