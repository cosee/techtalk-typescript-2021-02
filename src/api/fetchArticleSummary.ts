import axios from "axios";

export interface SummaryResponse {
  type: string;
  title: string;
  displaytitle: string;
  titles: {
    canonical: string;
    normalized: string;
    display: string;
  };
  thumbnail: {
    source: string;
    width: number;
    height: number;
  };
  extract: string;
  extract_html: string;
}

export async function fetchArticleSummary(
  name: string
): Promise<SummaryResponse> {
  const nameAsUriPart = encodeURIComponent(name);
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${nameAsUriPart}`;
  const response = await axios.get<SummaryResponse>(url);
  return response.data;
}
