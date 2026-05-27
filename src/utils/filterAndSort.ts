import type { PortfolioItem } from "../types/types";

export function filterAndSort(
   arr: PortfolioItem[],
   type: PortfolioItem["type"],
) {
   return arr
      .filter((i) => i.type === type)
      .sort((a, b) => b.upload - a.upload);
}
