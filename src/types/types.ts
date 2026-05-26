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
