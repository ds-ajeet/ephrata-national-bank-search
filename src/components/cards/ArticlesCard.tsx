import * as React from "react";
import { useEffect, useState } from "react";
import { CardProps } from '../../models/cardComponent';

type Faq = {
  prop: any;
  c_faqHeading: any;
  // c_viewmore: any;
};

const Faq = (faqData: Faq) => {
  const { c_faqHeading} = faqData;
  const [isShow, setIsShow] = useState(false);
  const [faqId, setFaqId] = useState(null);
  const [faq_Data, setFaq_Data] = useState([]);
  const [faqClass, setFaqClass] = useState("");
  const [faqClass2, setFaqClass2] = useState(null);
  const [faqLen, setFaqLen] = useState(0);
  const [leftFaqLen, setLeftFaqLen] = useState(0);
  const [rightFaqLen, setRightFaqLen] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [selected, setselected] = useState(null);
  const [selected2, setselected2] = useState(null);
  const isShowContent = (e: any, index: any) => {
    setselected(index);
    // setFaqClass("opened");

    const parent = e.target.parentNode.parentNode;

    if (parent.classList.contains("opened")) {
      setFaqClass("");
    } else {
      const acc = document.getElementsByClassName("faq-block");
      for (let s = 0; s < acc?.length; s++) {
        acc[s].classList.remove("opened");
      }
      setFaqClass("opened");
    }
  };

  useEffect(() => {
    setFaq_Data(faqData.prop);

    const left = faqData.prop?.length / 2;
    const right = faqData.prop?.length - Math.round(left);

    setLeftFaqLen(left);

    setRightFaqLen(right);
  });

  return (
    <>
      <div className="faq-sec bg-light">
        <div className="container">
          <div className="faq-blocks">
            <div className="left-faq">
              
                  <div
                    id={ArticleCard.id}
                    className={
                      selected == ArticleCard.id
                        ? `faq-block ${faqClass}`
                        : "faq-block"
                    }
                    key={ArticleCard.id}
                  >
                    <h4
                      className="faq-title"
                      onClick={(e) => isShowContent(e, ArticleCard.id)}
                    >
                      {ArticleCard.name}
                    </h4>

                    <>
                      <div className="faq-content">
                        {ArticleCard.answer}
                      </div>
                    </>
                  </div>
                

              
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default Faq;