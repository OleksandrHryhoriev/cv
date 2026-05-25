import EmailIcon from "../../icons/EmailIcon";
import GithubIcon from "../../icons/GithubIcon";
import GlobeIcon from "../../icons/GlobeIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import LocationIcon from "../../icons/LocationIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import styles from "./Contacts.module.scss";

type ContactsProps = {
   isShow: boolean;
};

const Contacts = ({ isShow }: ContactsProps) => {
   return (
      <div
         className={
            isShow ? `${styles.contacts} ${styles.open}` : `${styles.contacts}`
         }
      >
         <h2 className={styles.contacts__title}>
            <span>My</span>Contacts
         </h2>
         <nav className={styles.contacts__list}>
            <div
               className={`${styles.contacts__item} ${styles.contacts__social}`}
            >
               <a
                  href="https://t.me/oleksandr_grygoriev"
                  target="_blank"
                  className={styles.contacts__link}
               >
                  <TelegramIcon />
               </a>
               <a
                  href="https://github.com/OleksandrHryhoriev"
                  target="_blank"
                  className={styles.contacts__link}
               >
                  <GithubIcon />
               </a>
               <a
                  href="http://linkedin.com/in/oleksandr-hryhoriev-156bbb266"
                  target="_blank"
                  className={styles.contacts__link}
               >
                  <LinkedinIcon />
               </a>
            </div>
            <a
               href="tel:+380502357769"
               className={`${styles.contacts__item} ${styles.contacts__link}`}
            >
               <span className={styles.contacts__icon}>
                  <PhoneIcon />
               </span>
               <span>+38 (050) 235-77 69</span>
            </a>
            <a
               href="mailto:grygoriev.sanya@gmail.com"
               target="_blank"
               className={`${styles.contacts__item} ${styles.contacts__link}`}
            >
               <span className={styles.contacts__icon}>
                  <EmailIcon />
               </span>
               <span>grygoriev.sanya@gmail.com</span>
            </a>
            <a
               href="https://oleksandr-hryhoriev-cv.netlify.app/"
               target="_blank"
               className={`${styles.contacts__item} ${styles.contacts__link}`}
            >
               <span className={styles.contacts__icon}>
                  <GlobeIcon />
               </span>

               <span>Online CV</span>
            </a>
            <div className={styles.contacts__item}>
               <span className={styles.contacts__icon}>
                  <LocationIcon />
               </span>
               <span>Dnipro, Ukraine</span>
            </div>
         </nav>
      </div>
   );
};

export default Contacts;
