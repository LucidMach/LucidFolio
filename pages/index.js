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
        <BTN>2D</BTN>
        <BTN>3D</BTN>
      </div>
    </div>
  );
};

export default Home;
