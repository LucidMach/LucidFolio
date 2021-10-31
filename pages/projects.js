import Selection from "../components/Selection";
import twoD from "../styles/twoD.module.css";
import projects from "../models/projects";
import NavBar from "../components/NavBar";
import Social from "../components/Social";
import BTN from "../components/BTN";
import icons from "../models/icons";
import Image from "next/image";
import FileSaver from "file-saver";
import { useEffect, useRef, useState } from "react";

const TwoD = () => {
  const [active, setActive] = useState("UI");
  const [w, setW] = useState(600);

  const linkRef = useRef();

  // For Conditional Rendering SocialMedia Links on Work Page
  useEffect(() => {
    const interval = setInterval(() => {
      if (window) {
        setW(window.innerWidth);
        clearInterval(interval);
      }
    }, 200);
  }, [w]);

  const projectTypes = ["UI", "wallpapers", "logos", "3D"];
  let projects2d;

  projects2d = projects.filter((project) => {
    return project.type === active;
  });

  return (
    <div className={twoD.content}>
      <NavBar>
        <BTN>
          <a href="https://dev.to/Lucidmach/" target="_">
            blog
          </a>
        </BTN>
      </NavBar>
      <Selection
        active={active}
        setActive={setActive}
        options={projectTypes}
        w={w}
      />
      {projects2d.map((project) => {
        return (
          <div className={twoD.work} key={project.title}>
            <div className={twoD.container}>
              <div className={twoD.card}>
                <Image
                  className={twoD.image}
                  objectFit={project.type === "logos" ? "contain" : "cover"}
                  src={project.pic}
                  alt={project.title}
                  width="850"
                  height="425"
                  onClick={() => {
                    if (
                      project.links[project.links.length - 1].icon !==
                      "download"
                    ) {
                      window
                        .open(project.links[project.links.length - 1].link, "_")
                        .focus();
                    } else {
                      FileSaver.saveAs(project.pic, `${project.title}.png`);
                    }
                  }}
                />
                <h1 className={twoD.title}>{project.title}</h1>
                <h4 className={twoD.date}>{project.date}</h4>
                <div className={twoD.roles}>
                  {project.roles.map((role, i) => {
                    return (
                      <div className={twoD.role} key={i}>
                        {role}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={twoD.details}>
                <p className={twoD.desc}>{project.desc}</p>
                <div className={twoD.links}>
                  {project.links.map((link) => {
                    if (link.icon !== "download")
                      return (
                        <a
                          className={twoD.link}
                          key={link.icon}
                          href={link.link}
                          target="_"
                        >
                          {icons[link.icon]}
                        </a>
                      );
                    else {
                      return (
                        <div
                          className={twoD.link}
                          key={link.icon}
                          onClick={() => {
                            FileSaver.saveAs(
                              project.pic,
                              `${project.title}.png`
                            );
                          }}
                        >
                          {icons[link.icon]}
                        </div>
                      );
                    }
                  })}
                </div>
                <div className={twoD.stack}>
                  {project.stack.map((element) => {
                    return (
                      <div className={twoD.tool} key={element}>
                        <Image
                          src={`/assets/stack/${element}.png`}
                          alt={element}
                          width={w > 600 ? "36px" : "30px"}
                          height={w > 600 ? "36px" : "30px"}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {w > 600 ? <Social /> : null}
    </div>
  );
};

export default TwoD;
