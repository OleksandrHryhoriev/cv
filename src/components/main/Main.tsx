import useBreakPoint from "../../hooks/useBreakPoints";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import styles from "./Main.module.scss";
import Objective from "./objective/Objective";
import Portfolio from "./portfolio/Portfolio";
import Section from "./section/Section";
import SkillsSection from "./skillsSection/SkillsSection";

const Main = () => {
   const breakPoint = useBreakPoint();

   return (
      <main className={styles.main}>
         <Section>
            <Objective />
         </Section>
         <Section title="Portfolio">
            <Portfolio />
         </Section>
         {breakPoint === "mobile" && (
            <Section title="Skills">
               <SkillsSection />
            </Section>
         )}
         <Section title="work experience">
            <Experience />
         </Section>
         <Section title="education">
            <Education />
         </Section>
      </main>
   );
};

export default Main;
