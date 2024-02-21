import { useContext } from "react";
import { QuizContext } from "./QuizContext";

function Answers() {
  const { questions, currentQuestion } = useContext(QuizContext)!;
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
