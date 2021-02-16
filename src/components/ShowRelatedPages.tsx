import { RelatedPage } from "src/api/fetchRelatedPages";
import React from "react";

interface ShowRelatedPagesProps {
  pages: RelatedPage[];
}

export const ShowRelatedPages: React.FC<ShowRelatedPagesProps> = ({ pages }) => {
  return (
    <div>
      {pages.map((page) => {
        return (
          <div>
            <b>{page.title}</b> -
            <span>{page.description}</span>
          </div>
        );
      })}
    </div>
  );
};
