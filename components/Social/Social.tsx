import social from "./social.module.css";
import sociallinks from "./sociallinks";
import icons from "../../models/icons";

const Social: React.FC = () => {
  return (
    <div className={social.container}>
      <div className={social.longLine}></div>
      {sociallinks.map((link) => {
        return (
          <a href={link.href} key={link.index} target="_">
            {icons[link.icon]}
          </a>
        );
      })}
      <div className={social.shortLine}></div>
    </div>
  );
};

export default Social;
