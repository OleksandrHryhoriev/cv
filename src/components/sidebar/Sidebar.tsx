import { useState } from "react";
import { SKILLS } from "../../assets/data";
import useBreakPoint from "../../hooks/useBreakPoints";
import Contacts from "./contacts/Contacts";
import styles from "./Sidebar.module.scss";
import SkillsBlock from "./skills/SkillsBlock";

const Sidebar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const breakPoint = useBreakPoint();

   if (breakPoint !== "mobile" && isOpen) {
      setIsOpen(false);
   }

   return (
      <aside
         className={
            breakPoint === "mobile" && isOpen
               ? `${styles.sidebar} ${styles.open}`
               : styles.sidebar
         }
         onClick={() => {
            if (breakPoint === "mobile") {
               setIsOpen((prev) => !prev);
            }
         }}
      >
         <div className={styles.sidebar__wrapper}>
            <div className={styles.sidebar__block}>
               <Contacts isShow={isOpen} />
            </div>
            {breakPoint !== "mobile" &&
               SKILLS.map((item) => (
                  <div key={item.title} className={styles.sidebar__block}>
                     <SkillsBlock skillsObj={item} />
                  </div>
               ))}
         </div>
      </aside>
   );
};

export default Sidebar;
