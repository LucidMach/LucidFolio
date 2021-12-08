import Link from "next/link";
import Image from "next/image";
import navbar from "../styles/navbar.module.css";

interface Props {
  children: React.ReactNode;
}

const NavBar: React.FC<Props> = ({ children }) => {
  return (
    <div className={navbar.container}>
      <div className={navbar.logo}>
        <Link href="/" passHref={true}>
          <Image src="/LoGo.png" alt="HexMach" width="50" height="60" />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default NavBar;
