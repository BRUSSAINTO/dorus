import { SOLUTION_TITLE, SOLUTION_PARAPRAPH } from "../../../utils/constants";
import { useSelector } from "react-redux";
import solution from "../../../images/solution.svg";

function Solution({ myRef }) {
  const language = useSelector((state) => state.language.language);
  return (
    <section ref={myRef} className="solution">
      <div className="solution__info-container">
        <h2 className="solution__title">{SOLUTION_TITLE[language]}</h2>
        <p className="solution__paragraph">{SOLUTION_PARAPRAPH[language]}</p>
      </div>
      <img
        className="solution__image"
        src={solution}
        alt="big paper board with tables, on frontside column of coins and small women is working on laptop"
      />
    </section>
  );
}

export default Solution;
