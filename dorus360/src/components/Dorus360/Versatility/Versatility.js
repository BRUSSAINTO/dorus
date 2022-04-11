import { VERSATILITY_PARAGRAPH } from "../../../utils/constants";
import { useSelector } from "react-redux";

function Versatility() {
  const language = useSelector((state) => state.language.language);
  return (
    <section className="versatility">
      <p className="versatility__paragraph">
        {VERSATILITY_PARAGRAPH[language]}
      </p>
    </section>
  );
}

export default Versatility;
