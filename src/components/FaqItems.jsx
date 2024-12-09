import React, { useEffect, useState } from "react";

function FaqItems({ faq, index }) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setDisplay(true);
    }
  }, []);
  const handleDisplay = () => {
    if (display === false) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };
  return (
    <div className="faq-box">
      <div className="faq-que">
        <button onClick={handleDisplay} className={display ? "arrow" : ""}>
          >
        </button>
        <div>{faq.question}</div>
      </div>

      {display && (
        <div div className="faq-answer">
          <div>{faq.answer}</div>
        </div>
      )}
    </div>
  );
}

export default FaqItems;
