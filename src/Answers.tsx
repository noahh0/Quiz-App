import { useContext } from "react";
import { QuizContext } from "./QuizContext";

// Answers component with clickable answer buttons
function Answers() {
  const { questions, currentQuestion } = useContext(QuizContext)!;

  // Combine correct and incorrect answers, then shuffle them
  let answers: string[] = questions[currentQuestion].incorrect_answers.concat(
    questions[currentQuestion].correct_answer
  );
  answers = answers.sort(() => Math.random() - 0.5);

  return (
    <div>
      {answers.map((answer) => (
        <button>{answer}</button>
      ))}
    </div>
  );
}

export default Answers;
