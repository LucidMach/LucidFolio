import NavBar from "./NavBar";
import Social from "./Social";

const LayOut = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Social />
    </>
  );
};

export default LayOut;
