import nav from "./nav.module.css";

interface Props {
  links: string[];
}

const Nav: React.FC<Props> = ({ links }) => {
  return (
    <>
      <div className={nav.container}>
        <div className={nav.longLine}></div>
        {links.map((link, i) => {
          return (
            <div className={nav.lnk} key={i}>
              {link}
            </div>
          );
        })}
        <div className={nav.shortLine}></div>
      </div>
    </>
  );
};

export default Nav;
