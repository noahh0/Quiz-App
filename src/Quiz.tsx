import { useContext } from "react";
import { QuizContext } from "./QuizContext";
import Question from "./Question";

// Quiz component with current question and quiz info
function Quiz() {
  const { questions, currentQuestion, score, timePerQuestion } =
    useContext(QuizContext)!;

  // Timer for each question if time limit is set
  let timeRemaining: number | null = timePerQuestion;
  let timer: ReturnType<typeof setInterval>;
  if (timeRemaining !== null) {
    timer = setInterval(() => {
      timeRemaining! -= 1;
      if (timeRemaining! <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  return (
    <div>
      <div>
        <p>
          Question: {currentQuestion + 1}/{questions.length}
        </p>
        <p>
          Score: {score}/{currentQuestion}
        </p>
        <p>Time Remaining: {timeRemaining === null ? "-" : timeRemaining}</p>
      </div>
      <Question />
    </div>
  );
}

export default Quiz;
