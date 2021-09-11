import Image from "next/image";
import BTN from "./BTN";
import navbar from "../styles/navbar.module.css";

const NavBar = () => {
  return (
    <div className={navbar.container}>
      <div className={navbar.logo}>
        <Image src="/LoGo.png" alt="HexMach" width="50" height="60" />
      </div>
      <BTN>
        <a href="https://dev.to/Lucidmach/" target="_">
          blog
        </a>
      </BTN>
    </div>
  );
};

export default NavBar;
