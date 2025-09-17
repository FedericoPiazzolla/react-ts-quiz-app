import React from "react";
import type { AnswerObject } from "../App";

// style
import "./style/QuestionCard.css";

//types
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  const progress = (questionNr / totalQuestions) * 100;

  return (
    <div className="card-wrapper">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
      <div className="answers">
        {answers.map((answer) => {
          // Condizione per vedere se il bottone è stato selezionato
          const isSelected = userAnswer?.answer === answer;
          const isCorrect = userAnswer?.correctAnswer === answer;

          return (
            <div key={answer} className="answer">
              <button
                disabled={!!userAnswer}
                value={answer}
                onClick={callback}
                className={
                  isSelected ? (isCorrect ? "correct" : "incorrect") : ""
                }>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
