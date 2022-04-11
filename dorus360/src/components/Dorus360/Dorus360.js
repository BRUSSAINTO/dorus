import Intro from "./Intro/Intro";
import Header from "../SharedComponents/Header/Header";
import Solution from "./Solution/Solution";
import Structure from "./Structure/Structure";
import Versatility from "./Versatility/Versatility";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "../SharedComponents/Footer/Footer";
import { useRef } from "react";

function Dorus360() {
  const myRef = useRef(null);
  const handleScrollButton = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="dorus360">
        <Header />
        <Intro onClickScrollArrow={handleScrollButton} />
      </div>
      <Solution myRef={myRef} />
      <Structure />
      <Versatility />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Dorus360;
