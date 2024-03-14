import { useContext } from "react";
import { QuizContext } from "./QuizContext";

// Page to display final score
function QuizResults() {
  const { score, questions } = useContext(QuizContext)!;

  return (
    <div>
      <h2>Your Score:</h2>
      <p>
        {score}/{questions.length}
      </p>
    </div>
  ); // Add button to start a new quiz
}

export default QuizResults;
