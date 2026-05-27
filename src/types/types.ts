export type SkillsObj = {
   title: string;
   skills: string[];
};

export type SidebarBlock = SkillsObj[];

export type Occupation = {
   position: string;
   place: string;
   type: string;
   period: {
      start: string;
      end?: string;
   };
};

export type PortfolioItem = {
   type: "commercial" | "react" | "other";
   title: string;
   link: string;
   imageUrl: string;
   upload: number; //upload date, format yyyymmdd
};
