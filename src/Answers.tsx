import { useContext, useMemo } from "react";
import he from "he";
import { QuizContext } from "./QuizContext";

// Answers component with clickable answer buttons
function Answers() {
  const {
    setSiteState,
    questions,
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
  } = useContext(QuizContext)!;

  // Update score and move to next question
  const processAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    if (currentQuestion === questions.length - 1) {
      setSiteState("results");
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Combine correct and incorrect answers, then shuffle them
  const answers: string[] = useMemo(() => {
    const tempAnswers = questions[currentQuestion].incorrect_answers.concat(
      questions[currentQuestion].correct_answer
    );
    return tempAnswers.sort(() => Math.random() - 0.5);
  }, [questions, currentQuestion]);

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
          {he.unescape(answer)}
        </button>
      ))}
    </div>
  );
}

export default Answers;
