import { Document } from "openapi-client-axios";

const spec: Document = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Wikimedia REST API",
    description:
      "This API provides cacheable and straightforward access to Wikimedia content and data, in machine-readable formats.\n### Global Rules\n- Limit your clients to no more than 200 requests/s to this API.\n  Each API endpoint's documentation may detail more specific usage limits.\n- Set a unique `User-Agent` or `Api-User-Agent` header that\n  allows us to contact you quickly. Email addresses or URLs\n  of contact pages work well.\n\nBy using this API, you agree to Wikimedia's [Terms of Use](https://wikimediafoundation.org/wiki/Terms_of_Use) and [Privacy Policy](https://wikimediafoundation.org/wiki/Privacy_policy). Unless otherwise specified in the endpoint documentation below, content accessed via this API is licensed under the [CC-BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) and [GFDL](https://www.gnu.org/copyleft/fdl.html) licenses, and you irrevocably agree to release modifications or additions made through this API under these licenses. See https://www.mediawiki.org/wiki/REST_API for background and details.\n### Endpoint documentation\nPlease consult each endpoint's documentation for details on:\n- Licensing information for the specific type of content\n  and data served via the endpoint.\n- Stability markers to inform you about development status and\n  change policy, according to\n  [our API version policy](https://www.mediawiki.org/wiki/API_versioning).\n- Endpoint specific usage limits.\n",
    termsOfService: "https://wikimediafoundation.org/wiki/Terms_of_Use",
    contact: {
      name: "the Wikimedia Services team",
      url: "http://mediawiki.org/wiki/REST_API",
    },
    license: {
      name: "Apache2",
      url: "http://www.apache.org/licenses/LICENSE-2.0",
    },
  },
  paths: {
    "/page/": {
      get: {
        tags: ["Page content"],
        summary: "List page-related API entry points.",
        description:
          "Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)\n",
        responses: {
          "200": {
            description: "A list of page-related API end points.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/listing" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page__get",
      },
    },
    "/page/title/{title}": {
      get: {
        tags: ["Page content"],
        summary: "Get revision metadata for a title.",
        description:
          "Returns the revision metadata for the given title. If a revision ID is provided,\nmetadata for that revision is returned, otherwise the latest revision ID is assumed.\n\nStability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "The latest revision metadata for the provided title.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/revision" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid these redirects, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title or no revisions found.",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_title__title__get",
      },
    },
    "/page/title/{title}/{revision}": {
      get: {
        tags: ["Page content"],
        summary: "Get revision metadata for a title.",
        description:
          "Returns the revision metadata for the given title. If a revision ID is provided,\nmetadata for that revision is returned, otherwise the latest revision ID is assumed.\n\nStability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description: "The revision id",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          "200": {
            description: "The latest revision metadata for the provided title.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/revision" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid these redirects, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title or no revisions found.",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_title__title___revision__get",
      },
    },
    "/page/html/{title}": {
      get: {
        tags: ["Page content"],
        summary: "Get latest HTML for a title.",
        description:
          "Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
            required: false,
          },
          {
            name: "stash",
            in: "query",
            description:
              "Whether to temporary stash data-parsoid in order to support transforming the\nmodified content later. If this parameter is set, requests are rate-limited on\na per-client basis (max 5 requests per second per client)\n",
            schema: { type: "boolean" },
          },
          {
            name: "Accept-Language",
            in: "header",
            description:
              "The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.\n",
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description:
              "The latest HTML for the given page title.\n\nSee [the MediaWiki DOM\nspec](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec) for a\ndescription of the MediaWiki-specific semantic markup in this HTML.\nNote that additional metadata is available in the HTML head.\n",
            headers: {
              ETag: {
                description:
                  'ETag header indicating the revision and render timeuuid\nseparated by a slash:\n"701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\nThis ETag can be passed to the HTML save end point (as\n`base_etag` POST parameter), and can also be used to retrieve\nthe exact corresponding data-parsoid metadata, by requesting\nthe specific `revision` and `tid` indicated by the `ETag`.\n',
                schema: { type: "string" },
              },
            },
            content: {
              'text/html; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/HTML/2.1.0"': {
                schema: { type: "string" },
              },
              "application/json": { schema: { type: "object" } },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target, and the body contains the actual page contents as HTML.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_html__title__get",
      },
      post: {
        tags: ["Page content"],
        summary: "Save a new revision using HTML.",
        description:
          "Save a new revision of a page given in [Parsoid\nHTML](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec)\nformat.\n\nFor new pages, or when editting the latest revision of a page,\nthe `base_etag` parameter should be left empty. For editing old revisions,\nit should contain the `ETag` header of the revision the edit is derived from.\n\nThe latest page revision ETag header could be provided in the If-Match header\nto detect edit conflicts. If the new page is created, appropriate user cookies\nmust be provided.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
        ],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["csrf_token", "html"],
                properties: {
                  base_etag: {
                    type: "string",
                    description:
                      "ETag header of the revision the edit is based on. Should be supplied for all existing pages to ensure clean round-tripping.\n",
                  },
                  html: {
                    type: "string",
                    description: "HTML of the page to save.",
                  },
                  csrf_token: {
                    type: "string",
                    description: "CSRF edit token provided by the MW API.",
                  },
                  comment: {
                    type: "string",
                    description: "Comment summarizing the change.",
                  },
                  is_minor: {
                    type: "boolean",
                    description: "Flag indicating a minor change.",
                  },
                  is_bot: {
                    type: "boolean",
                    description: "Flag indicating a bot edit.",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description:
              "The content was not changed, and no new version was created.",
            content: { "application/json": { schema: { type: "object" } } },
          },
          "201": {
            description: "A new revision of the page has been created",
            headers: {
              ETag: {
                description:
                  'ETag header indicating the new revision and timeuuid,\nseparated by a slash:\n"701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
          },
          "400": {
            description:
              "Invalid request - lack of required parameters, bad ETags etc.",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "409": {
            description: "Edit conflict",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_html__title__post",
      },
    },
    "/page/html/{title}/{revision}": {
      get: {
        tags: ["Page content"],
        summary:
          "Get HTML for a specific title/revision & optionally timeuuid.",
        description:
          "Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)\n",
        operationId: "getFormatRevision",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description: "The revision",
            required: true,
            schema: { type: "integer" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
          {
            name: "stash",
            in: "query",
            description:
              "Whether to temporary stash data-parsoid in order to support transforming the\nmodified content later. If this parameter is set, requests are rate-limited on\na per-client basis (max 5 requests per second per client)\n",
            schema: { type: "boolean" },
          },
          {
            name: "Accept-Language",
            in: "header",
            description:
              "The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.\n",
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description:
              "The html for the given page, revision and tid.\n\nSee [the MediaWiki DOM\nspec](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec) for a\ndescription of the MediaWiki-specific semantic markup in this HTML.\nNote that additional metadata is available in the HTML head.\n\nThis HTML can be edited using arbitrary HTML tools. The modified HTML\ncan be converted back to wikitext using the\n[/transform/html/to/wikitext{/title}{/revision}](#!/Transforms/transform_html_to_wikitext__title___revision__post)\nentry point.\n",
            headers: {
              ETag: {
                description:
                  'ETag header indicating the revision and render timeuuid\nseparated by a slash:\n"701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\nThis ETag can be passed to the HTML save end point (as\n`base_etag` POST parameter), and can also be used to retrieve\nthe exact corresponding data-parsoid metadata, by requesting\nthe specific `revision` and `tid` indicated by the `ETag`.\n',
                schema: { type: "string" },
              },
            },
            content: {
              'text/html; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/HTML/2.1.0"': {
                schema: { type: "string" },
              },
              "application/json": { schema: { type: "object" } },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target, and the body contains the actual page revision contents as HTML.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "400": {
            description: "Invalid revision or tid",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "403": {
            description: "Access to the specific revision is restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "404": {
            description: "Unknown page, revision or tid",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
      },
    },
    "/page/data-parsoid/{title}/{revision}/{tid}": {
      get: {
        tags: ["Page content"],
        summary: "Get data-parsoid metadata for a specific title/revision/tid.",
        description:
          "Data-parsoid is metadata used by\n[Parsoid](https://www.mediawiki.org/wiki/Parsoid) to support clean\nround-tripping conversions between HTML and Wikitext. Among other\nthings, it contains the original Wikitext offsets of each HTML\nelement, keyed by element ID. The format is unstable.\n\nThe metadata in data-parsoid is specific to a specific HTML render.\nFor this reason, you need to supply the exact `revision` and `tid` as\nprovided in the `ETag` header of the HTML response.\n\nStability: [Stable](https://www.mediawiki.org/wiki/API_versioning#Stable)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description: "The revision",
            required: true,
            schema: { type: "integer" },
          },
          {
            name: "tid",
            in: "path",
            description: "The revision's time ID",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
        ],
        responses: {
          "200": {
            description: "The latest Parsoid data for the given page",
            headers: {
              ETag: {
                description:
                  'Revision / tid: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"',
                schema: { type: "string" },
              },
            },
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/data-parsoid/2.1.0': {
                schema: { $ref: "#/components/schemas/data-parsoid" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target, and the body contains the actual data-parsoid for the redirect page.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "400": {
            description: "Invalid revision",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "403": {
            description: "Access to the specific revision is restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "404": {
            description: "Unknown page, revision or tid",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_data_parsoid__title___revision___tid__get",
      },
    },
    "/page/lint/{title}": {
      get: {
        tags: ["Page content"],
        summary: "Get the linter errors for a specific title/revision.",
        description:
          "Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description:
              "The lint errors for the given page and optionally revision.\n\nSee [the Linter extension docs](https://www.mediawiki.org/wiki/Extension:Linter) for more\ndetails.\n",
            content: { "application/json": { schema: { type: "object" } } },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target, and the body contains the actual page revision contents as HTML.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "400": {
            description: "Invalid revision or tid",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "403": {
            description: "Access to the specific revision is restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "404": {
            description: "Unknown page, revision or tid",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_lint__title__get",
      },
    },
    "/page/lint/{title}/{revision}": {
      get: {
        tags: ["Page content"],
        summary: "Get the linter errors for a specific title/revision.",
        description:
          "Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description: "The revision",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          "200": {
            description:
              "The lint errors for the given page and optionally revision.\n\nSee [the Linter extension docs](https://www.mediawiki.org/wiki/Extension:Linter) for more\ndetails.\n",
            content: { "application/json": { schema: { type: "object" } } },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target, and the body contains the actual page revision contents as HTML.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "400": {
            description: "Invalid revision or tid",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "403": {
            description: "Access to the specific revision is restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "404": {
            description: "Unknown page, revision or tid",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_lint__title___revision__get",
      },
    },
    "/page/wikitext/{title}": {
      post: {
        tags: ["Page content"],
        summary: "Save a new revision of a page using Wikitext.",
        description:
          "For new pages, or when editting the latest revision of a page,\nthe `base_etag` parameter should be left empty.\nFor editing old revisions, it should contain the ETag header\nof the revision the edit is derived from.\n\nThe latest page revision ETag header should be provided in the If-Match header\nto detect edit conflicts. If the new page is created, appropriate user cookies\nmust be provided.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
        ],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["csrf_token", "wikitext"],
                properties: {
                  base_etag: {
                    type: "string",
                    description:
                      "The ETag header of the revision the edit is based on.",
                  },
                  wikitext: {
                    type: "string",
                    description: "The wikitext source of the page to save",
                  },
                  csrf_token: {
                    type: "string",
                    description: "The CRSF edit token provided by the MW API",
                  },
                  comment: {
                    type: "string",
                    description: "The summary of the change",
                  },
                  is_minor: {
                    type: "boolean",
                    description: "Whether this represents a minor change",
                  },
                  is_bot: {
                    type: "boolean",
                    description: "Whether the change is being made by a bot",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description:
              "The existing revision of the page matches the sent text",
          },
          "201": {
            description: "A new revision of the page has been created",
            content: { "application/json": { schema: { type: "object" } } },
            headers: {
              ETag: {
                description:
                  'ETag header indicating the new revision and timeuuid,\nseparated by a slash:\n"701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
          },
          "400": {
            description:
              "Invalid request - lack of required parameters, bad ETags etc.",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "409": {
            description: "Edit conflict",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_wikitext__title__post",
      },
    },
    "/page/segments/{title}": {
      get: {
        tags: ["Page content"],
        summary: "Fetches a segmented page to be used in machine translation",
        description:
          "Use this end point to fetch the segmented content of a page. Clients should\nuse the returned content in conjunction with the [language transform\nAPI](https://wikimedia.org/api/rest_v1/#!/Transform).\n\nStability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "The segmented page for the given title and revision",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    sourceLanguage: {
                      type: "string",
                      description: "The source language of the page",
                    },
                    title: {
                      type: "string",
                      description: "The title of the segmented page returned",
                    },
                    revision: {
                      type: "integer",
                      description: "The revision ID of the segmented page",
                    },
                    segmentedContent: {
                      type: "string",
                      description:
                        "The segmented HTML body of the contents of the page",
                    },
                  },
                },
              },
            },
          },
          "400": {
            description: "Invalid revision",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "403": {
            description: "Access to the specific revision is restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "404": {
            description: "Unknown page or revision",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_segments__title__get",
      },
    },
    "/page/segments/{title}/{revision}": {
      get: {
        tags: ["Page content"],
        summary: "Fetches a segmented page to be used in machine translation",
        description:
          "Use this end point to fetch the segmented content of a page. Clients should\nuse the returned content in conjunction with the [language transform\nAPI](https://wikimedia.org/api/rest_v1/#!/Transform).\n\nStability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description: "The revision id",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          "200": {
            description: "The segmented page for the given title and revision",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    sourceLanguage: {
                      type: "string",
                      description: "The source language of the page",
                    },
                    title: {
                      type: "string",
                      description: "The title of the segmented page returned",
                    },
                    revision: {
                      type: "integer",
                      description: "The revision ID of the segmented page",
                    },
                    segmentedContent: {
                      type: "string",
                      description:
                        "The segmented HTML body of the contents of the page",
                    },
                  },
                },
              },
            },
          },
          "400": {
            description: "Invalid revision",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "403": {
            description: "Access to the specific revision is restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "404": {
            description: "Unknown page or revision",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_segments__title___revision__get",
      },
    },
    "/page/mobile-sections/{title}": {
      get: {
        tags: ["Mobile"],
        summary: "Get mobile-optimized HTML sections for a title.",
        description:
          "Retrieve the latest HTML for a page title optimised for viewing with\nnative mobile applications. Note that the output is split by sections.\n\nStability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)\n\nPlease follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
          {
            name: "Accept-Language",
            in: "header",
            description:
              "The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.\n",
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description:
              "JSON containing HTML sections and metadata for the given page title.",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/mobile-sections/0.14.1"': {
                schema: { type: "object" },
              },
            },
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "getSections",
      },
    },
    "/page/mobile-sections/{title}/{revision}": {
      get: {
        tags: ["Mobile"],
        summary: "Get mobile-optimized HTML sections for a title.",
        description:
          "Retrieve the latest HTML for a page title optimised for viewing with\nnative mobile applications. Note that the output is split by sections.\n\nStability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)\n\nPlease follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description:
              "Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.\n",
            required: true,
            schema: { type: "integer" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
          {
            name: "Accept-Language",
            in: "header",
            description:
              "The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.\n",
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description:
              "JSON containing HTML sections and metadata for the given page title.",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/mobile-sections/0.14.1"': {
                schema: { type: "object" },
              },
            },
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "getSectionsWithRevision",
      },
    },
    "/page/mobile-sections-lead/{title}": {
      get: {
        tags: ["Mobile"],
        summary:
          "Get mobile-optimized HTML lead section and metadata for a title.",
        description:
          "Retrieve the lead section of the latest HTML for a page title optimised\nfor viewing with native mobile applications.\n\nStability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)\n\nPlease follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
          {
            name: "Accept-Language",
            in: "header",
            description:
              "The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.\n",
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "The HTML for the given page title.",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/mobile-sections/0.14.1"': {
                schema: { type: "object" },
              },
            },
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "getSectionsLead",
      },
    },
    "/page/mobile-sections-lead/{title}/{revision}": {
      get: {
        tags: ["Mobile"],
        summary:
          "Get mobile-optimized HTML lead section and metadata for a title.",
        description:
          "Retrieve the lead section of the latest HTML for a page title optimised\nfor viewing with native mobile applications.\n\nStability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)\n\nPlease follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description:
              "Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.\n",
            required: true,
            schema: { type: "integer" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
          {
            name: "Accept-Language",
            in: "header",
            description:
              "The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.\n",
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "The HTML for the given page title.",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/mobile-sections/0.14.1"': {
                schema: { type: "object" },
              },
            },
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "getSectionsLeadWithRevision",
      },
    },
    "/page/mobile-sections-remaining/{title}": {
      get: {
        tags: ["Mobile"],
        summary: "Get non-lead mobile-optimized HTML sections for a title.",
        description:
          "Retrieve the remainder of the latest HTML (without the lead section) for\na page title optimised for viewing with native mobile applications,\nprovided as a JSON object containing the sections.\n\nStability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)\n\nPlease follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
          {
            name: "Accept-Language",
            in: "header",
            description:
              "The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.\n",
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description:
              "JSON wrapping HTML sections for the given page title.",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/mobile-sections/0.14.1"': {
                schema: { type: "object" },
              },
            },
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "getSectionsRemaining",
      },
    },
    "/page/mobile-sections-remaining/{title}/{revision}": {
      get: {
        tags: ["Mobile"],
        summary: "Get non-lead mobile-optimized HTML sections for a title.",
        description:
          "Retrieve the remainder of the latest HTML (without the lead section) for\na page title optimised for viewing with native mobile applications,\nprovided as a JSON object containing the sections.\n\nStability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)\n\nPlease follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description:
              "Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.\n",
            required: true,
            schema: { type: "integer" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
          {
            name: "Accept-Language",
            in: "header",
            description:
              "The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.\n",
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description:
              "JSON wrapping HTML sections for the given page title.",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/mobile-sections/0.14.1"': {
                schema: { type: "object" },
              },
            },
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "getSectionsRemainingWithRevision",
      },
    },
    "/page/summary/{title}": {
      get: {
        tags: ["Page content"],
        summary: "Get basic metadata and simplified article introduction.",
        description:
          "The summary response includes an extract of the first paragraph of the page in plain text\nand HTML as well as the type of page. This is useful for page previews (fka. Hovercards,\naka. Popups) on the web and link previews in the apps.\n\nStability: [stable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Stable)\n\nPlease follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
          {
            name: "Accept-Language",
            in: "header",
            description:
              "The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.\n",
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "The summary for the given page",
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Summary/1.4.2"': {
                schema: { $ref: "#/components/schemas/summary" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_summary__title__get",
      },
    },
    "/page/media-list/{title}": {
      get: {
        tags: ["Page content"],
        summary: "Get list of media files used on a page.",
        description:
          "Gets the list of media items (images, audio, and video) in the order in which they appear on a\ngiven wiki page.\n\nStability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)\n\nPlease follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
        ],
        responses: {
          "200": {
            description:
              "JSON containing metadata of media items appearing on the given page.",
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Media/1.3.1"': {
                schema: { $ref: "#/components/schemas/media_list" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "getContent-media-list",
      },
    },
    "/page/media-list/{title}/{revision}": {
      get: {
        tags: ["Page content"],
        summary: "Get list of media files used on a page.",
        description:
          "Gets the list of media items (images, audio, and video) in the order in which they appear on a\ngiven wiki page.\n\nStability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)\n\nPlease follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description:
              "Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.\n",
            required: true,
            schema: { type: "integer" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
        ],
        responses: {
          "200": {
            description:
              "JSON containing metadata of media items appearing on the given page.",
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Media/1.3.1"': {
                schema: { $ref: "#/components/schemas/media_list" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "getContentWithRevision-media-list",
      },
    },
    "/page/mobile-html/{title}": {
      get: {
        tags: ["Page content"],
        summary: "Get page content HTML optimized for mobile consumption.",
        description:
          "Gets the content HTML optimized for mobile consumption for the given page. This content\nis derived from Parsoid HTML (see `/page/html/{title}` endpoint).\nThe difference to Parsoid HTML is roughly:\n* Some elements and attributes not needed for the reading case are removed.\n* LeadIntroductionTransform: The introductory paragraph is moved before an infobox.\n* RedLinks: Red links are flattened (=turned into span elements).\n* WidenImage: images that should be displayed in gallery are widened.\n* Section headings are slightly changed by wrapping the headings inside a div and adding\n  a span element inside the new div for the edit buttons.\n* Additional classes are added to img elements to fix issues with non-white backgrounds.\n  See Theme support below for instructions on how to enable that.\n* Pagelib CSS files needed to display the content are referenced.\n* LazyLoadTransform: server-side portion/prep for lazy loading of images.\n* CollapseTable: server-side portion/prep for collapsing tables.\n\nWhat's not included? What parts of the PageLibrary does a client still have to do?\n* Theme support: Themes can be turned on by adding a theme class to the root <html> tag.\n  Possible class names are:\n  * `pagelib_theme_default`\n  * `pagelib_theme_dark`\n  * `pagelib_theme_black`\n  * `pagelib_theme_sepia`\n\n  The pagelib JS has functionality to do that: ThemeTransform.setTheme(document, theme).\n* Dim images: DimImagesTransform.dim(window, enable)\n* PlatformTransform.classify(window) to trigger Android and iOS app specific CSS rules\n* LazyLoadTransformer: client side companion of LazyLoadTransform (note the extra *er*\nhere)\n* FooterTransformer: seems to be more UI than content, requires I18N, too\n\nStability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
        ],
        responses: {
          "200": {
            description: "mobile-optimized HTML of the given page.",
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
            content: {
              'text/html; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Mobile-HTML/1.2.2"': {
                schema: { type: "string" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "getContent-mobile-html",
      },
    },
    "/page/mobile-html/{title}/{revision}": {
      get: {
        tags: ["Page content"],
        summary: "Get page content HTML optimized for mobile consumption.",
        description:
          "Gets the content HTML optimized for mobile consumption for the given page. This content\nis derived from Parsoid HTML (see `/page/html/{title}` endpoint).\nThe difference to Parsoid HTML is roughly:\n* Some elements and attributes not needed for the reading case are removed.\n* LeadIntroductionTransform: The introductory paragraph is moved before an infobox.\n* RedLinks: Red links are flattened (=turned into span elements).\n* WidenImage: images that should be displayed in gallery are widened.\n* Section headings are slightly changed by wrapping the headings inside a div and adding\n  a span element inside the new div for the edit buttons.\n* Additional classes are added to img elements to fix issues with non-white backgrounds.\n  See Theme support below for instructions on how to enable that.\n* Pagelib CSS files needed to display the content are referenced.\n* LazyLoadTransform: server-side portion/prep for lazy loading of images.\n* CollapseTable: server-side portion/prep for collapsing tables.\n\nWhat's not included? What parts of the PageLibrary does a client still have to do?\n* Theme support: Themes can be turned on by adding a theme class to the root <html> tag.\n  Possible class names are:\n  * `pagelib_theme_default`\n  * `pagelib_theme_dark`\n  * `pagelib_theme_black`\n  * `pagelib_theme_sepia`\n\n  The pagelib JS has functionality to do that: ThemeTransform.setTheme(document, theme).\n* Dim images: DimImagesTransform.dim(window, enable)\n* PlatformTransform.classify(window) to trigger Android and iOS app specific CSS rules\n* LazyLoadTransformer: client side companion of LazyLoadTransform (note the extra *er*\nhere)\n* FooterTransformer: seems to be more UI than content, requires I18N, too\n\nStability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description:
              "Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.\n",
            required: true,
            schema: { type: "integer" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
        ],
        responses: {
          "200": {
            description: "mobile-optimized HTML of the given page.",
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
            content: {
              'text/html; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Mobile-HTML/1.2.2"': {
                schema: { type: "string" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "getContentWithRevision-mobile-html",
      },
    },
    "/page/mobile-html-offline-resources/{title}": {
      get: {
        tags: ["Page content", "offline"],
        summary:
          "Get styles and scripts for offline consumption of mobile-html-formatted pages",
        description:
          "Provides links to scripts and styles needed for viewing mobile-html-formatted pages offline.\n\nStability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description:
              "links to scripts and styles to accompany the mobile-html of the page for offline consumption",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Mobile-HTML-Offline-Resources/1.2.1"': {
                schema: { type: "string" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_mobile_html_offline_resources__title__get",
      },
    },
    "/page/mobile-html-offline-resources/{title}/{revision}": {
      get: {
        tags: ["Page content", "offline"],
        summary:
          "Get styles and scripts for offline consumption of mobile-html-formatted pages",
        description:
          "Provides links to scripts and styles needed for viewing mobile-html-formatted pages offline.\n\nStability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description:
              "Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.\n",
            required: true,
            schema: { type: "integer" },
          },
        ],
        responses: {
          "200": {
            description:
              "links to scripts and styles to accompany the mobile-html of the page for offline consumption",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Mobile-HTML-Offline-Resources/1.2.1"': {
                schema: { type: "string" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId:
          "_page_mobile_html_offline_resources__title___revision__get",
      },
    },
    "/page/related/{title}": {
      get: {
        tags: ["Page content"],
        summary: "Get pages related to the given title",
        description:
          "Returns summaries for 20 pages related to the given page. Summaries include\npage title, namespace and id along with short text description of the page\nand a thumbnail.\n\nStability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "The related pages",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/related" },
              },
            },
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "getRelatedPages",
      },
    },
    "/page/random/{format}": {
      get: {
        tags: ["Page content"],
        summary: "Get content for a random page",
        description:
          "Redirects the client to the URI for the desired format for a random page title.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "format",
            in: "path",
            description: "The desired return format",
            required: true,
            schema: {
              type: "string",
              enum: [
                "title",
                "html",
                "summary",
                "related",
                "mobile-sections",
                "mobile-sections-lead",
              ],
            },
          },
        ],
        responses: {
          "303": {
            description:
              "The redirect to the desired format URI for a random page",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Random/0.7.0"': {
                schema: { type: "object" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_random__format__get",
      },
    },
    "/page/talk/{title}": {
      get: {
        tags: ["Talk pages"],
        summary: "Get structured talk page contents",
        description:
          "Gets structured talk page contents for the provided title.\n\nStability: [experimental](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Experimental)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
        ],
        responses: {
          "200": {
            description: "structured talk page JSON.",
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Talk/0.1.0"': {
                schema: { type: "string" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_talk__title__get",
      },
    },
    "/page/talk/{title}/{revision}": {
      get: {
        tags: ["Talk pages"],
        summary: "Get structured talk page contents",
        description:
          "Gets structured talk page contents for the provided title.\n\nStability: [experimental](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Experimental)\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description:
              "Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.\n",
            required: true,
            schema: { type: "integer" },
          },
          {
            name: "redirect",
            in: "query",
            description:
              "Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.\nTo get a 200 response instead, supply `false` to the `redirect` parameter.\n",
            schema: { type: "boolean" },
          },
        ],
        responses: {
          "200": {
            description: "structured talk page JSON.",
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Talk/0.1.0"': {
                schema: { type: "string" },
              },
            },
          },
          "301": {
            description:
              "A permanent redirect is returned if the supplied article title was not in the normalized form.\nTo avoid this kind of redirect, you can use the [mediawiki-title](https://github.com/wikimedia/mediawiki-title) library to perform\ntitle normalization client-side.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "302": {
            description:
              "The page is a [redirect page](https://www.mediawiki.org/wiki/Help:Redirects).\nThe `location` header points to the redirect target.\nIf you would like to avoid automatically following redirect pages, set the `redirect=false` query parameter.\n\nBeware that redirected pre-flighted cross-origin requests (such as those sending custom request headers like `Api-User-Agent`)\nwill fail in most current browsers [due to a spec bug](https://github.com/whatwg/fetch/issues/204).\n",
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_talk__title___revision__get",
      },
    },
    "/page/pdf/{title}": {
      get: {
        tags: ["Page content"],
        summary: "Get a page as PDF",
        description:
          'Renders the page content as PDF. Format and type are optional parameters and\nthe default values are "a4" for format and "desktop" for type.\n\nStability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n',
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "The PDF render of an article",
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
            content: { "application/pdf": { schema: { type: "string" } } },
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "503": {
            description:
              "A response is unavailable because service queue is busy or full",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_pdf__title__get",
      },
    },
    "/page/pdf/{title}/{format}": {
      get: {
        tags: ["Page content"],
        summary: "Get a page as PDF",
        description:
          'Renders the page content as PDF. Format and type are optional parameters and\nthe default values are "a4" for format and "desktop" for type.\n\nStability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n',
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            in: "path",
            name: "format",
            schema: { type: "string", enum: ["a4", "letter", "legal"] },
            required: true,
            description: "PDF format",
          },
        ],
        responses: {
          "200": {
            description: "The PDF render of an article",
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
            content: { "application/pdf": { schema: { type: "string" } } },
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "503": {
            description:
              "A response is unavailable because service queue is busy or full",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_pdf__title___format__get",
      },
    },
    "/page/pdf/{title}/{format}/{type}": {
      get: {
        tags: ["Page content"],
        summary: "Get a page as PDF",
        description:
          'Renders the page content as PDF. Format and type are optional parameters and\nthe default values are "a4" for format and "desktop" for type.\n\nStability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n',
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            in: "path",
            name: "format",
            schema: { type: "string", enum: ["a4", "letter", "legal"] },
            required: true,
            description: "PDF format",
          },
          {
            in: "path",
            name: "type",
            schema: {
              type: "string",
              enum: ["mobile", "desktop"],
              default: "desktop",
            },
            description:
              "PDF type - `mobile` (optimized for reading on mobile devices) or `desktop` (regular PDF). `desktop` is the default render mode and it will used if param `type` is not passed",
          },
        ],
        responses: {
          "200": {
            description: "The PDF render of an article",
            headers: {
              ETag: {
                description:
                  'Syntax: "{revision}/{tid}". Example: "701384379/154d7bca-c264-11e5-8c2f-1b51b33b59fc"\n',
                schema: { type: "string" },
              },
            },
            content: { "application/pdf": { schema: { type: "string" } } },
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "503": {
            description:
              "A response is unavailable because service queue is busy or full",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_page_pdf__title___format___type__get",
      },
    },
    "/feed/featured/{yyyy}/{mm}/{dd}": {
      get: {
        tags: ["Feed"],
        summary: "Aggregated featured content",
        description:
          "Provides the aggregated feed content for the given date. The endpoint returns\nthe featured article of the day, most read articles for the previous day, news\ncontent and the featured image and video of the day.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "yyyy",
            in: "path",
            description: "Year the aggregated content is requested for",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "mm",
            in: "path",
            description:
              "Month the aggregated content is requested for, 0-padded",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "dd",
            in: "path",
            description:
              "Day of the month the aggregated content is requested for, 0-padded",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "JSON containing all of the featured content",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/feed" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "aggregatedFeed",
      },
    },
    "/feed/announcements": {
      get: {
        tags: ["Feed"],
        summary: "Current announcements to display",
        description:
          "Gets announcements for display in the official Wikipedia iOS and Android apps.\n\nStability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n",
        responses: {
          "200": {
            description: "Announcements for the given Wiki",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Announcements/0.2.0"': {
                schema: { $ref: "#/components/schemas/announcementsResponse" },
              },
            },
          },
        },
        operationId: "_feed_announcements_get",
      },
    },
    "/feed/onthisday/{type}/{mm}/{dd}": {
      get: {
        tags: ["Feed"],
        summary: "Events on this day",
        description:
          "Provides events that historically happened on the provided day and month.\nSupported types of events are:\n - All: all of the following\n - Selected: a list of a few selected anniversaries which occur on the provided day and month; often the entries are curated for the current year\n - Births: a list of birthdays which happened on the provided day and month\n - Deaths: a list of deaths which happened on the provided day and month\n - Holidays: a list of fixed holidays celebrated on the provided day and month\n - Events: a list of significant events which happened on the provided day and month and which are not covered by the other types yet\n\nStability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n",
        parameters: [
          {
            name: "type",
            in: "path",
            description: "Type of events",
            required: true,
            schema: {
              type: "string",
              enum: [
                "all",
                "selected",
                "births",
                "deaths",
                "events",
                "holidays",
              ],
            },
          },
          {
            name: "mm",
            in: "path",
            description: "Month events are requested for, 0-padded",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "dd",
            in: "path",
            description: "Day of the month events are requested for, 0-padded",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "JSON containing all of the featured content",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/onthisday/0.3.3"': {
                schema: { $ref: "#/components/schemas/onthisdayResponse" },
              },
            },
          },
          "404": {
            description: "No data found for the requested date",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "501": {
            description: "Unsupported language",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "onThisDay",
      },
    },
    "/transform/html/to/wikitext": {
      post: {
        tags: ["Transforms"],
        summary: "Transform HTML to Wikitext",
        description:
          "Transform [Parsoid HTML](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec)\nto Wikitext.\n\nWhen converting pre-existing (possibly modified) content, you should\npass in the `title`, `revision`, and `If-Match` header. This lets\n[Parsoid](https://www.mediawiki.org/wiki/Parsoid) preserve small\nsyntactic variations in wikitext, which ensures that diffs are\nreadable.\n\n- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)\n- Rate limit: 25 req/s\n",
        parameters: [
          {
            name: "if-match",
            in: "header",
            description:
              "The `ETag` header of the original render indicating it's revision and timeuuid.\nRequired if both `title` and `revision` parameters are present.\n",
            schema: { type: "string" },
          },
        ],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["html"],
                properties: {
                  html: {
                    type: "string",
                    description: "The HTML to transform",
                  },
                  scrub_wikitext: {
                    type: "boolean",
                    description: "Normalise the DOM to yield cleaner wikitext?",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "MediaWiki Wikitext.",
            content: {
              'text/plain; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/wikitext/1.0.0"': {
                schema: { type: "string" },
              },
            },
          },
          "403": {
            description: "Access to the specific revision is restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "404": {
            description: "Unknown page title or revision",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "409": {
            description: "Revision was restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "410": {
            description: "Page was deleted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_transform_html_to_wikitext_post",
      },
    },
    "/transform/html/to/wikitext/{title}": {
      post: {
        tags: ["Transforms"],
        summary: "Transform HTML to Wikitext",
        description:
          "Transform [Parsoid HTML](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec)\nto Wikitext.\n\nWhen converting pre-existing (possibly modified) content, you should\npass in the `title`, `revision`, and `If-Match` header. This lets\n[Parsoid](https://www.mediawiki.org/wiki/Parsoid) preserve small\nsyntactic variations in wikitext, which ensures that diffs are\nreadable.\n\n- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)\n- Rate limit: 25 req/s\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "if-match",
            in: "header",
            description:
              "The `ETag` header of the original render indicating it's revision and timeuuid.\nRequired if both `title` and `revision` parameters are present.\n",
            schema: { type: "string" },
          },
        ],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["html"],
                properties: {
                  html: {
                    type: "string",
                    description: "The HTML to transform",
                  },
                  scrub_wikitext: {
                    type: "boolean",
                    description: "Normalise the DOM to yield cleaner wikitext?",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "MediaWiki Wikitext.",
            content: {
              'text/plain; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/wikitext/1.0.0"': {
                schema: { type: "string" },
              },
            },
          },
          "403": {
            description: "Access to the specific revision is restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "404": {
            description: "Unknown page title or revision",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "409": {
            description: "Revision was restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "410": {
            description: "Page was deleted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_transform_html_to_wikitext__title__post",
      },
    },
    "/transform/html/to/wikitext/{title}/{revision}": {
      post: {
        tags: ["Transforms"],
        summary: "Transform HTML to Wikitext",
        description:
          "Transform [Parsoid HTML](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec)\nto Wikitext.\n\nWhen converting pre-existing (possibly modified) content, you should\npass in the `title`, `revision`, and `If-Match` header. This lets\n[Parsoid](https://www.mediawiki.org/wiki/Parsoid) preserve small\nsyntactic variations in wikitext, which ensures that diffs are\nreadable.\n\n- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)\n- Rate limit: 25 req/s\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description: "The page revision",
            required: true,
            schema: { type: "integer" },
          },
          {
            name: "if-match",
            in: "header",
            description:
              "The `ETag` header of the original render indicating it's revision and timeuuid.\nRequired if both `title` and `revision` parameters are present.\n",
            schema: { type: "string" },
          },
        ],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["html"],
                properties: {
                  html: {
                    type: "string",
                    description: "The HTML to transform",
                  },
                  scrub_wikitext: {
                    type: "boolean",
                    description: "Normalise the DOM to yield cleaner wikitext?",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "MediaWiki Wikitext.",
            content: {
              'text/plain; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/wikitext/1.0.0"': {
                schema: { type: "string" },
              },
            },
          },
          "403": {
            description: "Access to the specific revision is restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "404": {
            description: "Unknown page title or revision",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "409": {
            description: "Revision was restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "410": {
            description: "Page was deleted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_transform_html_to_wikitext__title___revision__post",
      },
    },
    "/transform/wikitext/to/html": {
      post: {
        tags: ["Transforms"],
        summary: "Transform Wikitext to HTML",
        description:
          "Transform wikitext to HTML. Note that if you set `stash: true`, you\nalso need to supply the title.\n\n- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)\n- Rate limit: 25 req/s (5 req/s when `stash: true`)\n",
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["wikitext"],
                properties: {
                  wikitext: {
                    type: "string",
                    description: "The Wikitext to transform to HTML",
                  },
                  body_only: {
                    type: "boolean",
                    description: "Return only `body.innerHTML`",
                  },
                  stash: {
                    type: "boolean",
                    description:
                      "Whether to temporarily stash the result of the transformation",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description:
              "See wikipage https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec",
            content: {
              'text/html; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/HTML/2.1.0"': {
                schema: { type: "string" },
              },
            },
          },
          "403": {
            description: "access to the specific revision is restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "404": {
            description: "Unknown page title or revision",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "409": {
            description: "Revision was restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "410": {
            description: "Page was deleted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_transform_wikitext_to_html_post",
      },
    },
    "/transform/wikitext/to/html/{title}": {
      post: {
        tags: ["Transforms"],
        summary: "Transform Wikitext to HTML",
        description:
          "Transform wikitext to HTML. Note that if you set `stash: true`, you\nalso need to supply the title.\n\n- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)\n- Rate limit: 25 req/s (5 req/s when `stash: true`)\n",
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["wikitext"],
                properties: {
                  wikitext: {
                    type: "string",
                    description: "The Wikitext to transform to HTML",
                  },
                  body_only: {
                    type: "boolean",
                    description: "Return only `body.innerHTML`",
                  },
                  stash: {
                    type: "boolean",
                    description:
                      "Whether to temporarily stash the result of the transformation",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description:
              "See wikipage https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec",
            content: {
              'text/html; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/HTML/2.1.0"': {
                schema: { type: "string" },
              },
            },
          },
          "403": {
            description: "access to the specific revision is restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "404": {
            description: "Unknown page title or revision",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "409": {
            description: "Revision was restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "410": {
            description: "Page was deleted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
        ],
        operationId: "_transform_wikitext_to_html__title__post",
      },
    },
    "/transform/wikitext/to/html/{title}/{revision}": {
      post: {
        tags: ["Transforms"],
        summary: "Transform Wikitext to HTML",
        description:
          "Transform wikitext to HTML. Note that if you set `stash: true`, you\nalso need to supply the title.\n\n- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)\n- Rate limit: 25 req/s (5 req/s when `stash: true`)\n",
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["wikitext"],
                properties: {
                  wikitext: {
                    type: "string",
                    description: "The Wikitext to transform to HTML",
                  },
                  body_only: {
                    type: "boolean",
                    description: "Return only `body.innerHTML`",
                  },
                  stash: {
                    type: "boolean",
                    description:
                      "Whether to temporarily stash the result of the transformation",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description:
              "See wikipage https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec",
            content: {
              'text/html; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/HTML/2.1.0"': {
                schema: { type: "string" },
              },
            },
          },
          "403": {
            description: "access to the specific revision is restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "404": {
            description: "Unknown page title or revision",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "409": {
            description: "Revision was restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "410": {
            description: "Page was deleted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description: "The page revision",
            required: true,
            schema: { type: "integer" },
          },
        ],
        operationId: "_transform_wikitext_to_html__title___revision__post",
      },
    },
    "/transform/wikitext/to/lint": {
      post: {
        tags: ["Transforms"],
        summary: "Check Wikitext for lint errors",
        description:
          "Parse the supplied wikitext and check it for lint errors.\n\n- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n- Rate limit: 25 req/s\n",
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["wikitext"],
                properties: {
                  wikitext: {
                    type: "string",
                    description: "The Wikitext to check",
                  },
                },
              },
            },
            "application/json": {
              schema: {
                required: ["wikitext"],
                properties: {
                  wikitext: {
                    type: "string",
                    description: "The Wikitext to check",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "Linter errors, if any, as a JSON blob",
            content: { "application/json": { schema: { type: "object" } } },
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "409": {
            description: "Latest revision was restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "410": {
            description: "Page was deleted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_transform_wikitext_to_lint_post",
      },
    },
    "/transform/wikitext/to/lint/{title}": {
      post: {
        tags: ["Transforms"],
        summary: "Check Wikitext for lint errors",
        description:
          "Parse the supplied wikitext and check it for lint errors.\n\n- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n- Rate limit: 25 req/s\n",
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["wikitext"],
                properties: {
                  wikitext: {
                    type: "string",
                    description: "The Wikitext to check",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "Linter errors, if any, as a JSON blob",
            content: { "application/json": { schema: { type: "object" } } },
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "409": {
            description: "Latest revision was restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "410": {
            description: "Page was deleted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
        ],
        operationId: "_transform_wikitext_to_lint__title__post",
      },
    },
    "/transform/wikitext/to/lint/{title}/{revision}": {
      post: {
        tags: ["Transforms"],
        summary: "Check Wikitext for lint errors",
        description:
          "Parse the supplied wikitext and check it for lint errors.\n\n- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n- Rate limit: 25 req/s\n",
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["wikitext"],
                properties: {
                  wikitext: {
                    type: "string",
                    description: "The Wikitext to check",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "Linter errors, if any, as a JSON blob",
            content: { "application/json": { schema: { type: "object" } } },
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "409": {
            description: "Latest revision was restricted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          "410": {
            description: "Page was deleted",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "revision",
            in: "path",
            description: "The page revision",
            required: true,
            schema: { type: "integer" },
          },
        ],
        operationId: "_transform_wikitext_to_lint__title___revision__post",
      },
    },
    "/transform/wikitext/to/mobile-html/{title}": {
      post: {
        tags: ["Transforms"],
        summary: "Transform Wikitext to Mobile HTML",
        description:
          "Transform wikitext to Mobile HTML.\n\n- Stability: [stable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Stable)\n- Rate limit: 25 req/s (5 req/s when `stash: true`)\n\nPlease follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.\n",
        parameters: [
          {
            name: "title",
            in: "path",
            description:
              "Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "Accept-Language",
            in: "header",
            description:
              "The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.\n",
            schema: { type: "string" },
          },
          {
            name: "output-mode",
            in: "header",
            description:
              "Output mode for mobile-html. Default is `editPreview`.",
            required: false,
            schema: {
              type: "string",
              enum: [
                "editPreview",
                "contentAndReferences",
                "content",
                "references",
              ],
            },
          },
        ],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["wikitext"],
                properties: {
                  wikitext: {
                    type: "string",
                    description: "The Wikitext to transform to HTML",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description:
              "See wikipage https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec",
            content: {
              'text/html; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Mobile-HTML/1.0.0"': {
                schema: { type: "string" },
              },
            },
          },
          "404": {
            description: "Unknown page title",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "transformWikitextToMobileHtml",
      },
    },
    "/transform/html/from/{from}": {
      post: {
        tags: ["Transforms"],
        summary: "Machine-translate content",
        description:
          "Fetches the machine translation for the posted content from the source\nto the language of this wiki.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "from",
            in: "path",
            description: "The source language code",
            required: true,
            schema: { type: "string" },
          },
        ],
        requestBody: {
          content: {
            "application/x-www-form-urlencoded": {
              schema: {
                required: ["html"],
                properties: {
                  html: {
                    type: "string",
                    description: "The HTML content to translate",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "The translated content",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/cx_mt" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "doMT",
      },
    },
    "/transform/html/from/{from}/{provider}": {
      post: {
        tags: ["Transforms"],
        summary: "Machine-translate content",
        description:
          "Fetches the machine translation for the posted content from the source\nto the language of this wiki.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "from",
            in: "path",
            description: "The source language code",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "provider",
            in: "path",
            description: "The machine translation provider id",
            required: true,
            schema: { type: "string", enum: ["Apertium", "Yandex", "Youdao"] },
          },
        ],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["html"],
                properties: {
                  html: {
                    type: "string",
                    description: "The HTML content to translate",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "The translated content",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/cx_mt" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "doMTProvider",
      },
    },
    "/transform/word/from/{from}/{word}": {
      get: {
        tags: ["Transforms"],
        summary: "Fetch the dictionary meaning of a word",
        description:
          "Fetches the dictionary meaning of a word from a language and displays\nit in the target language.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "from",
            in: "path",
            description: "The source language code",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "word",
            in: "path",
            description: "The word to lookup",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "the dictionary translation for the given word",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/cx_dict" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "doDict",
      },
    },
    "/transform/word/from/{from}/{word}/{provider}": {
      get: {
        tags: ["Transforms"],
        summary: "Fetch the dictionary meaning of a word",
        description:
          "Fetches the dictionary meaning of a word from a language and displays\nit in the target language.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "from",
            in: "path",
            description: "The source language code",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "word",
            in: "path",
            description: "The word to lookup",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "provider",
            in: "path",
            description: "The dictionary provider id",
            required: true,
            schema: { type: "string", enum: ["JsonDict", "Dictd"] },
          },
        ],
        responses: {
          "200": {
            description: "the dictionary translation for the given word",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/cx_dict" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "doDictProvider",
      },
    },
    "/media/math/check/{type}": {
      post: {
        tags: ["Math"],
        summary: "Check and normalize a TeX formula.",
        description:
          "Checks the supplied TeX formula for correctness and returns the\nnormalised formula representation as well as information about\nidentifiers. Available types are tex and inline-tex. The response\ncontains the `x-resource-location` header which can be used to retrieve\nthe render of the checked formula in one of the supported rendering\nformats. Just append the value of the header to `/media/math/{format}/`\nand perform a GET request against that URL.\n\nStability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).\n",
        parameters: [
          {
            name: "type",
            in: "path",
            description:
              "The input type of the given formula; can be tex or inline-tex",
            required: true,
            schema: { type: "string", enum: ["tex", "inline-tex", "chem"] },
          },
        ],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                required: ["q"],
                properties: {
                  q: { type: "string", description: "The formula to check" },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "Information about the checked formula",
            content: { "application/json": { schema: { type: "object" } } },
          },
          "400": {
            description: "Invalid type",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_media_math_check__type__post",
      },
    },
    "/media/math/formula/{hash}": {
      get: {
        tags: ["Math"],
        summary: "Get a previously-stored formula",
        description:
          "Returns the previously-stored formula via `/media/math/check/{type}` for\nthe given hash.\n\nStability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).\n",
        parameters: [
          {
            name: "hash",
            in: "path",
            description: "The hash string of the previous POST data",
            required: true,
            schema: { minLength: 1, type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "Information about the checked formula",
            content: { "application/json": { schema: { type: "object" } } },
          },
          "404": {
            description: "Data for the given hash cannot be found",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_media_math_formula__hash__get",
      },
    },
    "/media/math/render/{format}/{hash}": {
      get: {
        tags: ["Math"],
        summary: "Get rendered formula in the given format.",
        description:
          "Given a request hash, renders a TeX formula into its mathematic\nrepresentation in the given format. When a request is issued to the\n`/media/math/check/{format}` POST endpoint, the response contains the\n`x-resource-location` header denoting the hash ID of the POST data. Once\nobtained, this endpoint has to be used to obtain the actual render.\n\nStability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).\n",
        parameters: [
          {
            name: "format",
            in: "path",
            description: "The output format; can be svg or mml",
            required: true,
            schema: { type: "string", enum: ["svg", "mml", "png"] },
          },
          {
            name: "hash",
            in: "path",
            description: "The hash string of the previous POST data",
            required: true,
            schema: { minLength: 1, type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "The rendered formula",
            content: {
              "image/svg+xml": { schema: { type: "string" } },
              "application/mathml+xml": { schema: { type: "string" } },
              "image/png": { schema: { type: "string", format: "binary" } },
            },
          },
          "404": {
            description: "Unknown format or hash ID",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_media_math_render__format___hash__get",
      },
    },
    "/data/citation/{format}/{query}": {
      get: {
        tags: ["Citation"],
        summary: "Get citation data given an article identifier.",
        description:
          "Generates citation data given a URL, DOI, PMID, ISBN, or PMCID.\n\nSee more at [Citoid service documentation](https://www.mediawiki.org/wiki/Citoid)\n\nThe citation data can be requested in one of the following formats:\n  - `mediawiki`: format designed for MediaWiki to be used with `templateData`.\n    Uses [Zotero field names](https://aurimasv.github.io/z2csl/typeMap.xml).\n  - `mediawiki-basefields`: `mediawiki` format with Zotero `basefield` field names.\n  - `zotero`: format used by [Zotero](https://www.zotero.org/).\n  - `bibtex`: format used in conjunction with LaTeX documents.\n    See [bibtex.org](http://www.bibtex.org/).\n  - `wikibase`: format designed for [Wikibase](https://www.mediawiki.org/wiki/Extension:Wikibase_Repository).\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "format",
            in: "path",
            description: "The format to use for the resulting citation data",
            schema: {
              type: "string",
              enum: [
                "mediawiki",
                "mediawiki-basefields",
                "zotero",
                "bibtex",
                "wikibase",
              ],
            },
            required: true,
          },
          {
            name: "query",
            in: "path",
            description:
              "URL of an article, DOI, ISBN, PMCID or PMID in the URL-encoded format. Note that on the Swagger-UI doc page you don't need to URI-encode the parameter manually, it will be done by the docs engine.\n",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "Accept-Language",
            in: "header",
            description:
              "For some articles the result depends on the `Accept-Language` header, so provide it if localized content is required.\n",
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "The citation data in the requested format",
            content: {
              "application/json; charset=utf-8;": {
                schema: { $ref: "#/components/schemas/result" },
              },
              "application/x-bibtex; charset=utf-8": {
                schema: { $ref: "#/components/schemas/result" },
              },
            },
          },
          "404": {
            description: "Citation data was not found.",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "getCitation",
      },
    },
    "/data/lists/setup": {
      post: {
        tags: ["Reading lists"],
        summary: "Opt in to use reading lists.",
        description:
          "Must precede other list operations.\n\nRequest must be authenticated with a MediaWiki session cookie.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "csrf_token",
            in: "query",
            required: true,
            schema: {
              type: "string",
              example: "f63c343876da566045e6b59c4532450559c828d3+\\",
            },
            description: "The CRSF edit token provided by the MediaWiki API",
          },
        ],
        responses: {
          "200": {
            description: "Success.",
            content: {
              "application/json; charset=utf-8": { schema: { type: "object" } },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_lists_setup_post",
      },
    },
    "/data/lists/teardown": {
      post: {
        tags: ["Reading lists"],
        summary: "Opt out from using reading lists.",
        description:
          "Deletes all data. User needs to opt in again before being able to do anything.\n\nRequest must be authenticated with a MediaWiki session cookie.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "csrf_token",
            in: "query",
            required: true,
            schema: {
              type: "string",
              example: "f63c343876da566045e6b59c4532450559c828d3+\\",
            },
            description: "The CRSF edit token provided by the MediaWiki API",
          },
        ],
        responses: {
          "200": {
            description: "Success.",
            content: {
              "application/json; charset=utf-8": { schema: { type: "object" } },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_lists_teardown_post",
      },
    },
    "/data/lists/": {
      get: {
        tags: ["Reading lists"],
        summary: "Get all lists of the current user.",
        description:
          "Returns metadata describing the lists of the current user. Might be truncated and include\na continuation token.\n\nRequest must be authenticated with a MediaWiki session cookie.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "next",
            in: "query",
            description: "Continuation parameter from previous request",
            schema: { type: "string" },
          },
          {
            name: "sort",
            in: "query",
            description:
              "Sort order\n- `name`: by name, ascending;\n- `updated`: by last modification date, descending.\n",
            schema: {
              type: "string",
              default: "updated",
              enum: ["name", "updated"],
            },
          },
        ],
        responses: {
          "200": {
            description: "An array of list metadata.",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Lists/0.1"': {
                schema: {
                  type: "object",
                  properties: {
                    lists: {
                      type: "array",
                      items: { $ref: "#/components/schemas/list_read" },
                    },
                    next: {
                      type: "string",
                      description: "Continuation token.",
                    },
                    "continue-from": {
                      type: "string",
                      format: "date-time",
                      description:
                        "Timestamp to sync from, to be used with the `GET /lists/changes/since/{date}`\nendpoint.\n",
                    },
                  },
                },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_lists__get",
      },
      post: {
        tags: ["Reading lists"],
        summary: "Create a new list for the current user.",
        description:
          "Creates a new empty list. On name conflict, does nothing and returns the data of an\nexisting list.\n\nRequest must be authenticated with a MediaWiki session cookie.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n\nThis endpoint is deprecated and might be removed without warning. Use the batch version\ninstead.\n",
        parameters: [
          {
            name: "csrf_token",
            in: "query",
            required: true,
            schema: {
              type: "string",
              example: "f63c343876da566045e6b59c4532450559c828d3+\\",
            },
            description: "The CRSF edit token provided by the MediaWiki API",
          },
        ],
        requestBody: {
          content: {
            "*/*": { schema: { $ref: "#/components/schemas/list_write" } },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "The data for the new list.",
            content: {
              "application/json; charset=utf-8": {
                schema: {
                  type: "object",
                  properties: {
                    id: {
                      type: "integer",
                      description:
                        "List ID.\n\nDeprecated, will be removed. Use the full list object.\n",
                      example: 7,
                    },
                    list: { $ref: "#/components/schemas/list_read" },
                  },
                  required: ["id", "list"],
                },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_lists__post",
      },
    },
    "/data/lists/{id}": {
      put: {
        tags: ["Reading lists"],
        summary: "Update a list.",
        description:
          "List must belong to current user and request must be authenticated with\na MediaWiki session cookie. If the name is changed, the new name must not be in use.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer", example: 42 },
          },
          {
            name: "csrf_token",
            in: "query",
            required: true,
            schema: {
              type: "string",
              example: "f63c343876da566045e6b59c4532450559c828d3+\\",
            },
            description: "The CRSF edit token provided by the MediaWiki API",
          },
        ],
        requestBody: {
          content: {
            "*/*": { schema: { $ref: "#/components/schemas/list_write" } },
          },
          required: false,
        },
        responses: {
          "200": {
            description: "The updated data for the list.",
            content: {
              "application/json; charset=utf-8": {
                schema: {
                  type: "object",
                  properties: {
                    id: {
                      type: "integer",
                      description:
                        "List ID.\n\nDeprecated, will be removed. Use the full list object.\n",
                      example: 7,
                    },
                    list: { $ref: "#/components/schemas/list_read" },
                  },
                  required: ["id", "list"],
                },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_lists__id__put",
      },
      delete: {
        tags: ["Reading lists"],
        summary: "Delete a list.",
        description:
          "List must belong to current user and request must be authenticated with\na MediaWiki session cookie.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer", example: 42 },
          },
        ],
        responses: {
          "200": {
            description: "Success.",
            content: {
              "application/json; charset=utf-8": { schema: { type: "object" } },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_lists__id__delete",
      },
    },
    "/data/lists/batch": {
      post: {
        tags: ["Reading lists"],
        summary: "Create multiple new lists for the current user.",
        description:
          "See `POST /lists/`.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "csrf_token",
            in: "query",
            required: true,
            schema: {
              type: "string",
              example: "f63c343876da566045e6b59c4532450559c828d3+\\",
            },
            description: "The CRSF edit token provided by the MediaWiki API",
          },
        ],
        requestBody: {
          content: {
            "*/*": {
              schema: {
                title: "batch",
                required: ["batch"],
                type: "object",
                properties: {
                  batch: {
                    maxItems: 500,
                    type: "array",
                    items: { $ref: "#/components/schemas/list_write" },
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description:
              "The data for the new lists (in the same order as the inputs).",
            content: {
              "application/json; charset=utf-8": {
                schema: {
                  title: "list_create_batch",
                  type: "object",
                  properties: {
                    batch: {
                      type: "array",
                      description:
                        "Deprecated, will be removed. Use the full list objects instead.",
                      items: {
                        title: "list_id",
                        type: "object",
                        required: ["id"],
                        properties: {
                          id: {
                            type: "integer",
                            description: "List ID",
                            example: 7,
                          },
                        },
                      },
                    },
                    lists: {
                      type: "array",
                      items: { $ref: "#/components/schemas/list_read" },
                    },
                  },
                  required: ["batch", "lists"],
                },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_lists_batch_post",
      },
    },
    "/data/lists/{id}/entries/": {
      get: {
        tags: ["Reading lists"],
        summary: "Get all entries of a given list.",
        description:
          "Returns pages contained by the given list. Might be truncated and include\na continuation token.\n\nList must belong to current user and request must be authenticated with\na MediaWiki session cookie.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer", example: 42 },
          },
          {
            name: "next",
            in: "query",
            description: "Continuation parameter from previous request",
            schema: { type: "string" },
          },
          {
            name: "sort",
            in: "query",
            description:
              "Sort order\n- `name`: by page title, ascending;\n- `updated`: by last modification date, descending.\n",
            schema: {
              type: "string",
              default: "updated",
              enum: ["name", "updated"],
            },
          },
        ],
        responses: {
          "200": {
            description: "An array of list entries.",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Lists/0.1"': {
                schema: {
                  type: "object",
                  properties: {
                    entries: {
                      type: "array",
                      items: { $ref: "#/components/schemas/list_entry_read" },
                    },
                    next: {
                      type: "string",
                      description: "Continuation token.",
                    },
                  },
                },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "getListEntries",
      },
      post: {
        tags: ["Reading lists"],
        summary: "Create a new list entry.",
        description:
          "Creates a new list entry in the given list. On conflict, does nothing and returns the\ndata of an existing list.\n\nThe list must belong to the current user and the request must be\nauthenticated with a MediaWiki session cookie.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n\nThis endpoint is deprecated and might be removed without warning. Use the batch version\ninstead.\n",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer", example: 42 },
          },
          {
            name: "csrf_token",
            in: "query",
            required: true,
            schema: {
              type: "string",
              example: "f63c343876da566045e6b59c4532450559c828d3+\\",
            },
            description: "The CRSF edit token provided by the MediaWiki API",
          },
        ],
        requestBody: {
          content: {
            "*/*": {
              schema: { $ref: "#/components/schemas/list_entry_write" },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "The data for the new list entry.",
            content: {
              "application/json; charset=utf-8": {
                schema: {
                  type: "object",
                  properties: {
                    id: {
                      type: "integer",
                      description:
                        "List entry ID\n\nDeprecated, will be removed. Use the full entry object instead.\n",
                      example: 13,
                    },
                    entry: { $ref: "#/components/schemas/list_entry_read" },
                  },
                  required: ["id", "entry"],
                },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_lists__id__entries__post",
      },
    },
    "/data/lists/{id}/entries/{entry_id}": {
      delete: {
        tags: ["Reading lists"],
        summary: "Delete a list entry.",
        description:
          "Deletes a given list entry.\n\nThe list must belong to the current user and the request must be\nauthenticated with a MediaWiki session cookie.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer", example: 42 },
          },
          {
            name: "entry_id",
            in: "path",
            required: true,
            schema: { type: "integer", example: 64 },
          },
        ],
        responses: {
          "200": {
            description: "Success.",
            content: {
              "application/json; charset=utf-8": { schema: { type: "object" } },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_lists__id__entries__entry_id__delete",
      },
    },
    "/data/lists/{id}/entries/batch": {
      post: {
        tags: ["Reading lists"],
        summary: "Create multiple new list entries.",
        description:
          "See `POST /lists/{id}/entries/`.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer", example: 42 },
          },
          {
            name: "csrf_token",
            in: "query",
            required: true,
            schema: {
              type: "string",
              example: "f63c343876da566045e6b59c4532450559c828d3+\\",
            },
            description: "The CRSF edit token provided by the MediaWiki API",
          },
        ],
        requestBody: {
          content: {
            "*/*": {
              schema: {
                type: "object",
                required: ["batch"],
                properties: {
                  batch: {
                    title: "list_entries",
                    type: "array",
                    maxItems: 500,
                    items: { $ref: "#/components/schemas/list_entry_write" },
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description:
              "The data for the new list entries (in the same order as the inputs).",
            content: {
              "application/json; charset=utf-8": {
                schema: {
                  type: "object",
                  properties: {
                    batch: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: {
                            type: "integer",
                            description: "List entry ID",
                            example: 13,
                          },
                        },
                      },
                    },
                    entries: {
                      type: "array",
                      items: { $ref: "#/components/schemas/list_entry_read" },
                    },
                  },
                  required: ["entries", "batch"],
                },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_lists__id__entries_batch_post",
      },
    },
    "/data/lists/pages/{project}/{title}": {
      get: {
        tags: ["Reading lists"],
        summary: "Get lists of the current user which contain a given page.",
        description:
          "Request must be authenticated with a MediaWiki session cookie.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "project",
            in: "path",
            schema: {
              type: "string",
              description: "Domain of the wiki containing the page.",
              example: "https://en.wikipedia.org",
            },
            required: true,
          },
          {
            name: "title",
            in: "path",
            schema: {
              type: "string",
              description:
                "Title of the page containing the page, in database format.",
              example: "Barack_Obama",
            },
            required: true,
          },
          {
            name: "next",
            in: "query",
            description: "Continuation parameter from previous request",
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "An array of list metadata.",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Lists/0.1"': {
                schema: {
                  type: "object",
                  properties: {
                    lists: {
                      type: "array",
                      items: { $ref: "#/components/schemas/list_read" },
                    },
                    next: {
                      type: "string",
                      description: "Continuation token.",
                    },
                  },
                },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_lists_pages__project___title__get",
      },
    },
    "/data/lists/changes/since/{date}": {
      get: {
        tags: ["Reading lists"],
        summary: "Get recent changes to the lists",
        description:
          "Returns metadata describing lists and entries which have changed. Might be truncated\nand include a continuation token.\n\nRequest must be authenticated with a MediaWiki session cookie.\n\nFor safe synchronization, the date parameter should be taken from the `continue-from`\nfield of a previous `GET /lists/` or `GET /lists/changes/since/{date}` request. This will\nensure that no changes are skipped, at the cost of sometimes receiving the same change\nmultitple times. Clients should handle changes in an idempotent way.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "date",
            in: "path",
            description:
              "Cutoff date (in ISO 8601). To ensure reliable synchronization, the API\nmight return changes which are slightly older than the cutoff date.\n",
            schema: { type: "string", format: "date-time" },
            required: true,
          },
          {
            name: "next",
            in: "query",
            description: "Continuation parameter from previous request",
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description: "An array of list and entry metadata.",
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Lists/0.1"': {
                schema: {
                  type: "object",
                  properties: {
                    lists: {
                      type: "array",
                      items: { $ref: "#/components/schemas/list_read" },
                    },
                    next: {
                      type: "string",
                      description: "Continuation token.",
                    },
                    "continue-from": {
                      type: "string",
                      format: "date-time",
                      description:
                        "Timestamp to sync from, to be used with the `GET /lists/changes/since/{date}`\nendpoint.\n",
                    },
                  },
                },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_lists_changes_since__date__get",
      },
    },
    "/data/recommendation/article/creation/translation/{from_lang}": {
      get: {
        tags: ["Recommendation"],
        summary: "Recommend articles for translation.",
        description:
          "Recommends articles to be translated from the source\nto the domain language.\n\nSee more at [Recommendation API documentation](https://meta.wikimedia.org/wiki/Recommendation_API)\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "from_lang",
            in: "path",
            description: "The source language code",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "count",
            in: "query",
            description: "The max number of articles to return",
            schema: { type: "integer", default: 24 },
          },
        ],
        responses: {
          "200": {
            description: "the list of articles recommended for translation",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/recommendation_result" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId:
          "_data_recommendation_article_creation_translation__from_lang__get",
      },
    },
    "/data/recommendation/article/creation/translation/{from_lang}/{seed_article}": {
      get: {
        tags: ["Recommendation"],
        summary: "Recommend articles for translation.",
        description:
          "Recommends articles to be translated from the source\nto the domain language.\n\nSee more at [Recommendation API documentation](https://meta.wikimedia.org/wiki/Recommendation_API)\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "from_lang",
            in: "path",
            description: "The source language code",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "seed_article",
            in: "path",
            description: "The article to use as a search seed",
            required: true,
            schema: { type: "string" },
          },
          {
            name: "count",
            in: "query",
            description: "The max number of articles to return",
            schema: { type: "integer", default: 24 },
          },
        ],
        responses: {
          "200": {
            description: "the list of articles recommended for translation",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/recommendation_result" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId:
          "_data_recommendation_article_creation_translation__from_lang___seed_article__get",
      },
    },
    "/data/recommendation/article/creation/morelike/{seed_article}": {
      get: {
        tags: ["Recommendation"],
        summary: "Recommend missing articles",
        description:
          "Recommends articles similar to the seed article but are missing\nfrom the domain language Wikipedia.\n\nStability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)\n",
        parameters: [
          {
            name: "seed_article",
            in: "path",
            description:
              "The article title used to search similar but missing articles",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          "200": {
            description:
              "the prioritized list of Wikidata IDs recommended for creation as Wikipedia articles",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/morelike_result" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId:
          "_data_recommendation_article_creation_morelike__seed_article__get",
      },
    },
    "/data/css/mobile/{type}": {
      get: {
        tags: ["Mobile"],
        summary: "Get CSS for mobile apps.",
        description:
          "Gets common CSS mobile apps need to properly display pages using Page Content Service.\nIn most cases all of the types are needed (preferably in this order):\n* base (Common mobile CSS from ResourceLoader)\n* site (Site-specific, mobile CSS from ResourceLoader, as defined in MediaWiki\\:Mobile.css)\n* pcs (CSS for the Page Content Service)\n\nThe `base` and `pcs` responses are the same regardless of what domain is used.\nFor these we suggest meta.wikimedia.org.\n\nYou can still pass pagelib for type, but this is a legacy version of the CSS for\nexisting app clients.\n\nStability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)\n\nPlease follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.\n",
        parameters: [
          {
            name: "type",
            in: "path",
            description: "The desired CSS bundle",
            schema: {
              type: "string",
              enum: ["base", "pagelib", "pcs", "site"],
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            headers: {
              ETag: {
                description:
                  "Different values indicate that the content has changed",
                schema: { type: "string" },
              },
            },
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/CSS/1.0.0"': {
                schema: { type: "object" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_css_mobile__type__get",
      },
    },
    "/data/javascript/mobile/{type}": {
      get: {
        tags: ["Mobile"],
        summary: "Get JavaScript for mobileapps",
        description:
          "Gets the JavaScript bundle so that clients can have\nconvenient access to that for consuming the page HTML.\nAmongst other things,\n* it allows to detect the platform and through that enable platform specific CSS rules,\n* has code to lazy load images on the page,\n* code for collapsing and expanding tables.\n\nValid types are pagelib or pcs. Passing pcs will return the JavaScript for the\nPage Content Service. Passing pagelib will return a deprecated legacy version\nof the wikimedia-page-library JavaScript to support existing app clients.\n\nStability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)\n\nPlease follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.\n",
        parameters: [
          {
            name: "type",
            in: "path",
            description: "The desired JavaScript bundle",
            schema: { type: "string", enum: ["pagelib", "pcs"] },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            headers: {
              ETag: {
                description:
                  "Different values indicate that the content has changed",
                schema: { type: "string" },
              },
            },
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/JavaScript/1.0.0"': {
                schema: { type: "object" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_javascript_mobile__type__get",
      },
    },
    "/data/i18n/{type}": {
      get: {
        tags: ["Mobile"],
        summary: "Get internationalization info",
        description:
          "Gets internationalization information for the given site. Currently the only\nsupported type is pcs for the Page Content Service.\n\nStability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)\n",
        parameters: [
          {
            name: "type",
            in: "path",
            description: "The desired internationalization bundle",
            schema: { type: "string", enum: ["pcs"] },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            headers: {
              ETag: {
                description:
                  "Different values indicate that the content has changed",
                schema: { type: "string" },
              },
            },
            content: {
              'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/i18n/0.0.1"': {
                schema: { type: "object" },
              },
            },
          },
          default: {
            description: "Error",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/problem" },
              },
            },
          },
        },
        operationId: "_data_i18n__type__get",
      },
    },
  },
  components: {
    schemas: {
      revisions: {
        description: "The result format for revision listing",
        required: ["items"],
        type: "object",
        properties: {
          items: { $ref: "#/components/schemas/revisionIdentifier" },
        },
      },
      listing: {
        description: "The result format for listings",
        required: ["items"],
        type: "object",
        properties: {
          items: { type: "array", items: { type: "string" } },
          _links: {
            type: "object",
            properties: {
              next: {
                type: "object",
                properties: {
                  href: {
                    type: "string",
                    description: "Relative link to next result page.",
                  },
                },
              },
            },
          },
        },
      },
      "data-parsoid": {
        description: "Result format for Parsoid data queries",
        required: ["counter", "ids"],
        type: "object",
        properties: {
          counter: { type: "integer", format: "int32" },
          ids: { type: "object", properties: {} },
        },
      },
      revision: {
        description: "Result format for revision items",
        required: ["count", "items"],
        type: "object",
        properties: {
          count: { type: "integer", format: "int32" },
          items: { $ref: "#/components/schemas/revisionInfo" },
        },
      },
      revisionInfo: {
        type: "object",
        description: "Complete information about the revision",
        properties: {
          title: { type: "string" },
          page_id: { type: "integer", format: "int32" },
          rev: { type: "integer", format: "int32" },
          tid: { type: "string" },
          comment: { type: "string" },
          restrictions: { type: "array", items: { type: "string" } },
          tags: { type: "array", items: { type: "string" } },
          user_id: { type: "integer", format: "int32" },
          user_text: { type: "string" },
          timestamp: { type: "string", format: "date-time" },
          redirect: { type: "boolean" },
          page_language: { type: "string" },
        },
      },
      revisionIdentifier: {
        type: "object",
        description: "Unique revision identifier",
        properties: {
          revision: { type: "integer", format: "int32" },
          tid: { type: "string" },
        },
      },
      titles_set: {
        type: "object",
        properties: {
          canonical: {
            type: "string",
            description:
              "the DB key (non-prefixed), e.g. may have _ instead of spaces, best for making request URIs, still requires Percent-encoding",
          },
          normalized: {
            type: "string",
            description:
              "the normalized title (https://www.mediawiki.org/wiki/API:Query#Example_2:_Title_normalization), e.g. may have spaces instead of _",
          },
          display: {
            type: "string",
            description: "the title as it should be displayed to the user",
          },
        },
        required: ["canonical", "normalized", "display"],
        description:
          "a good example of the differences can be seen in https://en.wikipedia.org/api/rest_v1/page/summary/IOS_13",
      },
      media_list: {
        type: "object",
        properties: {
          revision: {
            type: "string",
            description: "the revision ID used to create the list",
          },
          tid: {
            type: "string",
            description:
              "the time uuid of the page rendering used to create the list",
          },
          items: {
            type: "array",
            description: "a list of media items",
            items: { $ref: "#/components/schemas/media_item" },
          },
        },
        required: ["items", "revision", "tid"],
      },
      media_item: {
        type: "object",
        properties: {
          title: { type: "string", description: "The file page title" },
          type: { type: "string", enum: ["image", "video", "audio"] },
          section_id: {
            type: "integer",
            description: "section ID in which the item is found on the page",
          },
          showInGallery: {
            type: "boolean",
            description:
              "whether the client should show the file in an image gallery presentation",
          },
          caption: {
            type: "object",
            properties: {
              html: {
                type: "string",
                description:
                  "on-wiki caption for the media item, including all HTML markup",
              },
              text: {
                type: "string",
                description:
                  "plain text of the on-wiki caption for the media item",
              },
            },
          },
          original: {
            type: "object",
            description: "reference to a Mathoid-rendered math formula image",
            properties: {
              source: {
                type: "string",
                description: "Mathoid image render URL",
              },
              mime: {
                type: "string",
                description: "the Mathoid image mime type",
              },
            },
          },
        },
        required: ["type", "section_id", "showInGallery"],
      },
      related: {
        type: "object",
        properties: {
          pages: {
            type: "array",
            items: { $ref: "#/components/schemas/summary" },
          },
        },
      },
      problem: {
        required: ["type"],
        type: "object",
        properties: {
          type: { type: "string" },
          title: { type: "string" },
          detail: { type: "string" },
          instance: { type: "string" },
        },
      },
      originalimage: {
        type: "object",
        properties: {
          source: { type: "string", description: "Original image URI" },
          width: { type: "integer", description: "Original image width" },
          height: { type: "integer", description: "Original image height" },
        },
        required: ["height", "source", "width"],
      },
      thumbnail: {
        type: "object",
        properties: {
          source: { type: "string", description: "Thumbnail image URI" },
          width: { type: "integer", description: "Thumbnail width" },
          height: { type: "integer", description: "Thumnail height" },
        },
        required: ["height", "source", "width"],
      },
      summary: {
        type: "object",
        properties: {
          titles: { $ref: "#/components/schemas/titles_set" },
          title: {
            deprecated: true,
            type: "string",
            description:
              "The page title.\nDeprecated: Use `titles.normalized` instead.\n",
          },
          displaytitle: {
            deprecated: true,
            type: "string",
            description:
              "The page title how it should be shown to the user.\nDeprecated: Use `titles.display` instead.\n",
          },
          pageid: { type: "integer", description: "The page ID" },
          extract: {
            type: "string",
            description: "First several sentences of an article in plain text",
          },
          extract_html: {
            type: "string",
            description:
              "First several sentences of an article in simple HTML format",
          },
          thumbnail: { $ref: "#/components/schemas/thumbnail" },
          originalimage: { $ref: "#/components/schemas/originalimage" },
          lang: {
            type: "string",
            description: "The page language code",
            example: "en",
          },
          dir: {
            type: "string",
            description: "The page language direction code",
            example: "ltr",
          },
          timestamp: {
            type: "string",
            description:
              "The time when the page was last edited in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format",
            example: {},
          },
          description: {
            type: "string",
            description: "Wikidata description for the page",
            example: "American poet",
          },
          coordinates: {
            type: "object",
            description: "The coordinates of the item",
            properties: {
              lat: { type: "number", description: "The latitude" },
              lon: { type: "number", description: "The longitude" },
            },
            required: ["lat", "lon"],
          },
        },
        required: ["dir", "extract", "lang", "titles"],
      },
      cx_mt: {
        type: "object",
        properties: {
          contents: { type: "string", description: "the translated content" },
        },
      },
      cx_dict: {
        type: "object",
        properties: {
          source: {
            type: "string",
            description: "the original word to look up",
          },
          translations: {
            type: "array",
            description: "the translations found",
            items: {
              type: "object",
              properties: {
                phrase: {
                  type: "string",
                  description: "the translated phrase",
                },
                info: {
                  type: "string",
                  description: "extra information about the phrase",
                },
                sources: {
                  type: "string",
                  description: "the source dictionary used for the translation",
                },
              },
            },
          },
        },
      },
      mostread_article: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "Article title in a form of DB key",
          },
          normalizedtitle: {
            type: "string",
            description: "Article title as it should be presented to the user",
          },
          views: {
            type: "integer",
            description: "Number of views on the requested day",
          },
          rank: {
            type: "integer",
            description: "Position in the list of most viewed articles",
          },
          thumbnail: { $ref: "#/components/schemas/thumbnail" },
          description: {
            type: "string",
            description: "Wikidata description of the article",
          },
          extract: {
            type: "string",
            description: "First several sentences of an article in plain text",
          },
        },
        required: ["title", "normalizedtitle", "views", "rank"],
      },
      mostread: {
        type: "object",
        properties: {
          date: {
            type: "string",
            description: "The date which the data correspond to",
          },
          articles: {
            type: "array",
            description: "Array of most popular articles",
            items: { $ref: "#/components/schemas/mostread_article" },
          },
        },
        required: ["date", "articles"],
      },
      news_item: {
        type: "object",
        properties: {
          story: {
            type: "string",
            description: "A cover story for the news item",
          },
          links: {
            type: "array",
            description: "A collection of articles related to the news item",
            items: { $ref: "#/components/schemas/summary" },
          },
        },
        required: ["story", "links"],
      },
      news: {
        type: "array",
        items: { $ref: "#/components/schemas/news_item" },
      },
      image_description: {
        type: "object",
        properties: {
          text: { type: "string", description: "Text of the description" },
          lang: {
            type: "string",
            description: "Language code of the description",
          },
        },
        required: ["text", "lang"],
      },
      image: {
        type: "object",
        properties: {
          title: { type: "string", description: "Image title" },
          thumbnail: { $ref: "#/components/schemas/thumbnail" },
          image: { $ref: "#/components/schemas/thumbnail" },
          description: { $ref: "#/components/schemas/image_description" },
        },
        required: ["title", "thumbnail", "image"],
      },
      onthisday: {
        type: "array",
        items: {
          type: "object",
          properties: {
            text: {
              type: "string",
              description: "Short description of the event",
            },
            pages: {
              type: "array",
              description: "List of pages related to the event",
              items: { $ref: "#/components/schemas/summary" },
            },
          },
        },
      },
      feed: {
        type: "object",
        description: "Aggregated feed content for a given date",
        properties: {
          tfa: { $ref: "#/components/schemas/summary" },
          mostread: { $ref: "#/components/schemas/mostread" },
          news: { $ref: "#/components/schemas/news" },
          image: { $ref: "#/components/schemas/image" },
          onthisday: { $ref: "#/components/schemas/onthisday" },
        },
      },
      action: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description:
              "The title to display on the button that performs the action",
          },
          url: {
            type: "string",
            description: "The URL to navigate to when the button is pressed",
          },
        },
        required: ["title", "url"],
      },
      announcement: {
        type: "object",
        properties: {
          id: { type: "string", description: "Unique ID of the announcement" },
          type: {
            type: "string",
            description:
              'The type of announcement. Possible values are "survey" or "fundraising"',
          },
          start_time: {
            type: "string",
            description: "The date to begin showing the announcement",
          },
          end_time: {
            type: "string",
            description: "The date to stop showing the announcement",
          },
          platforms: {
            type: "array",
            items: { type: "string" },
            description:
              'An array of platforms to display the announcement. Possible values are "iOSApp" or "AndroidApp"',
          },
          text: { type: "string", description: "The text of the announcement" },
          image: {
            type: "string",
            description: "The URL of the image for the announcement",
          },
          action: { $ref: "#/components/schemas/action" },
          caption_HTML: {
            type: "string",
            description:
              "HTML to display below the announcement. Usually a privacy statment and link to a policy",
          },
          countries: {
            type: "array",
            items: { type: "string" },
            description:
              "An array of country codes in which to display the announcement.\nClients should derive the country from 'GeoIP' portion of the Set-Cookie header\n",
          },
        },
        required: [
          "id",
          "type",
          "start_time",
          "end_time",
          "platforms",
          "text",
          "countries",
        ],
      },
      announcementsResponse: {
        type: "object",
        properties: {
          announce: {
            type: "array",
            items: { $ref: "#/components/schemas/announcement" },
          },
        },
        required: ["announce"],
      },
      onthisdayResponse: {
        type: "object",
        description:
          "Lists of events which happened on the provided day and month",
        properties: {
          births: { $ref: "#/components/schemas/onthisday" },
          deaths: { $ref: "#/components/schemas/onthisday" },
          events: { $ref: "#/components/schemas/onthisday" },
          holidays: { $ref: "#/components/schemas/onthisday" },
          selected: { $ref: "#/components/schemas/onthisday" },
        },
      },
      result: {
        required: ["title", "url", "itemType"],
        type: "object",
        properties: {
          itemType: { type: "string" },
          title: { type: "string" },
          url: { type: "string" },
        },
      },
      list_read: {
        title: "list",
        type: "object",
        properties: {
          id: { type: "integer", example: 42 },
          name: { type: "string", example: "Planets" },
          description: {
            type: "string",
            example: "Planets of the Solar System",
          },
          created: {
            type: "string",
            format: "date-time",
            description: "Creation date (in ISO 8601)",
          },
          updated: {
            type: "string",
            format: "date-time",
            description: "Last modification date (in ISO 8601)",
          },
        },
        required: ["id", "name", "created", "updated"],
      },
      list_write: {
        title: "list",
        type: "object",
        properties: {
          name: { type: "string", example: "Planets" },
          description: {
            type: "string",
            example: "Planets of the Solar System",
          },
        },
        required: ["name"],
      },
      list_entry_read: {
        title: "list_entry",
        type: "object",
        properties: {
          id: { type: "integer", example: 64 },
          project: {
            type: "string",
            description: "Domain of the wiki containing the page.",
            example: "https://en.wikipedia.org",
          },
          title: {
            type: "string",
            description:
              "Title of the page containing the page, in database format.",
            example: "Barack_Obama",
          },
          created: {
            type: "string",
            format: "date-time",
            description: "Creation date (in ISO 8601)",
          },
          updated: {
            type: "string",
            format: "date-time",
            description: "Last modification date (in ISO 8601)",
          },
        },
      },
      list_entry_write: {
        type: "object",
        properties: {
          project: {
            type: "string",
            description: "Domain of the wiki containing the page.",
            example: "https://en.wikipedia.org",
          },
          title: {
            type: "string",
            description:
              "Title of the page containing the page, in database format.",
            example: "Barack_Obama",
          },
        },
        required: ["project", "title"],
      },
      recommendation_result: {
        type: "object",
        properties: {
          count: {
            type: "integer",
            description: "the number of recommendations returned",
          },
          items: {
            type: "array",
            description: "the list of articles recommended for translation",
            items: {
              type: "object",
              properties: {
                wikidata_id: {
                  type: "string",
                  description: "wikidata id for the item",
                },
                title: {
                  type: "string",
                  description: "title of the article in the source language",
                },
                sitelink_count: {
                  type: "integer",
                  description: "count of sites the wikidata item is linked to",
                },
              },
            },
          },
        },
      },
      morelike_result: {
        type: "array",
        description:
          "the prioritized list of Wikidata IDs recommended for creation as Wikipedia articles",
        items: {
          type: "object",
          properties: {
            wikidata_id: {
              type: "string",
              description: "Wikidata ID for the item",
            },
            score: {
              type: "number",
              description:
                "Score of the recommendation. The higher the score, the more important the recommendation is.",
            },
            source_language: {
              type: "string",
              description:
                "Source of the recommendation -- which wiki is recommending the current article.",
            },
          },
        },
      },
    },
  },
  tags: [
    { name: "Page content", description: "page content in different formats" },
    { name: "Mobile", description: "mobile-friendly page content" },
    { name: "Feed", description: "aggregated daily featured content" },
    {
      name: "Transforms",
      description: "convert content between HTML and Wikitext",
    },
    { name: "Math", description: "formula rendering" },
    { name: "Citation", description: "generation of citation data" },
    {
      name: "Reading lists",
      description: "Private lists of selected pages",
      externalDocs: {
        description: "Project documentation",
        url: "https://www.mediawiki.org/wiki/Reading/Reading_Lists",
      },
    },
    { name: "Recommendation", description: "contribution recommendations" },
  ],
  servers: [{ url: "/api/rest_v1" }],
};
export default spec;
