import { EDUCATION } from "../../../assets/data";
import styles from "./Education.module.scss";

const Education = () => {
   return (
      <ul className={styles.education}>
         {EDUCATION.map((item) => (
            <li
               key={item.place + item.position}
               className={styles.education__item}
            >
               <div className={styles.education__info}>
                  <span className={styles.education__type}>{item.type}</span>
                  <span className={styles.education__place}>{item.place}</span>
                  <span className={styles.education__position}>
                     {item.position}
                  </span>
               </div>
               <span className={styles.education__period}>
                  {item.period.end
                     ? `${item.period.start} - ${item.period.end}`
                     : item.period.start}
               </span>
            </li>
         ))}
      </ul>
   );
};

export default Education;
