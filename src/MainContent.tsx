import { useContext } from "react";
import { QuizContext } from "./QuizContext";
import Quiz from "./Quiz";
import QuizOptions from "./QuizOptions";

// Main content component
function MainContent() {
  const { inQuiz } = useContext(QuizContext)!;

  // Renders the quiz or options page as needed
  return <main>{inQuiz ? <Quiz /> : <QuizOptions />}</main>;
}

export default MainContent;
