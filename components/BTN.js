import btn from "../styles/btn.module.css";

const BTN = ({ children }) => {
  return <div className={btn.btn}>{children}</div>;
};

export default BTN;
