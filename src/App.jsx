import { useState } from "react";
import QuizPage from "./QuizPage";
import TitlePage from "./TitlePage";

import "./App.css";

function App() {
  const [display, changeDisplay] = useState(true);

  function clickIt() {
    changeDisplay(false);
  }

  return (
    <>
      <div>
        <TitlePage clickIt={clickIt} display={display} />
        <QuizPage clickIt={clickIt} display={display} />
      </div>
    </>
  );
}

export default App;
