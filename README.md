# Cosee TechTalks: Strongly Typed - TypeScript in fronten development

After 12 years of web-development, I started as fullstack developer at Cosee about two years ago. In my team I was first working in the backend, but also showed interest in the React frontend that we were writing.
Due to some changes in the team structure, I ended up writing frontend code about one year ago and I had to work my way through tons of JavaScript code in order to implement some features. Often, I wished we had
concise type information in the code, just like it is always the case in Java code. But let me illustrate that:

Imagin the following React component:

```js
export const ArticleSummary = ({ article }) => {
  return (
    <div>
      <h1>{article.displaytitle}</h1>
      <p>{article.extract}</p>
      {/*TODO: add thumbnail*/}
    </div>
  );
};
```

Your task is to add a thumbnail to the page, what would you do? Ask youself, where to get the thumbnail from! Or the URL of the thumbnail. Or some kind of id that can be used to retrieve the thumbnail.

But, this code just does not contain this information. Even the function that retrieves the data, does not
contain it. You have to get some real data from the backend. The way to research this is long and painful, depending on the size of your project of course...

You could add type information into js-doc comments and sometimes it is a reflex of mine to write such
comments, but in the modern world, TypeScript is a better alternative. You can add type information in a
machine-readable way, just like in Java. It serves as documentation, but it also stays up-to-date, because
the compiler uses it to validate your code. You cannot "forget to change it"...

And when you use TypeScript, you will notice that the IDE is able to assist you much more than with plain
JavaScript. You get auto-completion, refactorings and safety from spelling errors.

In my talk, I present some helpful uses of TypeScript and in this repository you will have all the examples from the talk and some more, that didn't fit into the time-frame

**A short note:** _We are using IntelliJ Idea or Webstorm at work most of the time. Typescript integration works very well there. I am not sure how we auto_

The typescript ArticleSummary component and the `fetchArticalSummary` function are here:

- [src/components/ArticleSummary.tsx](src/components/ArticleSummary.tsx)
- [src/api/fetchArticleSummary.ts](src/api/fetchArticleSummary.ts)

# TypeScript - Basics

Simple example of a TypeScript file and the compilation result.

- [error-examples/basic-compile-error.ts](error-examples/basic-compile-error.ts)
- [error-examples/basic-compile-error.js](error-examples/basic-compile-error.js) - compiled JavaScript
- [error-examples/basic-compile-error.d.ts](error-examples/basic-compile-error.d.ts) - compiled type definitions
- [error-examples/basic-compile-error.js.map](error-examples/basic-compile-error.js.map) - source map

## Type definition features

- Primitive Types - [language-features/001-basic-types.ts](language-features/001-basic-types.ts)
- Interfaces vs Type Aliases - [language-features/002-interface-and-type.ts](language-features/002-interface-and-type.ts)
- Union and intersection Types - [language-features/004-union-intersection.ts](language-features/004-union-intersection.ts)
- React components - [src/components/ArticleSummary.tsx](src/components/ArticleSummary.tsx)

- [language-features/001-basic-types.ts](language-features/001-basic-types.ts) - Primitive types
- [language-features/002-interface-and-type.ts](language-features/002-interface-and-type.ts) - Interfaces vs Type Aliases
- [language-features/003-keyof.ts](language-features/003-keyof.ts) - `keyof` to derive keys from interfaces and object types
- [language-features/004-union-intersection.ts](language-features/004-union-intersection.ts) - Union types and intersection types
- [language-features/005-deriving-types.ts](language-features/005-deriving-types.ts) - Using one type to derive another: Derive array element type, derive types by adding or removing properties.
- [language-features/005-typeof.ts](language-features/005-typeof.ts) - Deriving types from actual values (objects, arrays). Deriving constant union type from constant arrays and objects.
- [language-features/006-any-unknown-never.ts](language-features/006-any-unknown-never.ts) - Special types `any`, `unknown` and `never`
- [language-features/007-enum.ts](language-features/007-enum.ts) - Enums. I don't like them, but they are there.
- [language-features/008-generic.ts](language-features/008-generic.ts) - Generic types, restrictions, default, infer
- [language-features/009-template-types.ts](language-features/009-template-types.ts) - Template literal types
- [language-features/010-predicates.ts](language-features/010-predicates.ts) - Predicates "value **is** number"

# Generate Types from OpenAPI/Swagger

As mentioned in the talk, there are scripts that download and preprocess the OpenAPI spec.
Those are written in NodeJS (pure JavaScript, because setting up TypeScript in Node is not that easy)

- [scripts/build-openapi.js](scripts/build-openapi.js) - script entrypoint 
- [scripts/utils/prepare-spec.js](scripts/utils/prepare-spec.js) - functions to modify the OpenAPI spec for use with "typegen"

Example files for openapiClientAxios setup

- [src/api/openapi/generated/client.d.ts](src/api/openapi/generated/client.d.ts) - generated sources
- [src/api/openapi/generated/openapi.json](src/api/openapi/generated/openapi.json) - downloaded Wikipedia spec
- [src/api/openapi/generated/spec.ts](src/api/openapi/generated/spec.ts) - downloaded Wikipedia spec in TypeScript
- [src/api/openapi/client.ts](src/api/openapi/client.ts) - openapiClientAxio initialization
- [src/api/fetchRelatedPages.ts](src/api/fetchRelatedPages.ts) - function using the generated client


# Type-safe Translation

Example for type-sate translations setup with react-i18next

- [src/i18n/setup-i18next.ts](src/i18n/setup-i18next.ts) - i18next setup
- [src/i18n/translations.ts](src/i18n/translations.ts) - translation tables and types
- [src/i18n/useMyTranslation.ts](src/i18n/useMyTranslation.ts) - custom hook with a "t"-function that accepts only valid translation keys and thus provides autocompletion.

# Runtime-Checks

TypeScript is different to Java in that it does has any type information at runtime.
No typechecks are performed when using "any" variables or type-casts with "as".

- [java/src/CompareToJava.java](java/src/CompareToJava.java) - Runtime checks in Java
- [language-features/compare-to-java.ts](language-features/compare-to-java.ts) - no runtime checks in TS
- [language-features/compare-to-java-structur.ts](language-features/compare-to-java-structur.ts) - TS does not look at inheritence, but on type compatibility.
- [language-features/type-check-required.ts](language-features/type-check-required.ts) - examples for places where runtime checks are required.

The following files demonstrate how a composable type-checker can be implemented.

* [src/runtime-checks/000-baseTypes.ts](src/runtime-checks/000-baseTypes.ts) - basic type definition for a RuntimeChecker
* [src/runtime-checks/001-primitives.ts](src/runtime-checks/001-primitives.ts) - RuntimeChecker for string and number as example for primitive types
* [src/runtime-checks/001-primitives.test.ts](src/runtime-checks/001-primitives.test.ts) - Show-case for string and number
* [src/runtime-checks/002-array.ts](src/runtime-checks/002-array.ts) - RuntimeChecker for arrays
* [src/runtime-checks/002-array.test.ts](src/runtime-checks/002-array.test.ts) - Show-case for arrays  
* [src/runtime-checks/003-shape.ts](src/runtime-checks/003-shape.ts) - RuntimeChecker for objects with specified properties
* [src/runtime-checks/003-shape.test.ts](src/runtime-checks/003-shape.test.ts) - Show-case for objects
* [src/runtime-checks/004-derivation.ts](src/runtime-checks/004-derivation.ts) - Example on how to derive the checked type from the RuntimeChecker using "infer"

## io-ts

"io-ts" is a package that provides runtime-checks similar to the examples above.
Personally, I haven't used this package in production yet. The documentation is a bit hard to read 
and the function programming paradigms are not intuitive for the typical JS/TS-developer. But it
may suit your needs.

I dropped it after I didn't succeed in writing a custom codec.

- [src/runtime-checks/io-ts-example.ts](src/runtime-checks/io-ts-example.ts) - Example for doing runtime-checks with io-ts

# Error analysis

- [error-examples/complex-error.ts](error-examples/complex-error.ts) - complex error message

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

See package.json for required packages and scripts.
