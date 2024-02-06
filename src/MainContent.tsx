import { useContext } from "react";
import { QuizContext } from "./QuizContext";
import Quiz from "./Quiz";
import QuizOptions from "./QuizOptions";

function MainContent() {
  const { inQuiz } = useContext(QuizContext)!;

  return <main>{inQuiz ? <Quiz /> : <QuizOptions />}</main>;
}

export default MainContent;
