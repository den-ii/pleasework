import { useState, useEffect } from "react";
import FetchData from "./FetchData";
import PropTypes from "prop-types";

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

export default function ShuffleQuizItems(props) {
  const [itemsToShuffle, setItemsToShuffle] = useState([]);
  // const [itemsToExport, setItemsToExport] = useState([]);

  function handleImport(items) {
    setItemsToShuffle(items);
  }

  useEffect(() => {
    const shuffledItems = itemsToShuffle.map((item) => {
      const shuffledAnswers = [...item.answers];
      for (let i = shuffledAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledAnswers[i], shuffledAnswers[j]] = [
          shuffledAnswers[j],
          shuffledAnswers[i],
        ];
      }

      return {
        ...item,
        answers: shuffledAnswers,
      };
    });
    props.setItemsToExport(shuffledItems);
  }, [itemsToShuffle]);

  return (
    <div>
      <FetchData onQuizItemsChange={handleImport} />
    </div>
  );
}

ShuffleQuizItems.propTypes = {
  setItemsToExport: PropTypes.func.isRequired,
};
