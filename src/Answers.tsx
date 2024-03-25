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
    <div className="w-full grid grid-cols-2 p-16">
      {answers.map((answer) => (
        <button
          className="w-full text-l bg-slate-50 p-2 rounded-lg hover:bg-slate-200 border-black border-2"
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
