import Router from "next/router";
import { SetStateAction, useEffect, useRef } from "react";
import selection from "./selection.module.css";

interface Props {
  options: string[];
  active: string;
  setActive: React.Dispatch<SetStateAction<string>>;
  w: number;
}

const Selection: React.FC<Props> = ({ options, active, setActive, w }) => {
  const optionRef = useRef();

  useEffect(() => {
    const URLprojectMode = window.location.search.split("=")[1]
      ? window.location.search.split("=")[1]
      : "UI";
    setActive(URLprojectMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={selection.container}>
      <svg
        className={selection.icon}
        width="24"
        height="24"
        viewBox="0 0 45 45"
        fill={w < 600 ? "var(--bg0)" : "var(--ac2)"}
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
