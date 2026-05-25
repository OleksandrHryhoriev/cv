import { useEffect, useState } from "react";

export type BreakPoints = "desktop" | "tablet" | "mobile";

const useBreakPoint = () => {
   const [breakPoint, setBreakPoint] = useState<BreakPoints>("mobile");

   useEffect(() => {
      const handleResize = (): void => {
         if (window.innerWidth > 991.98) {
            setBreakPoint("desktop");
         } else if (window.innerWidth > 768.5) {
            setBreakPoint("tablet");
         } else {
            setBreakPoint("mobile");
         }
      };
      handleResize(); // For first render

      const handleDebouncedResize = debounce(handleResize, 10);

      window.addEventListener("resize", handleDebouncedResize);
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      function debounce<Params extends any[]>(
         // eslint-disable-next-line  @typescript-eslint/no-explicit-any
         f: (...args: Params) => any,
         delay = 1000,
      ): (...args: Params) => void {
         let timer: ReturnType<typeof setTimeout>;
         return (...args: Params) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
               f(...args);
            }, delay);
         };
      }

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return breakPoint;
};

export default useBreakPoint;
