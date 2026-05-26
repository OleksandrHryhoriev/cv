import { SKILLS } from "../../../assets/data";
import SkillsBlock from "../../sidebar/skills/SkillsBlock";
import styles from "./SkillsSection.module.scss";

const SkillsSection = () => {
   return (
      <div className={styles.skillsSection}>
         {SKILLS.map((item) => (
            <div key={item.title} className={styles.skillsSection__block}>
               <SkillsBlock skillsObj={item} />
            </div>
         ))}
      </div>
   );
};

export default SkillsSection;
