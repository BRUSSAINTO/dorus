import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../redux/actions";

function Languages() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handlerChangeLanguage = (e) => {
    dispatch(setLanguage(e.target.name));
  };

  return (
    <div className="languages">
      <button
        name="en"
        className={
          language === "en"
            ? "languages__button languages__button_active"
            : "languages__button"
        }
        onClick={handlerChangeLanguage}
      >
        ENG
      </button>
      <button
        name="gr"
        className={
          language === "gr"
            ? "languages__button languages__button_active"
            : "languages__button"
        }
        onClick={handlerChangeLanguage}
      >
        GRE
      </button>
    </div>
  );
}

export default Languages;
