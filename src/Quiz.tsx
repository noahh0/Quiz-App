import { useContext, useState, useEffect } from "react";
import { QuizContext } from "./QuizContext";
import Question from "./Question";

// Quiz component with current question and quiz info
function Quiz() {
  const {
    questions,
    currentQuestion,
    setCurrentQuestion,
    score,
    timePerQuestion,
  } = useContext(QuizContext)!;

  // Timer for each question if time is set
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  useEffect(() => {
    setTimeRemaining(timePerQuestion);
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === null) {
          clearInterval(timer);
          return timePerQuestion;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setCurrentQuestion(currentQuestion + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining]);

  return (
    <div>
      <div>
        <p>
          Question: {currentQuestion + 1}/{questions.length}
        </p>
        <p>
          Score: {score}/{currentQuestion}
        </p>
        {timePerQuestion ? <p>Time remaining: {timeRemaining} s</p> : false}
      </div>
      <Question />
    </div>
  );
}

export default Quiz;
