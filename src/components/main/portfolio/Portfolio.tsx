import { PORTFOLIO } from "../../../assets/data";
import { filterAndSort } from "../../../utils/filterAndSort";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
   const commercial = filterAndSort(PORTFOLIO, "commercial");
   const react = filterAndSort(PORTFOLIO, "react");
   const other = filterAndSort(PORTFOLIO, "other");

   return (
      <div className={styles.portfolio}>
         <ul className={styles.portfolio__list}>
            <li className={styles.portfolio__listItem}>
               <p className={styles.portfolio__title}>Commercial Projects:</p>
               <ul className={styles.portfolio__sublist}>
                  {commercial.map((item) => (
                     <li className={styles.portfolio__item}>
                        <a
                           href={item.link}
                           className={styles.portfolio__link}
                           target="_blank"
                        >
                           {item.title}
                        </a>
                        <span className={styles.portfolio__preview}>
                           <img src={item.imageUrl} alt="preview image" />
                        </span>
                     </li>
                  ))}
               </ul>
            </li>
            <li className={styles.portfolio__listItem}>
               <p className={styles.portfolio__title}>React Projects:</p>
               <ul className={styles.portfolio__sublist}>
                  {react.map((item) => (
                     <li className={styles.portfolio__item}>
                        <a
                           href={item.link}
                           className={styles.portfolio__link}
                           target="_blank"
                        >
                           {item.title}
                        </a>
                        <span className={styles.portfolio__preview}>
                           <img src={item.imageUrl} alt="preview image" />
                        </span>
                     </li>
                  ))}
               </ul>
            </li>
            {other.map((item) => (
               <li className={styles.portfolio__listItem}>
                  <div className={styles.portfolio__item}>
                     <a
                        href={item.link}
                        className={styles.portfolio__link}
                        target="_blank"
                     >
                        {item.title}
                     </a>
                     <span className={styles.portfolio__preview}>
                        <img src={item.imageUrl} alt="preview image" />
                     </span>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Portfolio;
