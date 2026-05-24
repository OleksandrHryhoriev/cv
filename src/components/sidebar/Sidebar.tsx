import Contacts from "./contacts/Contacts";
import HardSkills from "./hardSkills/HardSkills";
import Langs from "./langs/Langs";
import styles from "./Sidebar.module.scss";
import SoftSkills from "./softSkills/SoftSkills";

const Sidebar = () => {
   return (
      <aside className={styles.sidebar}>
         <div className={styles.sidebar__block}>
            <Contacts />
         </div>
         <div className={styles.sidebar__block}>
            <HardSkills />
         </div>
         <div className={styles.sidebar__block}>
            <SoftSkills />
         </div>
         <div className={styles.sidebar__block}>
            <Langs />
         </div>
      </aside>
   );
};

export default Sidebar;
