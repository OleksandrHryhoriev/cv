import styles from "./Header.module.scss";

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.header__bg}></div>
         <div className={styles.header__container}>
            <div className={styles.header__info}>
               <h1 className={styles.header__name}>Oleksandr Hryhoriev</h1>
               <p className={styles.header__prof}>Frontend Developer</p>
            </div>
            <div className={styles.header__foto}>
               <span>
                  <img src="img/my-foto.jpg" alt="foto" />
               </span>
            </div>
         </div>
      </header>
   );
};

export default Header;
