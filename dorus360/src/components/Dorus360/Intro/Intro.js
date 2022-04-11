import CustomButton from "../../SharedComponents/CustomButton/CustomButton";
import { LEARN_MORE, SCHEDULE_DEMO } from "../../../utils/constants";
import { useSelector } from "react-redux";
function Intro({ onClickScrollArrow }) {
  const language = useSelector((state) => state.language.language);

  return (
    <section className="intro">
      <div className="intro-container">
        <h1 className="intro__title">Dorus 360°</h1>
        <div className="intro__buttons">
          <CustomButton className="intro__button">
            {LEARN_MORE[language]}
          </CustomButton>
          <CustomButton color="primary" className="intro__button">
            {SCHEDULE_DEMO[language]}{" "}
          </CustomButton>
        </div>
        <button
          className="intro__button-arrow"
          onClick={onClickScrollArrow}
        ></button>
      </div>{" "}
    </section>
  );
}

export default Intro;
