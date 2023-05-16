import { useState } from "react";
import PropTypes from "prop-types";
import ShuffleQuizItems from "./ShuffleQuizItems";

export default function QuizPage(props) {
  const [quizItems, setQuizItems] = useState([]);
  const [count, setCount] = useState(0);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  function reStart() {
    // window.location.reload();
  }

  function handleItemsToExport(items) {
    setQuizItems(items);
  }

  const maxScore = quizItems.length;

  function clickChoice(q, a) {
    const updatedQuizItems = quizItems.map((item) => {
      if (item.id === q) {
        const updatedAnswers = item.answers.map((answer) => {
          if (answer.id === a) {
            return {
              ...answer,
              clicked: !answer.clicked,
            };
          }
          return {
            ...answer,
            clicked: false,
          };
        });

        return {
          ...item,
          answers: updatedAnswers,
        };
      }
      return item;
    });

    setQuizItems(updatedQuizItems);
  }

  const theStyle = (a) => {
    if (a.clicked && !a.submitted) {
      return "yellow";
    } else if (a.clicked && a.submitted && a.correct) {
      return "green";
    } else if (a.clicked && a.submitted && !a.correct) {
      return "red";
    } else if (!a.clicked && a.submitted && !a.correct) {
      return "gray";
    } else {
      return "transparent";
    }
  };

  const abyss = quizItems.map((q) => {
    return (
      <div key={q.id}>
        <div className="question">{q.question}</div>
        {q.answers.map((a) => (
          <button
            disabled={isButtonDisabled}
            className="normal"
            style={{
              background: a.clicked ? theStyle(a) : "",
            }}
            key={a.id}
            onClick={() => clickChoice(q.id, a.id)}
          >
            {a.answer}
          </button>
        ))}
      </div>
    );
  });

  function submit() {
    setButtonDisabled(true);
    const finalisedItems = quizItems.map((item) => {
      const finalisedAnswers = item.answers.map((answer) => {
        if (answer.clicked) {
          return {
            ...answer,
            submitted: true,
          };
        }
        return answer;
      });
      return {
        ...item,
        answers: finalisedAnswers,
      };
    });
    setQuizItems(finalisedItems);
    finalisedItems.map((item) => {
      item.answers.map((answer) => {
        if (answer.clicked && answer.correct) {
          setCount((prevCount) => prevCount + 1);
        }
      });
    });
  }

  return (
    <div style={{ display: props.display ? "none" : "block" }}>
      <ShuffleQuizItems setItemsToExport={handleItemsToExport} />

      {abyss}
      <button className="submit" disabled={isButtonDisabled} onClick={submit}>
        Submit your Answers{" "}
      </button>

      <div className="scoreandrestart">
        <p className="score">
          Score : {count} / {maxScore}
        </p>

        <button className="restart" onClick={reStart}>
          Go Back
        </button>
      </div>
    </div>
  );
}

QuizPage.propTypes = {
  display: PropTypes.bool.isRequired,
};
