import { Dispatch, SetStateAction } from "react";
import modal from "./modal.module.css";

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ show, setShow, children }) => {
  const handleClick = (): void => {
    setShow(!show);
  };
  return (
    <>
      <div
        className={modal.overlay}
        style={{
          display: show ? "flex" : "none",
          height: window.innerHeight,
          width: window.innerWidth,
        }}
        onClick={handleClick}
      >
        <div
          className={modal.modal}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
