import { useAuthState } from "react-firebase-hooks/auth";
import dashboard from "../styles/dashboard.module.css";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import NavBar from "../components/NavBar/NavBar";
import Editor from "@monaco-editor/react";
import BTN from "../components/BTN/BTN";
import { auth } from "../firebase";
import router from "next/router";

const DashBoard: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const pretext = `interface Project {
    title: string;
    date: string;
    roles: string[];
    type: string;
    links: {
      icon: string;
      link: string;
    }[];
    desc: string;
    pic: string;
    stack: string[];
  }
  `;

  if (error) {
    router.push("/admin");
  }
  if (loading) {
    return (
      <div>
        <Image src="/LoGo.png" alt="HexMach" width="50" height="60" />
      </div>
    );
  }
  if (user) {
    return (
      <div className={dashboard.container}>
        <NavBar>
          <BTN>
            <Link href={{ pathname: "/projects", query: { type: "UI" } }}>
              projects
            </Link>
          </BTN>
        </NavBar>
        <Editor
          defaultLanguage="typescript"
          height="70vh"
          width="70vw"
          theme="vs-dark"
          defaultValue={pretext}
        />
        <button className={dashboard.btn}>+</button>
      </div>
    );
  }
};

export default DashBoard;
