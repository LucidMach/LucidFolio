import home from "../styles/home.module.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [h, setH] = useState("82vh");

  useEffect(() => {
    setInterval(() => {
      if (window) {
        setH(window.innerHeight - 100);
      }
    }, 200);
  }, [h]);

  return (
    <div className={home.container} style={{ height: h }}>
      <h2 className={home.title}>LucidMach</h2>
      <h3 className={home.motto}>Dream It... Build It !</h3>
    </div>
  );
};

export default Home;
