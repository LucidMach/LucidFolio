import Router from "next/router";
import { useEffect, useRef } from "react";
import selection from "../styles/selection.module.css";

const Selection = ({ options, active, setActive, w }) => {
  const optionRef = useRef();

  useEffect(() => {
    const URLprojectMode = window.location.search.split("=")[1]
      ? window.location.search.split("=")[1]
      : "UI";
    setActive(URLprojectMode);
  }, []);

  return (
    <div className={selection.container}>
      <svg
        className={selection.icon}
        width="24"
        height="24"
        viewBox="0 0 45 45"
        fill={w < 600 ? "#1a1a1a" : "#EBDF13"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.86981 0H43.0055L26.1773 28.3012V45L18.6981 39.375V28.3012L1.86981 0Z" />
      </svg>

      <div className={selection.options} ref={optionRef}>
        {options.map((option, i) => {
          return (
            <div
              className={
                option === active ? selection.activeBtn : selection.btn
              }
              onClick={() => {
                setActive(option);
                // console.log(window.location.search);
                // window.location.search = `?mode=${option}`;
                Router.push({
                  pathname: "/projects",
                  query: { type: option },
                });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              key={i}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Selection;
