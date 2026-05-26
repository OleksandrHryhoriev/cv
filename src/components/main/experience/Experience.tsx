import { EXPERIENCE } from "../../../assets/data";
import styles from "./Experience.module.scss";

const Experience = () => {
   return (
      <ul className={styles.experience}>
         {EXPERIENCE.map((item) => (
            <li
               key={item.place + item.position}
               className={styles.experience__item}
            >
               <p className={styles.experience__position}>{item.position}</p>
               <div className={styles.experience__bottom}>
                  <span className={styles.experience__place}>{item.place}</span>
                  <span className={styles.experience__period}>
                     {item.period.end
                        ? `${item.period.start} - ${item.period.end}`
                        : item.period.start}
                  </span>
               </div>
            </li>
         ))}
      </ul>
   );
};

export default Experience;
