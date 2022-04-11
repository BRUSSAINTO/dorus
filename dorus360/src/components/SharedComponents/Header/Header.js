import logo from "../../../images/logo.svg";
import logoTitle from "../../../images/logoTitle.svg";
import Navigation from "../Navigation/Navigation";
import Languages from "../Languages/Languages";
import useViewSize from "../../../hooks/useViewSize";
import { useState } from "react";
function Header() {
  const [viewSize] = useViewSize(window.innerWidth);
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const handlerBurgerClick = () => {
    setIsOpenBurger((prev) => !prev);
  };

  return (
    <header
      className={
        isOpenBurger
          ? "header header_open-burger"
          : "header header_close-burger"
      }
    >
      <div className="header__container">
        <div className="header__logo-container">
          <img src={logo} alt="Logo dorus" className="header__logo" />
          <img
            src={logoTitle}
            alt="dorus title"
            className="header__logo-title"
          />
        </div>

        {viewSize > 995 ? (
          <div className="header__nav-lang-container">
            <Navigation />
            <Languages />
          </div>
        ) : (
          <button
            className="header__burger-button"
            onClick={handlerBurgerClick}
          ></button>
        )}
      </div>
      {isOpenBurger && viewSize < 995 && (
        <div className="header__navigation-overlay">
          <div className="header__navigation-overlay-container">
            <Navigation />
            <Languages />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
