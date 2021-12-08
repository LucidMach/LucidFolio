import btn from "../styles/btn.module.css";

interface Props {
  children: React.ReactNode;
}

const BTN: React.FC<Props> = ({ children }) => {
  return <div className={btn.btn}>{children}</div>;
};

export default BTN;
