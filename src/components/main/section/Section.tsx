import styles from "./Section.module.scss";

type SectionProps = {
   title?: string;
   children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
   return (
      <section className={styles.section}>
         {title && <h2 className={styles.section__title}>{title}</h2>}
         <div className={title ? `${styles.section__content}` : null}>
            {children}
         </div>
      </section>
   );
};

export default Section;
