import React, { Component } from "react";

//Components
import QuestionCard from "./components/QuestionCard";

const App = () => {
  const startTrivia = async () => {
    console.log("start");
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("check");
  };

  const nextQuestion = () => {
    console.log("next");
  };

  return (
    <div className="App">
      <h1>React Quiz App</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
