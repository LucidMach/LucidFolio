import Selection from "../components/Selection";
import projects2d from "../models/2dprojects";
import twoD from "../styles/twoD.module.css";
import NavBar from "../components/NavBar";
import Social from "../components/Social";
import icons from "../models/icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TwoD = () => {
  const [index, setIndex] = useState(0);
  const [w, setW] = useState("100vw");

  useEffect(() => {
    const interval = setInterval(() => {
      if (window) {
        setW(window.innerWidth);
        clearInterval(interval);
      }
    }, 200);
  }, [w]);
  return (
    <>
      <NavBar>
        <Selection options={["all", "UI", "wallpapers", "logos"]} />
      </NavBar>
      <div className={twoD.container}>
        <div className={twoD.card}>
          <Image
            className={twoD.image}
            src={projects2d[index].pic}
            alt={projects2d[index].title}
            width="850"
            height="425"
          />
          <h1 className={twoD.title}>{projects2d[index].title}</h1>
          <h4 className={twoD.date}>{projects2d[index].date}</h4>
          <div className={twoD.roles}>
            {projects2d[index].roles.map((role, i) => {
              return (
                <div className={twoD.role} key={i}>
                  {role}
                </div>
              );
            })}
          </div>
          <div className={twoD.links}>
            {projects2d[index].links.map((link) => {
              return (
                <Link
                  className={twoD.link}
                  key={link.icon}
                  href={link.link}
                  target="_"
                >
                  {icons[link.icon]}
                </Link>
              );
            })}
          </div>
        </div>
        <div className={twoD.details}>
          <p className={twoD.desc}>{projects2d[index].desc}</p>
          <div className={twoD.stack}>
            {projects2d[index].stack.map((element) => {
              return (
                <div className={twoD.tool} key={element}>
                  <Image
                    src={`/assets/stack/${element}.png`}
                    alt={element}
                    width="36px"
                    height="36px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {w > 600 ? <Social /> : null}
    </>
  );
};

export default TwoD;
