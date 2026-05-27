import styles from "./Section.module.scss";

type SectionProps = {
   title?: string;
   subtitle?: string;
   children: React.ReactNode;
};

const Section = ({ title, subtitle, children }: SectionProps) => {
   return (
      <section className={styles.section}>
         {title && (
            <h2 className={styles.section__title}>
               {title}
               {subtitle && (
                  <span className={styles.section__subtitle}>{subtitle}</span>
               )}
            </h2>
         )}
         <div className={title ? `${styles.section__content}` : undefined}>
            {children}
         </div>
      </section>
   );
};

export default Section;
