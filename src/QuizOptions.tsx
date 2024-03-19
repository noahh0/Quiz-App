import { useState, useContext } from "react";
import { QuizContext } from "./QuizContext";

// Quiz Options component page with form inputs
function QuizOptions() {
  const { setSiteState, setQuestions, setTimePerQuestion } =
    useContext(QuizContext)!;

  // State for quiz options
  const [numberQuestions, setNumberQuestions] = useState<number>(10);
  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [time, setTime] = useState<string>("");

  // Generate URL to fetch questions from API
  const generateAPIQuery = (): string => {
    return `https://opentdb.com/api.php?amount=${numberQuestions}${
      category ? `&category=${category}` : ""
    }${difficulty ? `&difficulty=${difficulty}` : ""}${
      type ? `&type=${type}` : ""
    }`;
  };

  // Fetch questions from API and start the quiz if data fetched successfully
  const startQuiz = () => {
    fetch(generateAPIQuery())
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching questions");
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data.results);
        setSiteState("quiz");
        setTimePerQuestion(time ? parseInt(time) : null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="sm:w-11/12 md:w-5/6 lg:w-3/4 h-full m-auto grid grid-col justify-center">
      <form className="w-full h-3/4 grid grid-cols-2 content-around m-auto">
        <label htmlFor="number-questions-field">Number of questions: </label>
        <input
          type="number"
          name="number-questions-field"
          min="1"
          max="50"
          value={numberQuestions}
          onChange={(e) => {
            setNumberQuestions(parseInt(e.target.value));
          }}
        />

        <label htmlFor="category-field">Category: </label>
        <select
          name="category-field"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Books</option>
          <option value="11">Film</option>
          <option value="12">Music</option>
          <option value="13">Theatre</option>
          <option value="14">Television</option>
          <option value="15">Video Games</option>
          <option value="16">Board Games</option>
          <option value="17">Science and Nature</option>
          <option value="18">Computers</option>
          <option value="19">Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Comics</option>
          <option value="30">Gadgets</option>
          <option value="31">Anime and Manga</option>
          <option value="32">Cartoons and Animation</option>
        </select>

        <label htmlFor="difficulty-field">Difficulty: </label>
        <select
          name="difficulty-field"
          value={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
        >
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <label htmlFor="type-field">Type: </label>
        <select
          name="type-field"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>

        <label htmlFor="time-per-question-field">Time per Question: </label>
        <select
          name="time-per-question-field"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
        >
          <option value="">No Limit</option>
          <option value="10">10 seconds</option>
          <option value="20">20 seconds</option>
          <option value="30">30 seconds</option>
          <option value="60">1 minute</option>
        </select>
      </form>
      <button
        className="text-xl font-bold bg-slate-50 m-auto p-2 rounded-lg hover:bg-slate-200 border-black border-2"
        onClick={(e) => {
          e.preventDefault();
          startQuiz();
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default QuizOptions;
