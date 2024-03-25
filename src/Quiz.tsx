import { useContext, useState, useEffect } from "react";
import { QuizContext } from "./QuizContext";
import Question from "./Question";

// Quiz component with current question and quiz info
function Quiz() {
  const { currentQuestion, setCurrentQuestion, score, timePerQuestion } =
    useContext(QuizContext)!;

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
    <div className="sm:w-11/12 md:w-5/6 lg:w-3/4 h-full m-auto">
      {timePerQuestion ? (
        <div className="grid grid-flow-col justify-center">
          <p className="text-center rounded-lg border-black border-2 p-2 mx-4">
            Score: {score}/{currentQuestion}
          </p>
          <p className="text-center rounded-lg border-black border-2 p-2 mx-4">
            {timeRemaining} s
          </p>
        </div>
      ) : (
        <p className="text-center rounded-lg w-1/6 border-black border-2 m-auto p-2">
          Score: {score}/{currentQuestion}
        </p>
      )}
      <Question />
    </div>
  );
}

export default Quiz;
