import { Client as WikipediaClient } from "./generated/client";
import spec from "./generated/spec";
import { OpenAPIClientAxios } from "openapi-client-axios";

const wikipediaApi = new OpenAPIClientAxios({
  definition: spec,
});
export const wikipediaAxios = wikipediaApi.initSync<WikipediaClient>();
