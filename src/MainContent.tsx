import { useContext } from "react";
import { QuizContext } from "./QuizContext";
import Quiz from "./Quiz";
import QuizOptions from "./QuizOptions";

function MainContent() {
  const qC = useContext(QuizContext);

  return <main>{qC!.inQuiz ? <Quiz /> : <QuizOptions />}</main>;
}

export default MainContent;
