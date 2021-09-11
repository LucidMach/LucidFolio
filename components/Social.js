import social from "../styles/social.module.css";
import sociallinks from "../models/sociallinks";

const Social = () => {
  return (
    <div className={social.container}>
      <div className={social.longLine}></div>
      {sociallinks.map((link) => {
        return (
          <a href={link.href} key={link.index} target="_">
            {link.icon}
          </a>
        );
      })}
      <div className={social.shortLine}></div>
    </div>
  );
};

export default Social;
