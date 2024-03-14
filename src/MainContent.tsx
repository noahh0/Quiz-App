import { useContext } from "react";
import { QuizContext } from "./QuizContext";
import Quiz from "./Quiz";
import QuizOptions from "./QuizOptions";
import QuizResults from "./QuizResults";

// Main content component
function MainContent() {
  const { siteState } = useContext(QuizContext)!;

  // Renders the quiz or options page as needed
  return (
    <main>
      {(() => {
        switch (siteState) {
          case "options":
            return <QuizOptions />;
          case "quiz":
            return <Quiz />;
          case "results":
            return <QuizResults />;
          default:
            return <div>Error</div>; // Make this more descriptive
        }
      })()}
    </main>
  );
}

export default MainContent;
