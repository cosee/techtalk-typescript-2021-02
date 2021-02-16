const axios = require("axios");
const fs = require("fs");
const path = require("path");
const cp = require("child_process");
const { writeSpec, writeSpecAsTypeScript } = require("./utils/prepare-spec");
const prettier = require("prettier");

const specFile = path.resolve("src", "api", "openapi", "generated", "openapi.json");
const specTypeScriptFile = path.resolve("src", "api", "openapi", "generated", "spec.ts");
const typesFile = path.resolve("src", "api", "openapi", "generated", "client.d.ts");

async function downloadSpec() {
  const response = await axios.get("https://en.wikipedia.org/api/rest_v1/?spec");
  return response.data;
}

async function buildFromOpenAPI() {
  const spec = await downloadSpec();
  await writeSpec(specFile, spec);
  await writeSpecAsTypeScript(specTypeScriptFile, spec);
  await writeTypes(specFile, typesFile);
}

async function writeTypes(specFile, typesFile) {
  const result = cp.execFileSync("typegen", [specFile]);
  const dtsContents = "/* eslint-disable */\n" + result;
  const formattedDts = prettier.format(dtsContents, { parser: "typescript" });
  fs.writeFileSync(typesFile, formattedDts);
}

buildFromOpenAPI().catch(console.error);
