import Selection from "../components/Selection/Selection";
import work from "../styles/work.module.css";
import NavBar from "../components/NavBar/NavBar";
import Social from "../components/Social/Social";
import BTN from "../components/BTN/BTN";
import icons from "../components/icons";

import Head from "next/head";
import Image from "next/image";
import FileSaver from "file-saver";

import { useEffect, useState } from "react";
import { GetStaticProps } from "next";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const fireStorageURL = (folder: "projects" | "stack", file: string): string =>
  `https://firebasestorage.googleapis.com/v0/b/lucidfolio-c4f29.appspot.com/o/${folder}%2F${file}.png?alt=media`;

export const getStaticProps: GetStaticProps = async () => {
  /* uncomment only to backup the data */
  // projects.forEach(async (project) => {
  //   try {
  //     const docRef = await addDoc(collection(db, "projects"), project);
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // });

  let projects = [];
  const snapshot = await getDocs(collection(db, "projects"));
  snapshot.forEach((doc) => {
    projects.push(doc.data());
  });

  return {
    props: {
      projects: projects,
    },
    revalidate: 86400, // no of secs in a day
  };
};

const Work = ({ projects }) => {
  const [active, setActive] = useState("UI");
  const [w, setW] = useState(600);

  // fetching window width
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
      <Head>
        <title>LucidFolio | Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar>
        <BTN>
          <a href="https://ziro2mach.com/" target="_">
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
                          src={fireStorageURL("stack", element)}
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
