import Selection from "../components/Selection";
import twoD from "../styles/twoD.module.css";
import projects from "../models/projects";
import NavBar from "../components/NavBar";
import Social from "../components/Social";
import icons from "../models/icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TwoD = () => {
  const [active, setActive] = useState("UI");
  const [index, setIndex] = useState(0);
  const [w, setW] = useState("100vw");
  let projects2d;

  useEffect(() => {
    const interval = setInterval(() => {
      if (window) {
        setW(window.innerWidth);
        clearInterval(interval);
      }
    }, 200);
  }, [w]);

  projects2d = projects.filter((project) => {
    return project.type === active;
  });

  return (
    <>
      <NavBar>
        <Selection
          active={active}
          setActive={setActive}
          setIndex={setIndex}
          options={["UI", "wallpapers", "logos"]}
        />
      </NavBar>
      <div className={twoD.control}>
        <div
          onClick={() => {
            setIndex(index > 0 ? index - 1 : index);
          }}
        >
          <svg
            className={index > 0 ? twoD.arrow : twoD.disabled}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </div>

        <div className={twoD.container}>
          <div className={twoD.card}>
            <Image
              className={twoD.image}
              objectFit="cover"
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
          </div>
          <div className={twoD.details}>
            <p className={twoD.desc}>{projects2d[index].desc}</p>
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
        <div
          onClick={() => {
            setIndex(index < projects2d.length - 1 ? index + 1 : index);
          }}
        >
          <svg
            className={
              index < projects2d.length - 1 ? twoD.arrow : twoD.disabled
            }
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
        </div>
      </div>
      {w > 600 ? <Social /> : null}
    </>
  );
};

export default TwoD;
