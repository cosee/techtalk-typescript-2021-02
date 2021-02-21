
# Cosee TechTalks: Starke Typen - Typescript im Frontend

## Example repository

[TechTalk Page](https://talks.cosee.biz/talk/f3584318-c4ed-4eff-8b91-82f442aa7c92)

![](./images/header.png)

This repository contains all the TypeScript code-examples shown in the techtalk, and more:

# Motivation

The motivation of the talk is to show the benefits of using TypeScript in frontend projects,
especially in React, and to encourage people to use TypeScript in their projects as well.

* src/components/ArticleSummary.tsx
* src/api/fetchArticleSummary.ts

# TypeScript - Basics

* error-examples/simple-error.ts

## Type definition features

* Primitive Types - language-features/001-basic-types.ts
* Interfaces vs Type Aliases - language-features/002-interface-and-type.ts
* Union and intersection Types - language-features/004-union-intersection.ts
* React components - src/components/ArticleSummary.tsx

# Generate Types from OpenAPI/Swagger

* src/api/openapi/generated/client.d.ts
* src/api/openapi/generated/openapi.json
* src/api/openapi/generated/spec.ts
* src/api/openapi/client.ts 
* src/api/fetchRelatedPages.ts

As mentioned in the talk, there are scripts that download and preprocess the OpenAPI spec.
Those are written in NodeJS (pure JavaScript, because setting up TypeScript in Node is not that easy)

* scripts/build-openapi.js
* scripts/utils/prepare-spec.js

# TypeSafe Translation

* src/i18n/setup-i18next.ts
* src/i18n/translations.ts
* src/i18n/useMyTranslation.ts

# Runtime-Checks

* src/runtime-checks/000-baseTypes.ts
* ...
* src/runtime-checks/io-ts-example.ts

# Error analysis

* error-examples/complex-error.ts

# Package numbers (TS vs JS)

In order to analyse the number of TypeScript packages in npm, I 
created an elastic-search index filled with contents from the npm-registry.
The complete setup to do that is here:

https://gitlab.com/nknapp/typescript-pkg-search

# TypeScript setup

This project was created with the command 

```bash
yarn create react-app typescript-react-example --template typescript
```

