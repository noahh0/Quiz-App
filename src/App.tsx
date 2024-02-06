import Header from "./Header.tsx";
import QuizProvider from "./QuizContext";
import MainContent from "./MainContent.tsx";
import Footer from "./Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <QuizProvider>
        <MainContent />
      </QuizProvider>
      <Footer />
    </>
  );
}

export default App;
