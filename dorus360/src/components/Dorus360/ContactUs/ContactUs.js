import {
  CONTACTUS_TITLE,
  NAME,
  COMPANY,
  PHONE_NUMBER,
  PRIVACY_PARAGRAPH,
  PRIVACY_AGREE,
} from "../../../utils/constants";
import { useSelector } from "react-redux";
import { useState } from "react";
import contactUs from "../../../images/contactUs.png";
import { useFormWithValidation } from "../../../hooks/useFormWithValidation.js";
import CustomButton from "../../SharedComponents/CustomButton/CustomButton";

function ContactUs() {
  const [values, handleChange, errors, isValid, resetForm] =
    useFormWithValidation();
  const language = useSelector((state) => state.language.language);
  const [form, setForm] = useState({});
  const [privacyCheckBox, setPrivacyCheckBox] = useState(true);

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setForm({
        name: values.name,
        company: values.company,
        email: values.email,
        phoneNumber: values.phoneNumber,
        privacyCheckBox: privacyCheckBox,
      });
      resetForm();
    }
    console.log(form);
  };

  const handleChangeCheckbox = (evt) => {
    setPrivacyCheckBox(evt.target.checked);
  };

  return (
    <section className="contactUs">
      <div className="contactUs__image-container">
        <img
          src={contactUs}
          alt="big logo dorus with dotted moving lines and small proccesors"
          className="contactUs__image"
        />
      </div>
      <div className="contactUs__form-container">
        <form className="contactUs__form" onSubmit={handlerFormSubmit}>
          <div className="contactUs__form-content">
            <h2 className="contactUs__form-title">
              {CONTACTUS_TITLE[language]}
            </h2>

            <input
              className="contactUs__form-input"
              type="text"
              name="name"
              placeholder={NAME[language]}
              value={values.name || ""}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <input
              className="contactUs__form-input"
              type="text"
              name="company"
              placeholder={COMPANY[language]}
              value={values.company || ""}
              onChange={handleChange}
              error={errors.company}
            />

            <input
              className="contactUs__form-input"
              type="email"
              name="email"
              placeholder="Email"
              value={values.email || ""}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <input
              className="contactUs__form-input"
              type="number"
              name="phoneNumber"
              placeholder={PHONE_NUMBER[language]}
              value={values.phoneNumber || ""}
              onChange={handleChange}
              error={errors.phoneNumber}
              required
            />
            <CustomButton
              type="submit"
              color="primary"
              className="contactUs__submit"
            >
              {CONTACTUS_TITLE[language]}
            </CustomButton>
            <p className="contactUs__privacy-paragraph">
              {PRIVACY_PARAGRAPH[language]}
            </p>
            <div className="contactUs__privacy-checkbox-container">
              <input
                type="checkbox"
                className="contactUs__privacy-checkbox"
                id="privacyCheck"
                name="privacyCheck"
                onChange={handleChangeCheckbox}
                defaultChecked={true}
              />
              <label
                htmlFor="privacyCheck"
                className="contactUs__privacy-agree"
              >
                {PRIVACY_AGREE[language]}
              </label>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
