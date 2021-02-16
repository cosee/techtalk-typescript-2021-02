const jsonRefs = require("json-refs");
const fs = require("fs");
const prettier = require("prettier");

module.exports = { writeSpec, writeSpecAsTypeScript };

async function writeSpec(specFile, spec) {
  const resolvedSpec = await resolveRefs(spec);
  addMissingOperationIds(resolvedSpec);

  const jsonData = JSON.stringify(resolvedSpec, removeExtensionProps);
  const prettierSpec = prettier.format(jsonData,{parser: 'json'});
  fs.writeFileSync(specFile, prettierSpec);
}

async function writeSpecAsTypeScript(specFile, spec) {
  const resolvedSpec = await resolveRefs(spec);
  addMissingOperationIds(resolvedSpec);

  const jsonData = JSON.stringify(resolvedSpec, removeExtensionProps);
  const typeScript = `
  import {Document} from 'openapi-client-axios'

  const spec: Document = ${jsonData}
  export default spec;
  `;

  const prettierSpec = prettier.format(typeScript, {parser: 'typescript'});
  fs.writeFileSync(specFile, prettierSpec);
}

async function resolveRefs(obj) {
  // see https://github.com/anttiviljami/openapi-client-axios/issues/47 for details
  const spec = await jsonRefs.resolveRefs(obj, {
    filter: (ref) => !ref.uri.startsWith("#/components/schemas/"),
  });
  return spec.resolved;
}

function addMissingOperationIds(spec) {
  Object.entries(spec.paths).forEach(([openapiPath, operations]) => {
    Object.entries(operations).forEach(([method, operation]) => {
      if (operation.operationId == null) {
        operation.operationId = `${openapiPath}-${method}`.replace(/\W/g, "_");
      }
    });
  });
}

const removeExtensionProps = (key, value) => (key.match(/^x-/) ? undefined : value);
