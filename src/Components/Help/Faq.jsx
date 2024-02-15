import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function FaqAccordion() {
  const [selected, setSelected] = useState(null);
  const faq = useLoaderData();
  const [width, setWidth] = useState(window.innerWidth);

  const handleToggle = (index) => {
    setSelected((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {faq.map((faq, index) => (
        <div
          key={faq.id}
          className={`question ${selected === index ? "open" : ""}`}
          // className="question"
        >
          <p
            onClick={() => handleToggle(index)}
            className="cursor-pointer flex justify-between"
          >
            <strong>{faq.question}</strong>
            {width <= "640" ? (selected === index ? "-" : "+") : null}
          </p>

          {width >= "640" ? (
            <p>{faq.answer}</p>
          ) : (
            <div className="answer">
              <p>{faq.answer}</p>{" "}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export const faqLoader = async () => {
  const res = await fetch("http://localhost:4001/Faqs");

  if (!res.ok) {
    throw Error("Could not fetch the Faqs");
  }

  return res.json();
};
