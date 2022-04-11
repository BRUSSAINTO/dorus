import {
  BROKERAGE_TITLE,
  CUSTODIAN_TITLE,
  CUSTODIAN_PARAGRAPH,
  DIGITAL_TITLE,
  FUND_TITLE,
  FUND_PARAGRAPH,
  MOBILE_TITLE,
  WEALTH_TITLE,
  DMA_TITLE,
  DMA_PARAGRAPH,
  SALES_TITLE,
  INVESTMENT_TITLE,
  INVESTMENT_PARAGRAPH,
  CRM_TITLE,
} from "../../../utils/constants";
import { useSelector } from "react-redux";
import computer from "../../../images/structure/computer.png";
import useViewSize from "../../../hooks/useViewSize";

function Structure() {
  const language = useSelector((state) => state.language.language);
  const [viewSize] = useViewSize(window.innerWidth);
  return (
    <section className="structure">
      {viewSize > 1279 ? (
        <>
          {" "}
          <div className="structure__logo"></div>
          <div className="structure__container">
            <div className="structure__block-left">
              <div className="structure__module_small structure__module-brokerage">
                {BROKERAGE_TITLE[language]}
              </div>
              <div className="structure__module structure__module-custodian ">
                <div className="structure__line-left structure__line-left-top"></div>
                <div className="structure__point structure__point_top-left"></div>
                <h3 className="structure__module-title">
                  {CUSTODIAN_TITLE[language]}
                </h3>
                <p className="structure__module-paragraph">
                  {CUSTODIAN_PARAGRAPH[language]}
                </p>
              </div>
              <div className="structure__module_small structure__module-digital">
                {DIGITAL_TITLE[language]}
              </div>
              <div className="structure__module structure__module-fund ">
                <div className="structure__line-left structure__line-left-bottom"></div>
                <div className="structure__point structure__point_bottom-left"></div>
                <h3 className="structure__module-title">
                  {FUND_TITLE[language]}
                </h3>
                <p className="structure__module-paragraph">
                  {FUND_PARAGRAPH[language]}
                </p>
              </div>
              <div className="structure__module_small structure__module-mobile">
                {MOBILE_TITLE[language]}
              </div>
            </div>
            <div className="structure__image-container ">
              <img
                className="structure__computer-image"
                src={computer}
                alt=""
              />
            </div>
            <div className="structure__block-right">
              <div className="structure__module_small structure__module-wealth">
                {WEALTH_TITLE[language]}
              </div>
              <div className="structure__module structure__module-dma ">
                <div className="structure__line-right structure__line-right-top"></div>
                <div className="structure__point structure__point_top-right"></div>
                <h3 className="structure__module-title">
                  {DMA_TITLE[language]}
                </h3>
                <p className="structure__module-paragraph">
                  {DMA_PARAGRAPH[language]}
                </p>
              </div>
              <div className="structure__module_small structure__module-sales">
                {SALES_TITLE[language]}
              </div>
              <div className="structure__module structure__module-investment ">
                <div className="structure__line-right structure__line-right-bottom"></div>
                <div className="structure__point structure__point_bottom-right"></div>
                <h3 className="structure__module-title">
                  {INVESTMENT_TITLE[language]}
                </h3>
                <p className="structure__module-paragraph">
                  {INVESTMENT_PARAGRAPH[language]}
                </p>
              </div>
              <div className="structure__module_small structure__module-crm">
                {CRM_TITLE[language]}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="structure__block-left">
            <div className="structure__image-container ">
              <img
                className="structure__computer-image"
                src={computer}
                alt=""
              />
            </div>
            <div className="structure__module_small structure__module-crm">
              {CRM_TITLE[language]}
            </div>

            <div className="structure__module structure__module-dma ">
              <div className="structure__line-left structure__line-left-top"></div>
              <div className="structure__point structure__point_top-left"></div>
              <h3 className="structure__module-title">{DMA_TITLE[language]}</h3>
              <p className="structure__module-paragraph">
                {DMA_PARAGRAPH[language]}
              </p>
            </div>

            <div className="structure__module_small structure__module-brokerage">
              {BROKERAGE_TITLE[language]}
            </div>

            <div className="structure__module structure__module-custodian ">
              <div className="structure__line-right structure__line-right-top"></div>
              <div className="structure__point structure__point_top-right"></div>
              <h3 className="structure__module-title">
                {CUSTODIAN_TITLE[language]}
              </h3>
              <p className="structure__module-paragraph">
                {CUSTODIAN_PARAGRAPH[language]}
              </p>
            </div>

            <div className="structure__module_small structure__module-wealth">
              {WEALTH_TITLE[language]}
            </div>

            <div className="structure__module structure__module-fund ">
              <div className="structure__line-left structure__line-left-bottom"></div>
              <div className="structure__point structure__point_bottom-left"></div>
              <h3 className="structure__module-title">
                {FUND_TITLE[language]}
              </h3>
              <p className="structure__module-paragraph">
                {FUND_PARAGRAPH[language]}
              </p>
            </div>

            <div className="structure__module_small structure__module-digital">
              {DIGITAL_TITLE[language]}
            </div>

            <div className="structure__module structure__module-investment ">
              <div className="structure__line-right structure__line-right-bottom"></div>
              <div className="structure__point structure__point_bottom-right"></div>
              <h3 className="structure__module-title">
                {INVESTMENT_TITLE[language]}
              </h3>
              <p className="structure__module-paragraph">
                {INVESTMENT_PARAGRAPH[language]}
              </p>
            </div>

            <div className="structure__module_small structure__module-sales">
              {SALES_TITLE[language]}
            </div>

            <div className="structure__module_small structure__module-mobile">
              {MOBILE_TITLE[language]}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Structure;
