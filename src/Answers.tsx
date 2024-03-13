import { useContext } from "react";
import { QuizContext } from "./QuizContext";

// Answers component with clickable answer buttons
function Answers() {
  const { questions, currentQuestion, setCurrentQuestion, score, setScore } =
    useContext(QuizContext)!;

  // Update score and move to next question
  const processAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  // Combine correct and incorrect answers, then shuffle them
  let answers: string[] = questions[currentQuestion].incorrect_answers.concat(
    questions[currentQuestion].correct_answer
  );
  answers = answers.sort(() => Math.random() - 0.5);

  return (
    <div>
      {answers.map((answer) => (
        <button
          key={answer}
          onClick={(e) => {
            e.preventDefault();
            processAnswer(answer);
          }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default Answers;
