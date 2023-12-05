import Link from "next/link";
import Head from "next/head";
import BTN from "../components/BTN/BTN";
import Social from "../components/Social/Social";
import NavBar from "../components/NavBar/NavBar";
import home from "../styles/home.module.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [h, setH] = useState<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      if (window) {
        setH(window.innerHeight - 100);
        clearInterval(interval);
      }
    }, 200);
  }, [h]);

  return (
    <>
      <Head>
        <title>LucidFolio | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
            <a href="https://ziro2mach.com/" target="_">
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
