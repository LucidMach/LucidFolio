import Link from "next/link";
import BTN from "../components/BTN";
import Social from "../components/Social";
import NavBar from "../components/NavBar";
import home from "../styles/home.module.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [h, setH] = useState("82vh");

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("in interval");
      if (window) {
        setH(window.innerHeight - 100);
        clearInterval(interval);
      }
    }, 200);
  }, [h]);

  return (
    <>
      <NavBar>
        <BTN>
          <Link href={{ pathname: "/projects", query: { type: "UI" } }}>
            projects
          </Link>
        </BTN>
      </NavBar>
      <div className={home.container} style={{ height: h }}>
        <h2 className={home.title}>LucidMach</h2>
        <h3 className={home.motto}>Dream It... Build It</h3>
        <div className={home.links}>
          <BTN>
            <Link href={{ pathname: "/projects", query: { type: "UI" } }}>
              projects
            </Link>
          </BTN>
          <BTN>
            <a href="https://dev.to/Lucidmach/" target="_">
              lucid blog
            </a>
          </BTN>
        </div>
      </div>
      <Social />
    </>
  );
};

export default Home;
