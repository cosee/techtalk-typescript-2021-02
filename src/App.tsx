import React, { FormEventHandler, useState } from "react";
import "./App.css";
import {
  SummaryResponse,
  fetchArticleSummary,
} from "src/api/fetchArticleSummary";
import { ArticleSummary } from "src/components/ArticleSummary";
import {fetchRelatedPages, RelatedPage} from "src/api/fetchRelatedPages";
import {ShowRelatedPages} from "src/components/ShowRelatedPages";
import {Header} from "src/components/Header";

const App: React.FC = () => {
  const [summary, setSummary] = useState<SummaryResponse>();
  const [relatedPages, setRelatedPages] = useState<RelatedPage[]>();
  const [name, setName] = useState("Rome");

  const loadBook: FormEventHandler = (event) => {
    fetchArticleSummary(name).then(setSummary);
    fetchRelatedPages(name).then(setRelatedPages)

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="App">
      <Header />
      <form onSubmit={loadBook}>
        <input
          type={"text"}
          placeholder={"Enter name"}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input type={"submit"} value={"Load"} />
      </form>
      {summary && <ArticleSummary article={summary} />}
      <hr/>
      {relatedPages && <ShowRelatedPages pages={relatedPages} />}
    </div>
  );
};

export default App;
