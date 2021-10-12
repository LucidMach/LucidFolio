import selection from "../styles/selection.module.css";
import Image from "next/image";

const Selection = ({ options, active, setActive, setIndex }) => {
  return (
    <div className={selection.container}>
      <Image
        className={selection.icon}
        src="/Filter.svg"
        alt="logo"
        width="24px"
        height="24px"
      />
      <div className={selection.options}>
        {options.map((option, i) => {
          return (
            <div
              className={
                option === active ? selection.activeBtn : selection.btn
              }
              onClick={() => {
                setActive(option);
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
