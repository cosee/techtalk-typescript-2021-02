import axios from "axios";

export interface SummaryResponse {
  type: string;
  title: string;
  displaytitle: string;
  namespace: {
    id: number;
    text: string;
  };
  wikibase_item: string;
  titles: {
    canonical: string;
    normalized: string;
    display: string;
  };
  pageid: number;
  thumbnail: {
    source: string;
    width: number;
    height: number;
  };
  originalimage: {
    source: string;
    width: number;
    height: number;
  };
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description: string;
  description_source: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  content_urls: {
    desktop: {
      page: string;
      revisions: string;
      edit: string;
      talk: string;
    };
    mobile: {
      page: string;
      revisions: string;
      edit: string;
      talk: string;
    };
  };
  extract: string;
  extract_html: string;
}

export async function fetchArticleSummary(
  name: string
): Promise<SummaryResponse> {
  const nameWithUnderscore = name.replace(/ /g, "_");
  const nameAsUriPart = encodeURIComponent(nameWithUnderscore);
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${nameAsUriPart}`;
  const response = await axios.get<SummaryResponse>(url);
  return response.data;
}
