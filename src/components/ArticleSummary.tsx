import React from "react";
import { SummaryResponse } from "src/api/fetchArticleSummary";

type ArticleSummaryProps = {
  article: SummaryResponse;
};

export const ArticleSummary: React.FC<ArticleSummaryProps> = ({ article }) => {
  return (
    <div>
      <h1>{article.displaytitle}</h1>
      <p>{article.extract}</p>
      {/*TODO: add thumbnail*/}
    </div>
  );
};
