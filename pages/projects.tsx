import Selection from "../components/Selection";
import work from "../styles/work.module.css";
import projects from "../models/projects";
import NavBar from "../components/NavBar";
import Social from "../components/Social";
import BTN from "../components/BTN";
import icons from "../models/icons";
import Image from "next/image";
import FileSaver from "file-saver";
import { useEffect, useState } from "react";

const Work = () => {
  const [active, setActive] = useState("UI");
  const [w, setW] = useState(600);

  // For Conditional Rendering SocialMedia Links on Work Page
  useEffect(() => {
    const interval = setInterval(() => {
      if (window) {
        setW(window.innerWidth);
        clearInterval(interval);
      }
    }, 200);
  }, [w]);

  let projectTypes: string[] = [];
  projects.forEach((project) => {
    if (!projectTypes.includes(project.type)) {
      projectTypes.push(project.type);
    }
  });

  const projectList = projects.filter((project) => {
    return project.type === active;
  });

  return (
    <div className={work.content}>
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
      {projectList.map((project) => {
        return (
          <div className={work.work} key={project.title}>
            <div className={work.container}>
              <div className={work.card}>
                <Image
                  className={work.image}
                  objectFit={project.type === "logo" ? "contain" : "cover"}
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
                <h1 className={work.title}>{project.title}</h1>
                <h4 className={work.date}>{project.date}</h4>
                <div className={work.roles}>
                  {project.roles.map((role, i) => {
                    return (
                      <div className={work.role} key={i}>
                        {role}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={work.details}>
                <p className={work.desc}>{project.desc}</p>
                <div className={work.links}>
                  {project.links.map((link) => {
                    if (link.icon !== "download")
                      return (
                        <a
                          className={work.link}
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
                          className={work.link}
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
                <div className={work.stack}>
                  {project.stack.map((element) => {
                    return (
                      <div className={work.tool} key={element}>
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

export default Work;
