import Link from "next/link";
import BTN from "../components/BTN";
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
    <div className={home.container} style={{ height: h }}>
      <h2 className={home.title}>LucidMach</h2>
      <h3 className={home.motto}>Dream It... Build It</h3>
      <div className={home.links}>
        <BTN>
          <Link href="/2d">2D</Link>
        </BTN>
        <BTN>
          <Link href="/3d">3D</Link>
        </BTN>
      </div>
    </div>
  );
};

export default Home;
