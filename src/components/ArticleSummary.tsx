import React from "react";
import { SummaryResponse } from "src/api/fetchArticleSummary";

export const ArticleSummary: React.FC<{
  article: SummaryResponse;
}> = ({ article }) => {
  return (
    <div>
      <h1>{article.displaytitle}</h1>
      <p>{article.extract}</p>
      {/*TODO: add thumbnail*/}
    </div>
  );
};
