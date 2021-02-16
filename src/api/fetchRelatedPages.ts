import {wikipediaAxios} from "src/api/openapi/client";
import {Paths} from "src/api/openapi/generated/client";

export interface RelatedPage {
    title: string;
    description?: string;
}

export async function fetchRelatedPages(title: string): Promise<RelatedPage[]> {
    const response = await wikipediaAxios.getRelatedPages({title});
    const data = response.data as Paths.GetRelatedPages.Responses.$200

    const pages = data.pages?.map((page) => ({
        title: page.titles.display,
        description: page.description
    }));
    return pages || []
}
