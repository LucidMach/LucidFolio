import selection from "../styles/selection.module.css";
import { useState } from "react";

const Sekection = ({ options }) => {
  const [active, setActive] = useState("all");
  return (
    <div className={selection.container}>
      {options.map((option, i) => {
        return (
          <div
            className={option === active ? selection.activeBtn : selection.btn}
            onClick={() => setActive(option)}
            key={i}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
};

export default Sekection;
