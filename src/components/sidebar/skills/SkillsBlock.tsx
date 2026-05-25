import type { SkillsObj } from "../../../types/types";
import styles from "./SkillsBlock.module.scss";

type SkillsBlockProps = {
   skillsObj: SkillsObj;
};

const SkillsBlock = ({ skillsObj }: SkillsBlockProps) => {
   return (
      <div className={styles.skills}>
         <h2 className={styles.skills__title}>{skillsObj.title}</h2>
         <ul className={styles.skills__list}>
            {skillsObj.skills.map((item) => (
               <li key={item} className={styles.skills__item}>
                  {item}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default SkillsBlock;
