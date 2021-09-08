import Image from "next/image";
import navbar from "../styles/navbar.module.css";

const NavBar = () => {
  return (
    <div className={navbar.container}>
      <div className={navbar.logo}>
        <Image src="/LoGo.png" alt="HexMach" width="50" height="60" />
      </div>
      <button className={navbar.btn}>
        {" "}
        <a href="https://dev.to/Lucidmach/">blog</a>
      </button>
    </div>
  );
};

export default NavBar;
