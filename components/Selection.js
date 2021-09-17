import selection from "../styles/selection.module.css";

const Sekection = ({ options, active, setActive, setIndex }) => {
  return (
    <div className={selection.container}>
      {options.map((option, i) => {
        return (
          <div
            className={option === active ? selection.activeBtn : selection.btn}
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
  );
};

export default Sekection;
