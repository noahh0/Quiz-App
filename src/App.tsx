import Header from "./Header.tsx";
import QuizProvider from "./QuizContext";
import MainContent from "./MainContent.tsx";
import Footer from "./Footer.tsx";

// Main App component
function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <QuizProvider>
        <MainContent />
      </QuizProvider>
      <Footer />
    </div>
  );
}

export default App;
