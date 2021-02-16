/* eslint-disable */
import {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from "openapi-client-axios";

declare namespace Components {
  namespace Schemas {
    export interface Action {
      /**
       * The title to display on the button that performs the action
       */
      title: string;
      /**
       * The URL to navigate to when the button is pressed
       */
      url: string;
    }
    export interface Announcement {
      /**
       * Unique ID of the announcement
       */
      id: string;
      /**
       * The type of announcement. Possible values are "survey" or "fundraising"
       */
      type: string;
      /**
       * The date to begin showing the announcement
       */
      start_time: string;
      /**
       * The date to stop showing the announcement
       */
      end_time: string;
      /**
       * An array of platforms to display the announcement. Possible values are "iOSApp" or "AndroidApp"
       */
      platforms: string[];
      /**
       * The text of the announcement
       */
      text: string;
      /**
       * The URL of the image for the announcement
       */
      image?: string;
      action?: Action;
      /**
       * HTML to display below the announcement. Usually a privacy statment and link to a policy
       */
      caption_HTML?: string;
      /**
       * An array of country codes in which to display the announcement.
       * Clients should derive the country from 'GeoIP' portion of the Set-Cookie header
       *
       */
      countries: string[];
    }
    export interface AnnouncementsResponse {
      announce: Announcement[];
    }
    export interface CxDict {
      /**
       * the original word to look up
       */
      source?: string;
      /**
       * the translations found
       */
      translations?: {
        /**
         * the translated phrase
         */
        phrase?: string;
        /**
         * extra information about the phrase
         */
        info?: string;
        /**
         * the source dictionary used for the translation
         */
        sources?: string;
      }[];
    }
    export interface CxMt {
      /**
       * the translated content
       */
      contents?: string;
    }
    /**
     * Result format for Parsoid data queries
     */
    export interface DataParsoid {
      counter: number; // int32
      ids: {};
    }
    /**
     * Aggregated feed content for a given date
     */
    export interface Feed {
      tfa?: Summary;
      mostread?: Mostread;
      news?: News;
      image?: Image;
      onthisday?: Onthisday;
    }
    export interface Image {
      /**
       * Image title
       */
      title: string;
      thumbnail: Thumbnail;
      image: Thumbnail;
      description?: ImageDescription;
    }
    export interface ImageDescription {
      /**
       * Text of the description
       */
      text: string;
      /**
       * Language code of the description
       */
      lang: string;
    }
    /**
     * list_entry
     */
    export interface ListEntryRead {
      /**
       * example:
       * 64
       */
      id?: number;
      /**
       * Domain of the wiki containing the page.
       * example:
       * https://en.wikipedia.org
       */
      project?: string;
      /**
       * Title of the page containing the page, in database format.
       * example:
       * Barack_Obama
       */
      title?: string;
      /**
       * Creation date (in ISO 8601)
       */
      created?: string; // date-time
      /**
       * Last modification date (in ISO 8601)
       */
      updated?: string; // date-time
    }
    export interface ListEntryWrite {
      /**
       * Domain of the wiki containing the page.
       * example:
       * https://en.wikipedia.org
       */
      project: string;
      /**
       * Title of the page containing the page, in database format.
       * example:
       * Barack_Obama
       */
      title: string;
    }
    /**
     * list
     */
    export interface ListRead {
      /**
       * example:
       * 42
       */
      id: number;
      /**
       * example:
       * Planets
       */
      name: string;
      /**
       * example:
       * Planets of the Solar System
       */
      description?: string;
      /**
       * Creation date (in ISO 8601)
       */
      created: string; // date-time
      /**
       * Last modification date (in ISO 8601)
       */
      updated: string; // date-time
    }
    /**
     * list
     */
    export interface ListWrite {
      /**
       * example:
       * Planets
       */
      name: string;
      /**
       * example:
       * Planets of the Solar System
       */
      description?: string;
    }
    /**
     * The result format for listings
     */
    export interface Listing {
      items: string[];
      _links?: {
        next?: {
          /**
           * Relative link to next result page.
           */
          href?: string;
        };
      };
    }
    export interface MediaItem {
      /**
       * The file page title
       */
      title?: string;
      type: "image" | "video" | "audio";
      /**
       * section ID in which the item is found on the page
       */
      section_id: number;
      /**
       * whether the client should show the file in an image gallery presentation
       */
      showInGallery: boolean;
      caption?: {
        /**
         * on-wiki caption for the media item, including all HTML markup
         */
        html?: string;
        /**
         * plain text of the on-wiki caption for the media item
         */
        text?: string;
      };
      /**
       * reference to a Mathoid-rendered math formula image
       */
      original?: {
        /**
         * Mathoid image render URL
         */
        source?: string;
        /**
         * the Mathoid image mime type
         */
        mime?: string;
      };
    }
    export interface MediaList {
      /**
       * the revision ID used to create the list
       */
      revision: string;
      /**
       * the time uuid of the page rendering used to create the list
       */
      tid: string;
      /**
       * a list of media items
       */
      items: MediaItem[];
    }
    /**
     * the prioritized list of Wikidata IDs recommended for creation as Wikipedia articles
     */
    export type MorelikeResult = {
      /**
       * Wikidata ID for the item
       */
      wikidata_id?: string;
      /**
       * Score of the recommendation. The higher the score, the more important the recommendation is.
       */
      score?: number;
      /**
       * Source of the recommendation -- which wiki is recommending the current article.
       */
      source_language?: string;
    }[];
    export interface Mostread {
      /**
       * The date which the data correspond to
       */
      date: string;
      /**
       * Array of most popular articles
       */
      articles: MostreadArticle[];
    }
    export interface MostreadArticle {
      /**
       * Article title in a form of DB key
       */
      title: string;
      /**
       * Article title as it should be presented to the user
       */
      normalizedtitle: string;
      /**
       * Number of views on the requested day
       */
      views: number;
      /**
       * Position in the list of most viewed articles
       */
      rank: number;
      thumbnail?: Thumbnail;
      /**
       * Wikidata description of the article
       */
      description?: string;
      /**
       * First several sentences of an article in plain text
       */
      extract?: string;
    }
    export type News = NewsItem[];
    export interface NewsItem {
      /**
       * A cover story for the news item
       */
      story: string;
      /**
       * A collection of articles related to the news item
       */
      links: Summary[];
    }
    export type Onthisday = {
      /**
       * Short description of the event
       */
      text?: string;
      /**
       * List of pages related to the event
       */
      pages?: Summary[];
    }[];
    /**
     * Lists of events which happened on the provided day and month
     */
    export interface OnthisdayResponse {
      births?: Onthisday;
      deaths?: Onthisday;
      events?: Onthisday;
      holidays?: Onthisday;
      selected?: Onthisday;
    }
    export interface Originalimage {
      /**
       * Original image URI
       */
      source: string;
      /**
       * Original image width
       */
      width: number;
      /**
       * Original image height
       */
      height: number;
    }
    export interface Problem {
      type: string;
      title?: string;
      detail?: string;
      instance?: string;
    }
    export interface RecommendationResult {
      /**
       * the number of recommendations returned
       */
      count?: number;
      /**
       * the list of articles recommended for translation
       */
      items?: {
        /**
         * wikidata id for the item
         */
        wikidata_id?: string;
        /**
         * title of the article in the source language
         */
        title?: string;
        /**
         * count of sites the wikidata item is linked to
         */
        sitelink_count?: number;
      }[];
    }
    export interface Related {
      pages?: Summary[];
    }
    export interface Result {
      itemType: string;
      title: string;
      url: string;
    }
    /**
     * Result format for revision items
     */
    export interface Revision {
      count: number; // int32
      items: RevisionInfo;
    }
    /**
     * Unique revision identifier
     */
    export interface RevisionIdentifier {
      revision?: number; // int32
      tid?: string;
    }
    /**
     * Complete information about the revision
     */
    export interface RevisionInfo {
      title?: string;
      page_id?: number; // int32
      rev?: number; // int32
      tid?: string;
      comment?: string;
      restrictions?: string[];
      tags?: string[];
      user_id?: number; // int32
      user_text?: string;
      timestamp?: string; // date-time
      redirect?: boolean;
      page_language?: string;
    }
    /**
     * The result format for revision listing
     */
    export interface Revisions {
      items: RevisionIdentifier;
    }
    export interface Summary {
      titles: TitlesSet;
      /**
       * The page title.
       * Deprecated: Use `titles.normalized` instead.
       *
       */
      title?: string;
      /**
       * The page title how it should be shown to the user.
       * Deprecated: Use `titles.display` instead.
       *
       */
      displaytitle?: string;
      /**
       * The page ID
       */
      pageid?: number;
      /**
       * First several sentences of an article in plain text
       */
      extract: string;
      /**
       * First several sentences of an article in simple HTML format
       */
      extract_html?: string;
      thumbnail?: Thumbnail;
      originalimage?: Originalimage;
      /**
       * The page language code
       * example:
       * en
       */
      lang: string;
      /**
       * The page language direction code
       * example:
       * ltr
       */
      dir: string;
      /**
       * The time when the page was last edited in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
       * example:
       * {}
       */
      timestamp?: string;
      /**
       * Wikidata description for the page
       * example:
       * American poet
       */
      description?: string;
      /**
       * The coordinates of the item
       */
      coordinates?: {
        /**
         * The latitude
         */
        lat: number;
        /**
         * The longitude
         */
        lon: number;
      };
    }
    export interface Thumbnail {
      /**
       * Thumbnail image URI
       */
      source: string;
      /**
       * Thumbnail width
       */
      width: number;
      /**
       * Thumnail height
       */
      height: number;
    }
    /**
     * a good example of the differences can be seen in https://en.wikipedia.org/api/rest_v1/page/summary/IOS_13
     */
    export interface TitlesSet {
      /**
       * the DB key (non-prefixed), e.g. may have _ instead of spaces, best for making request URIs, still requires Percent-encoding
       */
      canonical: string;
      /**
       * the normalized title (https://www.mediawiki.org/wiki/API:Query#Example_2:_Title_normalization), e.g. may have spaces instead of _
       */
      normalized: string;
      /**
       * the title as it should be displayed to the user
       */
      display: string;
    }
  }
}
declare namespace Paths {
  namespace AggregatedFeed {
    namespace Parameters {
      export type Dd = string;
      export type Mm = string;
      export type Yyyy = string;
    }
    export interface PathParameters {
      yyyy: Parameters.Yyyy;
      mm: Parameters.Mm;
      dd: Parameters.Dd;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Feed;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataCssMobile_Type_Get {
    namespace Parameters {
      export type Type = "base" | "pagelib" | "pcs" | "site";
    }
    export interface PathParameters {
      type: Parameters.Type;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataI18n_Type_Get {
    namespace Parameters {
      export type Type = "pcs";
    }
    export interface PathParameters {
      type: Parameters.Type;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataJavascriptMobile_Type_Get {
    namespace Parameters {
      export type Type = "pagelib" | "pcs";
    }
    export interface PathParameters {
      type: Parameters.Type;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataListsBatchPost {
    namespace Parameters {
      /**
       * example:
       * f63c343876da566045e6b59c4532450559c828d3+\
       */
      export type CsrfToken = string;
    }
    export interface QueryParameters {
      csrf_token: Parameters.CsrfToken;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataListsChangesSince_Date_Get {
    namespace Parameters {
      export type Date = string; // date-time
      export type Next = string;
    }
    export interface PathParameters {
      date: Parameters.Date; // date-time
    }
    export interface QueryParameters {
      next?: Parameters.Next;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataListsPages_Project__Title_Get {
    namespace Parameters {
      export type Next = string;
      /**
       * Domain of the wiki containing the page.
       * example:
       * https://en.wikipedia.org
       */
      export type Project = string;
      /**
       * Title of the page containing the page, in database format.
       * example:
       * Barack_Obama
       */
      export type Title = string;
    }
    export interface PathParameters {
      project: Parameters.Project;
      title: Parameters.Title;
    }
    export interface QueryParameters {
      next?: Parameters.Next;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataListsSetupPost {
    namespace Parameters {
      /**
       * example:
       * f63c343876da566045e6b59c4532450559c828d3+\
       */
      export type CsrfToken = string;
    }
    export interface QueryParameters {
      csrf_token: Parameters.CsrfToken;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataListsTeardownPost {
    namespace Parameters {
      /**
       * example:
       * f63c343876da566045e6b59c4532450559c828d3+\
       */
      export type CsrfToken = string;
    }
    export interface QueryParameters {
      csrf_token: Parameters.CsrfToken;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataLists_Get {
    namespace Parameters {
      export type Next = string;
      export type Sort = "name" | "updated";
    }
    export interface QueryParameters {
      next?: Parameters.Next;
      sort?: Parameters.Sort;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataLists_Id_Delete {
    namespace Parameters {
      /**
       * example:
       * 42
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataLists_Id_EntriesBatchPost {
    namespace Parameters {
      /**
       * example:
       * f63c343876da566045e6b59c4532450559c828d3+\
       */
      export type CsrfToken = string;
      /**
       * example:
       * 42
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    export interface QueryParameters {
      csrf_token: Parameters.CsrfToken;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataLists_Id_Entries_EntryId_Delete {
    namespace Parameters {
      /**
       * example:
       * 64
       */
      export type EntryId = number;
      /**
       * example:
       * 42
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: Parameters.Id;
      entry_id: Parameters.EntryId;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataLists_Id_Entries_Post {
    namespace Parameters {
      /**
       * example:
       * f63c343876da566045e6b59c4532450559c828d3+\
       */
      export type CsrfToken = string;
      /**
       * example:
       * 42
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    export interface QueryParameters {
      csrf_token: Parameters.CsrfToken;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataLists_Id_Put {
    namespace Parameters {
      /**
       * example:
       * f63c343876da566045e6b59c4532450559c828d3+\
       */
      export type CsrfToken = string;
      /**
       * example:
       * 42
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    export interface QueryParameters {
      csrf_token: Parameters.CsrfToken;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataLists_Post {
    namespace Parameters {
      /**
       * example:
       * f63c343876da566045e6b59c4532450559c828d3+\
       */
      export type CsrfToken = string;
    }
    export interface QueryParameters {
      csrf_token: Parameters.CsrfToken;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataRecommendationArticleCreationMorelike_SeedArticle_Get {
    namespace Parameters {
      export type SeedArticle = string;
    }
    export interface PathParameters {
      seed_article: Parameters.SeedArticle;
    }
    namespace Responses {
      export type $200 = Components.Schemas.MorelikeResult;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataRecommendationArticleCreationTranslation_FromLang_Get {
    namespace Parameters {
      export type Count = number;
      export type FromLang = string;
    }
    export interface PathParameters {
      from_lang: Parameters.FromLang;
    }
    export interface QueryParameters {
      count?: Parameters.Count;
    }
    namespace Responses {
      export type $200 = Components.Schemas.RecommendationResult;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DataRecommendationArticleCreationTranslation_FromLang__SeedArticle_Get {
    namespace Parameters {
      export type Count = number;
      export type FromLang = string;
      export type SeedArticle = string;
    }
    export interface PathParameters {
      from_lang: Parameters.FromLang;
      seed_article: Parameters.SeedArticle;
    }
    export interface QueryParameters {
      count?: Parameters.Count;
    }
    namespace Responses {
      export type $200 = Components.Schemas.RecommendationResult;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DoDict {
    namespace Parameters {
      export type From = string;
      export type Word = string;
    }
    export interface PathParameters {
      from: Parameters.From;
      word: Parameters.Word;
    }
    namespace Responses {
      export type $200 = Components.Schemas.CxDict;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DoDictProvider {
    namespace Parameters {
      export type From = string;
      export type Provider = "JsonDict" | "Dictd";
      export type Word = string;
    }
    export interface PathParameters {
      from: Parameters.From;
      word: Parameters.Word;
      provider: Parameters.Provider;
    }
    namespace Responses {
      export type $200 = Components.Schemas.CxDict;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DoMT {
    namespace Parameters {
      export type From = string;
    }
    export interface PathParameters {
      from: Parameters.From;
    }
    export interface RequestBody {
      /**
       * The HTML content to translate
       */
      html: string;
    }
    namespace Responses {
      export type $200 = Components.Schemas.CxMt;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace DoMTProvider {
    namespace Parameters {
      export type From = string;
      export type Provider = "Apertium" | "Yandex" | "Youdao";
    }
    export interface PathParameters {
      from: Parameters.From;
      provider: Parameters.Provider;
    }
    namespace Responses {
      export type $200 = Components.Schemas.CxMt;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace GetCitation {
    export interface HeaderParameters {
      "Accept-Language"?: Parameters.AcceptLanguage;
    }
    namespace Parameters {
      export type AcceptLanguage = string;
      export type Format =
        | "mediawiki"
        | "mediawiki-basefields"
        | "zotero"
        | "bibtex"
        | "wikibase";
      export type Query = string;
    }
    export interface PathParameters {
      format: Parameters.Format;
      query: Parameters.Query;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
    }
  }
  namespace GetContentMediaList {
    namespace Parameters {
      export type Redirect = boolean;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace GetContentMobileHtml {
    namespace Parameters {
      export type Redirect = boolean;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $200 = string;
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace GetContentWithRevisionMediaList {
    namespace Parameters {
      export type Redirect = boolean;
      export type Revision = number;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace GetContentWithRevisionMobileHtml {
    namespace Parameters {
      export type Redirect = boolean;
      export type Revision = number;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $200 = string;
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace GetFormatRevision {
    export interface HeaderParameters {
      "Accept-Language"?: Parameters.AcceptLanguage;
    }
    namespace Parameters {
      export type AcceptLanguage = string;
      export type Redirect = boolean;
      export type Revision = number;
      export type Stash = boolean;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
      stash?: Parameters.Stash;
    }
    namespace Responses {
      export type $200 = string;
      export type $400 = Components.Schemas.Problem;
      export type $403 = Components.Schemas.Problem;
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace GetListEntries {
    namespace Parameters {
      /**
       * example:
       * 42
       */
      export type Id = number;
      export type Next = string;
      export type Sort = "name" | "updated";
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    export interface QueryParameters {
      next?: Parameters.Next;
      sort?: Parameters.Sort;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace GetRelatedPages {
    namespace Parameters {
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Related;
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace GetSections {
    export interface HeaderParameters {
      "Accept-Language"?: Parameters.AcceptLanguage;
    }
    namespace Parameters {
      export type AcceptLanguage = string;
      export type Redirect = boolean;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace GetSectionsLead {
    export interface HeaderParameters {
      "Accept-Language"?: Parameters.AcceptLanguage;
    }
    namespace Parameters {
      export type AcceptLanguage = string;
      export type Redirect = boolean;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace GetSectionsLeadWithRevision {
    export interface HeaderParameters {
      "Accept-Language"?: Parameters.AcceptLanguage;
    }
    namespace Parameters {
      export type AcceptLanguage = string;
      export type Redirect = boolean;
      export type Revision = number;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace GetSectionsRemaining {
    export interface HeaderParameters {
      "Accept-Language"?: Parameters.AcceptLanguage;
    }
    namespace Parameters {
      export type AcceptLanguage = string;
      export type Redirect = boolean;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace GetSectionsRemainingWithRevision {
    export interface HeaderParameters {
      "Accept-Language"?: Parameters.AcceptLanguage;
    }
    namespace Parameters {
      export type AcceptLanguage = string;
      export type Redirect = boolean;
      export type Revision = number;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace GetSectionsWithRevision {
    export interface HeaderParameters {
      "Accept-Language"?: Parameters.AcceptLanguage;
    }
    namespace Parameters {
      export type AcceptLanguage = string;
      export type Redirect = boolean;
      export type Revision = number;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace MediaMathCheck_Type_Post {
    namespace Parameters {
      export type Type = "tex" | "inline-tex" | "chem";
    }
    export interface PathParameters {
      type: Parameters.Type;
    }
    namespace Responses {
      export interface $200 {}
      export type $400 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace MediaMathFormula_Hash_Get {
    namespace Parameters {
      export type Hash = string;
    }
    export interface PathParameters {
      hash: Parameters.Hash;
    }
    namespace Responses {
      export interface $200 {}
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace MediaMathRender_Format__Hash_Get {
    namespace Parameters {
      export type Format = "svg" | "mml" | "png";
      export type Hash = string;
    }
    export interface PathParameters {
      format: Parameters.Format;
      hash: Parameters.Hash;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace OnThisDay {
    namespace Parameters {
      export type Dd = string;
      export type Mm = string;
      export type Type =
        | "all"
        | "selected"
        | "births"
        | "deaths"
        | "events"
        | "holidays";
    }
    export interface PathParameters {
      type: Parameters.Type;
      mm: Parameters.Mm;
      dd: Parameters.Dd;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type $501 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageDataParsoid_Title__Revision__Tid_Get {
    namespace Parameters {
      export type Redirect = boolean;
      export type Revision = number;
      export type Tid = string;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
      tid: Parameters.Tid;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $400 = Components.Schemas.Problem;
      export type $403 = Components.Schemas.Problem;
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageHtml_Title_Get {
    export interface HeaderParameters {
      "Accept-Language"?: Parameters.AcceptLanguage;
    }
    namespace Parameters {
      export type AcceptLanguage = string;
      export type Redirect = boolean;
      export type Stash = boolean;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
      stash?: Parameters.Stash;
    }
    namespace Responses {
      export type $200 = string;
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageHtml_Title_Post {
    namespace Parameters {
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    namespace Responses {
      export interface $200 {}
      export type $400 = Components.Schemas.Problem;
      export type $409 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageLint_Title_Get {
    namespace Parameters {
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    namespace Responses {
      export interface $200 {}
      export type $400 = Components.Schemas.Problem;
      export type $403 = Components.Schemas.Problem;
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageLint_Title__Revision_Get {
    namespace Parameters {
      export type Revision = number;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    namespace Responses {
      export interface $200 {}
      export type $400 = Components.Schemas.Problem;
      export type $403 = Components.Schemas.Problem;
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageMobileHtmlOfflineResources_Title_Get {
    namespace Parameters {
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageMobileHtmlOfflineResources_Title__Revision_Get {
    namespace Parameters {
      export type Revision = number;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PagePdf_Title_Get {
    namespace Parameters {
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type $503 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PagePdf_Title__Format_Get {
    namespace Parameters {
      export type Format = "a4" | "letter" | "legal";
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      format: Parameters.Format;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type $503 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PagePdf_Title__Format__Type_Get {
    namespace Parameters {
      export type Format = "a4" | "letter" | "legal";
      export type Title = string;
      export type Type = "mobile" | "desktop";
    }
    export interface PathParameters {
      title: Parameters.Title;
      format: Parameters.Format;
      type?: Parameters.Type;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type $503 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageRandom_Format_Get {
    namespace Parameters {
      export type Format =
        | "title"
        | "html"
        | "summary"
        | "related"
        | "mobile-sections"
        | "mobile-sections-lead";
    }
    export interface PathParameters {
      format: Parameters.Format;
    }
    namespace Responses {
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageSegments_Title_Get {
    namespace Parameters {
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    namespace Responses {
      export interface $200 {
        /**
         * The source language of the page
         */
        sourceLanguage?: string;
        /**
         * The title of the segmented page returned
         */
        title?: string;
        /**
         * The revision ID of the segmented page
         */
        revision?: number;
        /**
         * The segmented HTML body of the contents of the page
         */
        segmentedContent?: string;
      }
      export type $400 = Components.Schemas.Problem;
      export type $403 = Components.Schemas.Problem;
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageSegments_Title__Revision_Get {
    namespace Parameters {
      export type Revision = number;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    namespace Responses {
      export interface $200 {
        /**
         * The source language of the page
         */
        sourceLanguage?: string;
        /**
         * The title of the segmented page returned
         */
        title?: string;
        /**
         * The revision ID of the segmented page
         */
        revision?: number;
        /**
         * The segmented HTML body of the contents of the page
         */
        segmentedContent?: string;
      }
      export type $400 = Components.Schemas.Problem;
      export type $403 = Components.Schemas.Problem;
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageSummary_Title_Get {
    export interface HeaderParameters {
      "Accept-Language"?: Parameters.AcceptLanguage;
    }
    namespace Parameters {
      export type AcceptLanguage = string;
      export type Redirect = boolean;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageTalk_Title_Get {
    namespace Parameters {
      export type Redirect = boolean;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageTalk_Title__Revision_Get {
    namespace Parameters {
      export type Redirect = boolean;
      export type Revision = number;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    export interface QueryParameters {
      redirect?: Parameters.Redirect;
    }
    namespace Responses {
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageTitle_Title_Get {
    namespace Parameters {
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Revision;
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageTitle_Title__Revision_Get {
    namespace Parameters {
      export type Revision = number;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Revision;
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace PageWikitext_Title_Post {
    namespace Parameters {
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    namespace Responses {
      export interface $201 {}
      export type $400 = Components.Schemas.Problem;
      export type $409 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace Page_Get {
    namespace Responses {
      export type $200 = Components.Schemas.Listing;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace TransformHtmlToWikitextPost {
    export interface HeaderParameters {
      "if-match"?: Parameters.IfMatch;
    }
    namespace Parameters {
      export type IfMatch = string;
    }
    namespace Responses {
      export type $200 = string;
      export type $403 = Components.Schemas.Problem;
      export type $404 = Components.Schemas.Problem;
      export type $409 = Components.Schemas.Problem;
      export type $410 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace TransformHtmlToWikitext_Title_Post {
    export interface HeaderParameters {
      "if-match"?: Parameters.IfMatch;
    }
    namespace Parameters {
      export type IfMatch = string;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    namespace Responses {
      export type $200 = string;
      export type $403 = Components.Schemas.Problem;
      export type $404 = Components.Schemas.Problem;
      export type $409 = Components.Schemas.Problem;
      export type $410 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace TransformHtmlToWikitext_Title__Revision_Post {
    export interface HeaderParameters {
      "if-match"?: Parameters.IfMatch;
    }
    namespace Parameters {
      export type IfMatch = string;
      export type Revision = number;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    namespace Responses {
      export type $200 = string;
      export type $403 = Components.Schemas.Problem;
      export type $404 = Components.Schemas.Problem;
      export type $409 = Components.Schemas.Problem;
      export type $410 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace TransformWikitextToHtmlPost {
    namespace Responses {
      export type $200 = string;
      export type $403 = Components.Schemas.Problem;
      export type $404 = Components.Schemas.Problem;
      export type $409 = Components.Schemas.Problem;
      export type $410 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace TransformWikitextToHtml_Title_Post {
    namespace Parameters {
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    namespace Responses {
      export type $200 = string;
      export type $403 = Components.Schemas.Problem;
      export type $404 = Components.Schemas.Problem;
      export type $409 = Components.Schemas.Problem;
      export type $410 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace TransformWikitextToHtml_Title__Revision_Post {
    namespace Parameters {
      export type Revision = number;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    namespace Responses {
      export type $200 = string;
      export type $403 = Components.Schemas.Problem;
      export type $404 = Components.Schemas.Problem;
      export type $409 = Components.Schemas.Problem;
      export type $410 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace TransformWikitextToLintPost {
    export interface RequestBody {
      /**
       * The Wikitext to check
       */
      wikitext: string;
    }
    namespace Responses {
      export interface $200 {}
      export type $404 = Components.Schemas.Problem;
      export type $409 = Components.Schemas.Problem;
      export type $410 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace TransformWikitextToLint_Title_Post {
    namespace Parameters {
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    namespace Responses {
      export interface $200 {}
      export type $404 = Components.Schemas.Problem;
      export type $409 = Components.Schemas.Problem;
      export type $410 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace TransformWikitextToLint_Title__Revision_Post {
    namespace Parameters {
      export type Revision = number;
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
      revision: Parameters.Revision;
    }
    namespace Responses {
      export interface $200 {}
      export type $404 = Components.Schemas.Problem;
      export type $409 = Components.Schemas.Problem;
      export type $410 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
  namespace TransformWikitextToMobileHtml {
    export interface HeaderParameters {
      "Accept-Language"?: Parameters.AcceptLanguage;
      "output-mode"?: Parameters.OutputMode;
    }
    namespace Parameters {
      export type AcceptLanguage = string;
      export type OutputMode =
        | "editPreview"
        | "contentAndReferences"
        | "content"
        | "references";
      export type Title = string;
    }
    export interface PathParameters {
      title: Parameters.Title;
    }
    namespace Responses {
      export type $200 = string;
      export type $404 = Components.Schemas.Problem;
      export type Default = Components.Schemas.Problem;
    }
  }
}

export interface OperationMethods {
  /**
   * _page__get - List page-related API entry points.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   *
   */
  "_page__get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    Paths.Page_Get.Responses.$200 | Paths.Page_Get.Responses.$Default
  >;
  /**
   * _page_title__title__get - Get revision metadata for a title.
   *
   * Returns the revision metadata for the given title. If a revision ID is provided,
   * metadata for that revision is returned, otherwise the latest revision ID is assumed.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   */
  "_page_title__title__get"(
    parameters?: Parameters<Paths.PageTitle_Title_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PageTitle_Title_Get.Responses.$200
    | Paths.PageTitle_Title_Get.Responses.$404
    | Paths.PageTitle_Title_Get.Responses.$Default
  >;
  /**
   * _page_title__title___revision__get - Get revision metadata for a title.
   *
   * Returns the revision metadata for the given title. If a revision ID is provided,
   * metadata for that revision is returned, otherwise the latest revision ID is assumed.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   */
  "_page_title__title___revision__get"(
    parameters?: Parameters<Paths.PageTitle_Title__Revision_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PageTitle_Title__Revision_Get.Responses.$200
    | Paths.PageTitle_Title__Revision_Get.Responses.$404
    | Paths.PageTitle_Title__Revision_Get.Responses.$Default
  >;
  /**
   * _page_html__title__get - Get latest HTML for a title.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   *
   */
  "_page_html__title__get"(
    parameters?: Parameters<
      Paths.PageHtml_Title_Get.PathParameters &
        Paths.PageHtml_Title_Get.QueryParameters &
        Paths.PageHtml_Title_Get.HeaderParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PageHtml_Title_Get.Responses.$200
    | Paths.PageHtml_Title_Get.Responses.$404
    | Paths.PageHtml_Title_Get.Responses.$Default
  >;
  /**
   * _page_html__title__post - Save a new revision using HTML.
   *
   * Save a new revision of a page given in [Parsoid
   * HTML](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec)
   * format.
   *
   * For new pages, or when editting the latest revision of a page,
   * the `base_etag` parameter should be left empty. For editing old revisions,
   * it should contain the `ETag` header of the revision the edit is derived from.
   *
   * The latest page revision ETag header could be provided in the If-Match header
   * to detect edit conflicts. If the new page is created, appropriate user cookies
   * must be provided.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_page_html__title__post"(
    parameters?: Parameters<Paths.PageHtml_Title_Post.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PageHtml_Title_Post.Responses.$200
    | Paths.PageHtml_Title_Post.Responses.$400
    | Paths.PageHtml_Title_Post.Responses.$409
    | Paths.PageHtml_Title_Post.Responses.$Default
  >;
  /**
   * getFormatRevision - Get HTML for a specific title/revision & optionally timeuuid.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   *
   */
  "getFormatRevision"(
    parameters?: Parameters<
      Paths.GetFormatRevision.PathParameters &
        Paths.GetFormatRevision.QueryParameters &
        Paths.GetFormatRevision.HeaderParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.GetFormatRevision.Responses.$200
    | Paths.GetFormatRevision.Responses.$400
    | Paths.GetFormatRevision.Responses.$403
    | Paths.GetFormatRevision.Responses.$404
    | Paths.GetFormatRevision.Responses.$Default
  >;
  /**
   * _page_data_parsoid__title___revision___tid__get - Get data-parsoid metadata for a specific title/revision/tid.
   *
   * Data-parsoid is metadata used by
   * [Parsoid](https://www.mediawiki.org/wiki/Parsoid) to support clean
   * round-tripping conversions between HTML and Wikitext. Among other
   * things, it contains the original Wikitext offsets of each HTML
   * element, keyed by element ID. The format is unstable.
   *
   * The metadata in data-parsoid is specific to a specific HTML render.
   * For this reason, you need to supply the exact `revision` and `tid` as
   * provided in the `ETag` header of the HTML response.
   *
   * Stability: [Stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   *
   */
  "_page_data_parsoid__title___revision___tid__get"(
    parameters?: Parameters<
      Paths.PageDataParsoid_Title__Revision__Tid_Get.PathParameters &
        Paths.PageDataParsoid_Title__Revision__Tid_Get.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PageDataParsoid_Title__Revision__Tid_Get.Responses.$400
    | Paths.PageDataParsoid_Title__Revision__Tid_Get.Responses.$403
    | Paths.PageDataParsoid_Title__Revision__Tid_Get.Responses.$404
    | Paths.PageDataParsoid_Title__Revision__Tid_Get.Responses.$Default
  >;
  /**
   * _page_lint__title__get - Get the linter errors for a specific title/revision.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "_page_lint__title__get"(
    parameters?: Parameters<Paths.PageLint_Title_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PageLint_Title_Get.Responses.$200
    | Paths.PageLint_Title_Get.Responses.$400
    | Paths.PageLint_Title_Get.Responses.$403
    | Paths.PageLint_Title_Get.Responses.$404
    | Paths.PageLint_Title_Get.Responses.$Default
  >;
  /**
   * _page_lint__title___revision__get - Get the linter errors for a specific title/revision.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "_page_lint__title___revision__get"(
    parameters?: Parameters<Paths.PageLint_Title__Revision_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PageLint_Title__Revision_Get.Responses.$200
    | Paths.PageLint_Title__Revision_Get.Responses.$400
    | Paths.PageLint_Title__Revision_Get.Responses.$403
    | Paths.PageLint_Title__Revision_Get.Responses.$404
    | Paths.PageLint_Title__Revision_Get.Responses.$Default
  >;
  /**
   * _page_wikitext__title__post - Save a new revision of a page using Wikitext.
   *
   * For new pages, or when editting the latest revision of a page,
   * the `base_etag` parameter should be left empty.
   * For editing old revisions, it should contain the ETag header
   * of the revision the edit is derived from.
   *
   * The latest page revision ETag header should be provided in the If-Match header
   * to detect edit conflicts. If the new page is created, appropriate user cookies
   * must be provided.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_page_wikitext__title__post"(
    parameters?: Parameters<Paths.PageWikitext_Title_Post.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PageWikitext_Title_Post.Responses.$201
    | Paths.PageWikitext_Title_Post.Responses.$400
    | Paths.PageWikitext_Title_Post.Responses.$409
    | Paths.PageWikitext_Title_Post.Responses.$Default
  >;
  /**
   * _page_segments__title__get - Fetches a segmented page to be used in machine translation
   *
   * Use this end point to fetch the segmented content of a page. Clients should
   * use the returned content in conjunction with the [language transform
   * API](https://wikimedia.org/api/rest_v1/#!/Transform).
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "_page_segments__title__get"(
    parameters?: Parameters<Paths.PageSegments_Title_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PageSegments_Title_Get.Responses.$200
    | Paths.PageSegments_Title_Get.Responses.$400
    | Paths.PageSegments_Title_Get.Responses.$403
    | Paths.PageSegments_Title_Get.Responses.$404
    | Paths.PageSegments_Title_Get.Responses.$Default
  >;
  /**
   * _page_segments__title___revision__get - Fetches a segmented page to be used in machine translation
   *
   * Use this end point to fetch the segmented content of a page. Clients should
   * use the returned content in conjunction with the [language transform
   * API](https://wikimedia.org/api/rest_v1/#!/Transform).
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "_page_segments__title___revision__get"(
    parameters?: Parameters<Paths.PageSegments_Title__Revision_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PageSegments_Title__Revision_Get.Responses.$200
    | Paths.PageSegments_Title__Revision_Get.Responses.$400
    | Paths.PageSegments_Title__Revision_Get.Responses.$403
    | Paths.PageSegments_Title__Revision_Get.Responses.$404
    | Paths.PageSegments_Title__Revision_Get.Responses.$Default
  >;
  /**
   * getSections - Get mobile-optimized HTML sections for a title.
   *
   * Retrieve the latest HTML for a page title optimised for viewing with
   * native mobile applications. Note that the output is split by sections.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
   *
   * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
   *
   */
  "getSections"(
    parameters?: Parameters<
      Paths.GetSections.PathParameters &
        Paths.GetSections.QueryParameters &
        Paths.GetSections.HeaderParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    Paths.GetSections.Responses.$404 | Paths.GetSections.Responses.$Default
  >;
  /**
   * getSectionsWithRevision - Get mobile-optimized HTML sections for a title.
   *
   * Retrieve the latest HTML for a page title optimised for viewing with
   * native mobile applications. Note that the output is split by sections.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
   *
   * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
   *
   */
  "getSectionsWithRevision"(
    parameters?: Parameters<
      Paths.GetSectionsWithRevision.PathParameters &
        Paths.GetSectionsWithRevision.QueryParameters &
        Paths.GetSectionsWithRevision.HeaderParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.GetSectionsWithRevision.Responses.$404
    | Paths.GetSectionsWithRevision.Responses.$Default
  >;
  /**
   * getSectionsLead - Get mobile-optimized HTML lead section and metadata for a title.
   *
   * Retrieve the lead section of the latest HTML for a page title optimised
   * for viewing with native mobile applications.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
   *
   * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
   *
   */
  "getSectionsLead"(
    parameters?: Parameters<
      Paths.GetSectionsLead.PathParameters &
        Paths.GetSectionsLead.QueryParameters &
        Paths.GetSectionsLead.HeaderParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.GetSectionsLead.Responses.$404
    | Paths.GetSectionsLead.Responses.$Default
  >;
  /**
   * getSectionsLeadWithRevision - Get mobile-optimized HTML lead section and metadata for a title.
   *
   * Retrieve the lead section of the latest HTML for a page title optimised
   * for viewing with native mobile applications.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
   *
   * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
   *
   */
  "getSectionsLeadWithRevision"(
    parameters?: Parameters<
      Paths.GetSectionsLeadWithRevision.PathParameters &
        Paths.GetSectionsLeadWithRevision.QueryParameters &
        Paths.GetSectionsLeadWithRevision.HeaderParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.GetSectionsLeadWithRevision.Responses.$404
    | Paths.GetSectionsLeadWithRevision.Responses.$Default
  >;
  /**
   * getSectionsRemaining - Get non-lead mobile-optimized HTML sections for a title.
   *
   * Retrieve the remainder of the latest HTML (without the lead section) for
   * a page title optimised for viewing with native mobile applications,
   * provided as a JSON object containing the sections.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
   *
   * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
   *
   */
  "getSectionsRemaining"(
    parameters?: Parameters<
      Paths.GetSectionsRemaining.PathParameters &
        Paths.GetSectionsRemaining.QueryParameters &
        Paths.GetSectionsRemaining.HeaderParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.GetSectionsRemaining.Responses.$404
    | Paths.GetSectionsRemaining.Responses.$Default
  >;
  /**
   * getSectionsRemainingWithRevision - Get non-lead mobile-optimized HTML sections for a title.
   *
   * Retrieve the remainder of the latest HTML (without the lead section) for
   * a page title optimised for viewing with native mobile applications,
   * provided as a JSON object containing the sections.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
   *
   * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
   *
   */
  "getSectionsRemainingWithRevision"(
    parameters?: Parameters<
      Paths.GetSectionsRemainingWithRevision.PathParameters &
        Paths.GetSectionsRemainingWithRevision.QueryParameters &
        Paths.GetSectionsRemainingWithRevision.HeaderParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.GetSectionsRemainingWithRevision.Responses.$404
    | Paths.GetSectionsRemainingWithRevision.Responses.$Default
  >;
  /**
   * _page_summary__title__get - Get basic metadata and simplified article introduction.
   *
   * The summary response includes an extract of the first paragraph of the page in plain text
   * and HTML as well as the type of page. This is useful for page previews (fka. Hovercards,
   * aka. Popups) on the web and link previews in the apps.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Stable)
   *
   * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
   *
   */
  "_page_summary__title__get"(
    parameters?: Parameters<
      Paths.PageSummary_Title_Get.PathParameters &
        Paths.PageSummary_Title_Get.QueryParameters &
        Paths.PageSummary_Title_Get.HeaderParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PageSummary_Title_Get.Responses.$404
    | Paths.PageSummary_Title_Get.Responses.$Default
  >;
  /**
   * getContent-media-list - Get list of media files used on a page.
   *
   * Gets the list of media items (images, audio, and video) in the order in which they appear on a
   * given wiki page.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
   *
   * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
   *
   */
  "getContent-media-list"(
    parameters?: Parameters<
      Paths.GetContentMediaList.PathParameters &
        Paths.GetContentMediaList.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.GetContentMediaList.Responses.$404
    | Paths.GetContentMediaList.Responses.$Default
  >;
  /**
   * getContentWithRevision-media-list - Get list of media files used on a page.
   *
   * Gets the list of media items (images, audio, and video) in the order in which they appear on a
   * given wiki page.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
   *
   * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
   *
   */
  "getContentWithRevision-media-list"(
    parameters?: Parameters<
      Paths.GetContentWithRevisionMediaList.PathParameters &
        Paths.GetContentWithRevisionMediaList.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.GetContentWithRevisionMediaList.Responses.$404
    | Paths.GetContentWithRevisionMediaList.Responses.$Default
  >;
  /**
   * getContent-mobile-html - Get page content HTML optimized for mobile consumption.
   *
   * Gets the content HTML optimized for mobile consumption for the given page. This content
   * is derived from Parsoid HTML (see `/page/html/{title}` endpoint).
   * The difference to Parsoid HTML is roughly:
   * * Some elements and attributes not needed for the reading case are removed.
   * * LeadIntroductionTransform: The introductory paragraph is moved before an infobox.
   * * RedLinks: Red links are flattened (=turned into span elements).
   * * WidenImage: images that should be displayed in gallery are widened.
   * * Section headings are slightly changed by wrapping the headings inside a div and adding
   *   a span element inside the new div for the edit buttons.
   * * Additional classes are added to img elements to fix issues with non-white backgrounds.
   *   See Theme support below for instructions on how to enable that.
   * * Pagelib CSS files needed to display the content are referenced.
   * * LazyLoadTransform: server-side portion/prep for lazy loading of images.
   * * CollapseTable: server-side portion/prep for collapsing tables.
   *
   * What's not included? What parts of the PageLibrary does a client still have to do?
   * * Theme support: Themes can be turned on by adding a theme class to the root <html> tag.
   *   Possible class names are:
   *   * `pagelib_theme_default`
   *   * `pagelib_theme_dark`
   *   * `pagelib_theme_black`
   *   * `pagelib_theme_sepia`
   *
   *   The pagelib JS has functionality to do that: ThemeTransform.setTheme(document, theme).
   * * Dim images: DimImagesTransform.dim(window, enable)
   * * PlatformTransform.classify(window) to trigger Android and iOS app specific CSS rules
   * * LazyLoadTransformer: client side companion of LazyLoadTransform (note the extra *er*
   * here)
   * * FooterTransformer: seems to be more UI than content, requires I18N, too
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "getContent-mobile-html"(
    parameters?: Parameters<
      Paths.GetContentMobileHtml.PathParameters &
        Paths.GetContentMobileHtml.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.GetContentMobileHtml.Responses.$200
    | Paths.GetContentMobileHtml.Responses.$404
    | Paths.GetContentMobileHtml.Responses.$Default
  >;
  /**
   * getContentWithRevision-mobile-html - Get page content HTML optimized for mobile consumption.
   *
   * Gets the content HTML optimized for mobile consumption for the given page. This content
   * is derived from Parsoid HTML (see `/page/html/{title}` endpoint).
   * The difference to Parsoid HTML is roughly:
   * * Some elements and attributes not needed for the reading case are removed.
   * * LeadIntroductionTransform: The introductory paragraph is moved before an infobox.
   * * RedLinks: Red links are flattened (=turned into span elements).
   * * WidenImage: images that should be displayed in gallery are widened.
   * * Section headings are slightly changed by wrapping the headings inside a div and adding
   *   a span element inside the new div for the edit buttons.
   * * Additional classes are added to img elements to fix issues with non-white backgrounds.
   *   See Theme support below for instructions on how to enable that.
   * * Pagelib CSS files needed to display the content are referenced.
   * * LazyLoadTransform: server-side portion/prep for lazy loading of images.
   * * CollapseTable: server-side portion/prep for collapsing tables.
   *
   * What's not included? What parts of the PageLibrary does a client still have to do?
   * * Theme support: Themes can be turned on by adding a theme class to the root <html> tag.
   *   Possible class names are:
   *   * `pagelib_theme_default`
   *   * `pagelib_theme_dark`
   *   * `pagelib_theme_black`
   *   * `pagelib_theme_sepia`
   *
   *   The pagelib JS has functionality to do that: ThemeTransform.setTheme(document, theme).
   * * Dim images: DimImagesTransform.dim(window, enable)
   * * PlatformTransform.classify(window) to trigger Android and iOS app specific CSS rules
   * * LazyLoadTransformer: client side companion of LazyLoadTransform (note the extra *er*
   * here)
   * * FooterTransformer: seems to be more UI than content, requires I18N, too
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "getContentWithRevision-mobile-html"(
    parameters?: Parameters<
      Paths.GetContentWithRevisionMobileHtml.PathParameters &
        Paths.GetContentWithRevisionMobileHtml.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.GetContentWithRevisionMobileHtml.Responses.$200
    | Paths.GetContentWithRevisionMobileHtml.Responses.$404
    | Paths.GetContentWithRevisionMobileHtml.Responses.$Default
  >;
  /**
   * _page_mobile_html_offline_resources__title__get - Get styles and scripts for offline consumption of mobile-html-formatted pages
   *
   * Provides links to scripts and styles needed for viewing mobile-html-formatted pages offline.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "_page_mobile_html_offline_resources__title__get"(
    parameters?: Parameters<Paths.PageMobileHtmlOfflineResources_Title_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.PageMobileHtmlOfflineResources_Title_Get.Responses.$Default>;
  /**
   * _page_mobile_html_offline_resources__title___revision__get - Get styles and scripts for offline consumption of mobile-html-formatted pages
   *
   * Provides links to scripts and styles needed for viewing mobile-html-formatted pages offline.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "_page_mobile_html_offline_resources__title___revision__get"(
    parameters?: Parameters<Paths.PageMobileHtmlOfflineResources_Title__Revision_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.PageMobileHtmlOfflineResources_Title__Revision_Get.Responses.$Default>;
  /**
   * getRelatedPages - Get pages related to the given title
   *
   * Returns summaries for 20 pages related to the given page. Summaries include
   * page title, namespace and id along with short text description of the page
   * and a thumbnail.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "getRelatedPages"(
    parameters?: Parameters<Paths.GetRelatedPages.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.GetRelatedPages.Responses.$200
    | Paths.GetRelatedPages.Responses.$404
    | Paths.GetRelatedPages.Responses.$Default
  >;
  /**
   * _page_random__format__get - Get content for a random page
   *
   * Redirects the client to the URI for the desired format for a random page title.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_page_random__format__get"(
    parameters?: Parameters<Paths.PageRandom_Format_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.PageRandom_Format_Get.Responses.$Default>;
  /**
   * _page_talk__title__get - Get structured talk page contents
   *
   * Gets structured talk page contents for the provided title.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Experimental)
   *
   */
  "_page_talk__title__get"(
    parameters?: Parameters<
      Paths.PageTalk_Title_Get.PathParameters &
        Paths.PageTalk_Title_Get.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PageTalk_Title_Get.Responses.$404
    | Paths.PageTalk_Title_Get.Responses.$Default
  >;
  /**
   * _page_talk__title___revision__get - Get structured talk page contents
   *
   * Gets structured talk page contents for the provided title.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Experimental)
   *
   */
  "_page_talk__title___revision__get"(
    parameters?: Parameters<
      Paths.PageTalk_Title__Revision_Get.PathParameters &
        Paths.PageTalk_Title__Revision_Get.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PageTalk_Title__Revision_Get.Responses.$404
    | Paths.PageTalk_Title__Revision_Get.Responses.$Default
  >;
  /**
   * _page_pdf__title__get - Get a page as PDF
   *
   * Renders the page content as PDF. Format and type are optional parameters and
   * the default values are "a4" for format and "desktop" for type.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "_page_pdf__title__get"(
    parameters?: Parameters<Paths.PagePdf_Title_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PagePdf_Title_Get.Responses.$404
    | Paths.PagePdf_Title_Get.Responses.$503
    | Paths.PagePdf_Title_Get.Responses.$Default
  >;
  /**
   * _page_pdf__title___format__get - Get a page as PDF
   *
   * Renders the page content as PDF. Format and type are optional parameters and
   * the default values are "a4" for format and "desktop" for type.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "_page_pdf__title___format__get"(
    parameters?: Parameters<Paths.PagePdf_Title__Format_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PagePdf_Title__Format_Get.Responses.$404
    | Paths.PagePdf_Title__Format_Get.Responses.$503
    | Paths.PagePdf_Title__Format_Get.Responses.$Default
  >;
  /**
   * _page_pdf__title___format___type__get - Get a page as PDF
   *
   * Renders the page content as PDF. Format and type are optional parameters and
   * the default values are "a4" for format and "desktop" for type.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "_page_pdf__title___format___type__get"(
    parameters?: Parameters<Paths.PagePdf_Title__Format__Type_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.PagePdf_Title__Format__Type_Get.Responses.$404
    | Paths.PagePdf_Title__Format__Type_Get.Responses.$503
    | Paths.PagePdf_Title__Format__Type_Get.Responses.$Default
  >;
  /**
   * aggregatedFeed - Aggregated featured content
   *
   * Provides the aggregated feed content for the given date. The endpoint returns
   * the featured article of the day, most read articles for the previous day, news
   * content and the featured image and video of the day.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "aggregatedFeed"(
    parameters?: Parameters<Paths.AggregatedFeed.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.AggregatedFeed.Responses.$200
    | Paths.AggregatedFeed.Responses.$Default
  >;
  /**
   * _feed_announcements_get - Current announcements to display
   *
   * Gets announcements for display in the official Wikipedia iOS and Android apps.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "_feed_announcements_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<any>;
  /**
   * onThisDay - Events on this day
   *
   * Provides events that historically happened on the provided day and month.
   * Supported types of events are:
   *  - All: all of the following
   *  - Selected: a list of a few selected anniversaries which occur on the provided day and month; often the entries are curated for the current year
   *  - Births: a list of birthdays which happened on the provided day and month
   *  - Deaths: a list of deaths which happened on the provided day and month
   *  - Holidays: a list of fixed holidays celebrated on the provided day and month
   *  - Events: a list of significant events which happened on the provided day and month and which are not covered by the other types yet
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "onThisDay"(
    parameters?: Parameters<Paths.OnThisDay.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.OnThisDay.Responses.$404
    | Paths.OnThisDay.Responses.$501
    | Paths.OnThisDay.Responses.$Default
  >;
  /**
   * _transform_html_to_wikitext_post - Transform HTML to Wikitext
   *
   * Transform [Parsoid HTML](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec)
   * to Wikitext.
   *
   * When converting pre-existing (possibly modified) content, you should
   * pass in the `title`, `revision`, and `If-Match` header. This lets
   * [Parsoid](https://www.mediawiki.org/wiki/Parsoid) preserve small
   * syntactic variations in wikitext, which ensures that diffs are
   * readable.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 25 req/s
   *
   */
  "_transform_html_to_wikitext_post"(
    parameters?: Parameters<Paths.TransformHtmlToWikitextPost.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.TransformHtmlToWikitextPost.Responses.$200
    | Paths.TransformHtmlToWikitextPost.Responses.$403
    | Paths.TransformHtmlToWikitextPost.Responses.$404
    | Paths.TransformHtmlToWikitextPost.Responses.$409
    | Paths.TransformHtmlToWikitextPost.Responses.$410
    | Paths.TransformHtmlToWikitextPost.Responses.$Default
  >;
  /**
   * _transform_html_to_wikitext__title__post - Transform HTML to Wikitext
   *
   * Transform [Parsoid HTML](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec)
   * to Wikitext.
   *
   * When converting pre-existing (possibly modified) content, you should
   * pass in the `title`, `revision`, and `If-Match` header. This lets
   * [Parsoid](https://www.mediawiki.org/wiki/Parsoid) preserve small
   * syntactic variations in wikitext, which ensures that diffs are
   * readable.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 25 req/s
   *
   */
  "_transform_html_to_wikitext__title__post"(
    parameters?: Parameters<
      Paths.TransformHtmlToWikitext_Title_Post.PathParameters &
        Paths.TransformHtmlToWikitext_Title_Post.HeaderParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.TransformHtmlToWikitext_Title_Post.Responses.$200
    | Paths.TransformHtmlToWikitext_Title_Post.Responses.$403
    | Paths.TransformHtmlToWikitext_Title_Post.Responses.$404
    | Paths.TransformHtmlToWikitext_Title_Post.Responses.$409
    | Paths.TransformHtmlToWikitext_Title_Post.Responses.$410
    | Paths.TransformHtmlToWikitext_Title_Post.Responses.$Default
  >;
  /**
   * _transform_html_to_wikitext__title___revision__post - Transform HTML to Wikitext
   *
   * Transform [Parsoid HTML](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec)
   * to Wikitext.
   *
   * When converting pre-existing (possibly modified) content, you should
   * pass in the `title`, `revision`, and `If-Match` header. This lets
   * [Parsoid](https://www.mediawiki.org/wiki/Parsoid) preserve small
   * syntactic variations in wikitext, which ensures that diffs are
   * readable.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 25 req/s
   *
   */
  "_transform_html_to_wikitext__title___revision__post"(
    parameters?: Parameters<
      Paths.TransformHtmlToWikitext_Title__Revision_Post.PathParameters &
        Paths.TransformHtmlToWikitext_Title__Revision_Post.HeaderParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.TransformHtmlToWikitext_Title__Revision_Post.Responses.$200
    | Paths.TransformHtmlToWikitext_Title__Revision_Post.Responses.$403
    | Paths.TransformHtmlToWikitext_Title__Revision_Post.Responses.$404
    | Paths.TransformHtmlToWikitext_Title__Revision_Post.Responses.$409
    | Paths.TransformHtmlToWikitext_Title__Revision_Post.Responses.$410
    | Paths.TransformHtmlToWikitext_Title__Revision_Post.Responses.$Default
  >;
  /**
   * _transform_wikitext_to_html_post - Transform Wikitext to HTML
   *
   * Transform wikitext to HTML. Note that if you set `stash: true`, you
   * also need to supply the title.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 25 req/s (5 req/s when `stash: true`)
   *
   */
  "_transform_wikitext_to_html_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.TransformWikitextToHtmlPost.Responses.$200
    | Paths.TransformWikitextToHtmlPost.Responses.$403
    | Paths.TransformWikitextToHtmlPost.Responses.$404
    | Paths.TransformWikitextToHtmlPost.Responses.$409
    | Paths.TransformWikitextToHtmlPost.Responses.$410
    | Paths.TransformWikitextToHtmlPost.Responses.$Default
  >;
  /**
   * _transform_wikitext_to_html__title__post - Transform Wikitext to HTML
   *
   * Transform wikitext to HTML. Note that if you set `stash: true`, you
   * also need to supply the title.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 25 req/s (5 req/s when `stash: true`)
   *
   */
  "_transform_wikitext_to_html__title__post"(
    parameters?: Parameters<Paths.TransformWikitextToHtml_Title_Post.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.TransformWikitextToHtml_Title_Post.Responses.$200
    | Paths.TransformWikitextToHtml_Title_Post.Responses.$403
    | Paths.TransformWikitextToHtml_Title_Post.Responses.$404
    | Paths.TransformWikitextToHtml_Title_Post.Responses.$409
    | Paths.TransformWikitextToHtml_Title_Post.Responses.$410
    | Paths.TransformWikitextToHtml_Title_Post.Responses.$Default
  >;
  /**
   * _transform_wikitext_to_html__title___revision__post - Transform Wikitext to HTML
   *
   * Transform wikitext to HTML. Note that if you set `stash: true`, you
   * also need to supply the title.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 25 req/s (5 req/s when `stash: true`)
   *
   */
  "_transform_wikitext_to_html__title___revision__post"(
    parameters?: Parameters<Paths.TransformWikitextToHtml_Title__Revision_Post.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.TransformWikitextToHtml_Title__Revision_Post.Responses.$200
    | Paths.TransformWikitextToHtml_Title__Revision_Post.Responses.$403
    | Paths.TransformWikitextToHtml_Title__Revision_Post.Responses.$404
    | Paths.TransformWikitextToHtml_Title__Revision_Post.Responses.$409
    | Paths.TransformWikitextToHtml_Title__Revision_Post.Responses.$410
    | Paths.TransformWikitextToHtml_Title__Revision_Post.Responses.$Default
  >;
  /**
   * _transform_wikitext_to_lint_post - Check Wikitext for lint errors
   *
   * Parse the supplied wikitext and check it for lint errors.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   *
   */
  "_transform_wikitext_to_lint_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.TransformWikitextToLintPost.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.TransformWikitextToLintPost.Responses.$200
    | Paths.TransformWikitextToLintPost.Responses.$404
    | Paths.TransformWikitextToLintPost.Responses.$409
    | Paths.TransformWikitextToLintPost.Responses.$410
    | Paths.TransformWikitextToLintPost.Responses.$Default
  >;
  /**
   * _transform_wikitext_to_lint__title__post - Check Wikitext for lint errors
   *
   * Parse the supplied wikitext and check it for lint errors.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   *
   */
  "_transform_wikitext_to_lint__title__post"(
    parameters?: Parameters<Paths.TransformWikitextToLint_Title_Post.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.TransformWikitextToLint_Title_Post.Responses.$200
    | Paths.TransformWikitextToLint_Title_Post.Responses.$404
    | Paths.TransformWikitextToLint_Title_Post.Responses.$409
    | Paths.TransformWikitextToLint_Title_Post.Responses.$410
    | Paths.TransformWikitextToLint_Title_Post.Responses.$Default
  >;
  /**
   * _transform_wikitext_to_lint__title___revision__post - Check Wikitext for lint errors
   *
   * Parse the supplied wikitext and check it for lint errors.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   *
   */
  "_transform_wikitext_to_lint__title___revision__post"(
    parameters?: Parameters<Paths.TransformWikitextToLint_Title__Revision_Post.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.TransformWikitextToLint_Title__Revision_Post.Responses.$200
    | Paths.TransformWikitextToLint_Title__Revision_Post.Responses.$404
    | Paths.TransformWikitextToLint_Title__Revision_Post.Responses.$409
    | Paths.TransformWikitextToLint_Title__Revision_Post.Responses.$410
    | Paths.TransformWikitextToLint_Title__Revision_Post.Responses.$Default
  >;
  /**
   * transformWikitextToMobileHtml - Transform Wikitext to Mobile HTML
   *
   * Transform wikitext to Mobile HTML.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Stable)
   * - Rate limit: 25 req/s (5 req/s when `stash: true`)
   *
   * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
   *
   */
  "transformWikitextToMobileHtml"(
    parameters?: Parameters<
      Paths.TransformWikitextToMobileHtml.PathParameters &
        Paths.TransformWikitextToMobileHtml.HeaderParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.TransformWikitextToMobileHtml.Responses.$200
    | Paths.TransformWikitextToMobileHtml.Responses.$404
    | Paths.TransformWikitextToMobileHtml.Responses.$Default
  >;
  /**
   * doMT - Machine-translate content
   *
   * Fetches the machine translation for the posted content from the source
   * to the language of this wiki.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "doMT"(
    parameters?: Parameters<Paths.DoMT.PathParameters> | null,
    data?: Paths.DoMT.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<
    Paths.DoMT.Responses.$200 | Paths.DoMT.Responses.$Default
  >;
  /**
   * doMTProvider - Machine-translate content
   *
   * Fetches the machine translation for the posted content from the source
   * to the language of this wiki.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "doMTProvider"(
    parameters?: Parameters<Paths.DoMTProvider.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    Paths.DoMTProvider.Responses.$200 | Paths.DoMTProvider.Responses.$Default
  >;
  /**
   * doDict - Fetch the dictionary meaning of a word
   *
   * Fetches the dictionary meaning of a word from a language and displays
   * it in the target language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "doDict"(
    parameters?: Parameters<Paths.DoDict.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    Paths.DoDict.Responses.$200 | Paths.DoDict.Responses.$Default
  >;
  /**
   * doDictProvider - Fetch the dictionary meaning of a word
   *
   * Fetches the dictionary meaning of a word from a language and displays
   * it in the target language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "doDictProvider"(
    parameters?: Parameters<Paths.DoDictProvider.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.DoDictProvider.Responses.$200
    | Paths.DoDictProvider.Responses.$Default
  >;
  /**
   * _media_math_check__type__post - Check and normalize a TeX formula.
   *
   * Checks the supplied TeX formula for correctness and returns the
   * normalised formula representation as well as information about
   * identifiers. Available types are tex and inline-tex. The response
   * contains the `x-resource-location` header which can be used to retrieve
   * the render of the checked formula in one of the supported rendering
   * formats. Just append the value of the header to `/media/math/{format}/`
   * and perform a GET request against that URL.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   */
  "_media_math_check__type__post"(
    parameters?: Parameters<Paths.MediaMathCheck_Type_Post.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.MediaMathCheck_Type_Post.Responses.$200
    | Paths.MediaMathCheck_Type_Post.Responses.$400
    | Paths.MediaMathCheck_Type_Post.Responses.$Default
  >;
  /**
   * _media_math_formula__hash__get - Get a previously-stored formula
   *
   * Returns the previously-stored formula via `/media/math/check/{type}` for
   * the given hash.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   */
  "_media_math_formula__hash__get"(
    parameters?: Parameters<Paths.MediaMathFormula_Hash_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.MediaMathFormula_Hash_Get.Responses.$200
    | Paths.MediaMathFormula_Hash_Get.Responses.$404
    | Paths.MediaMathFormula_Hash_Get.Responses.$Default
  >;
  /**
   * _media_math_render__format___hash__get - Get rendered formula in the given format.
   *
   * Given a request hash, renders a TeX formula into its mathematic
   * representation in the given format. When a request is issued to the
   * `/media/math/check/{format}` POST endpoint, the response contains the
   * `x-resource-location` header denoting the hash ID of the POST data. Once
   * obtained, this endpoint has to be used to obtain the actual render.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   */
  "_media_math_render__format___hash__get"(
    parameters?: Parameters<Paths.MediaMathRender_Format__Hash_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.MediaMathRender_Format__Hash_Get.Responses.$404
    | Paths.MediaMathRender_Format__Hash_Get.Responses.$Default
  >;
  /**
   * getCitation - Get citation data given an article identifier.
   *
   * Generates citation data given a URL, DOI, PMID, ISBN, or PMCID.
   *
   * See more at [Citoid service documentation](https://www.mediawiki.org/wiki/Citoid)
   *
   * The citation data can be requested in one of the following formats:
   *   - `mediawiki`: format designed for MediaWiki to be used with `templateData`.
   *     Uses [Zotero field names](https://aurimasv.github.io/z2csl/typeMap.xml).
   *   - `mediawiki-basefields`: `mediawiki` format with Zotero `basefield` field names.
   *   - `zotero`: format used by [Zotero](https://www.zotero.org/).
   *   - `bibtex`: format used in conjunction with LaTeX documents.
   *     See [bibtex.org](http://www.bibtex.org/).
   *   - `wikibase`: format designed for [Wikibase](https://www.mediawiki.org/wiki/Extension:Wikibase_Repository).
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "getCitation"(
    parameters?: Parameters<
      Paths.GetCitation.PathParameters & Paths.GetCitation.HeaderParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetCitation.Responses.$404>;
  /**
   * _data_lists_setup_post - Opt in to use reading lists.
   *
   * Must precede other list operations.
   *
   * Request must be authenticated with a MediaWiki session cookie.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_data_lists_setup_post"(
    parameters?: Parameters<Paths.DataListsSetupPost.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataListsSetupPost.Responses.$Default>;
  /**
   * _data_lists_teardown_post - Opt out from using reading lists.
   *
   * Deletes all data. User needs to opt in again before being able to do anything.
   *
   * Request must be authenticated with a MediaWiki session cookie.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_data_lists_teardown_post"(
    parameters?: Parameters<Paths.DataListsTeardownPost.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataListsTeardownPost.Responses.$Default>;
  /**
   * _data_lists__get - Get all lists of the current user.
   *
   * Returns metadata describing the lists of the current user. Might be truncated and include
   * a continuation token.
   *
   * Request must be authenticated with a MediaWiki session cookie.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_data_lists__get"(
    parameters?: Parameters<Paths.DataLists_Get.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataLists_Get.Responses.$Default>;
  /**
   * _data_lists__post - Create a new list for the current user.
   *
   * Creates a new empty list. On name conflict, does nothing and returns the data of an
   * existing list.
   *
   * Request must be authenticated with a MediaWiki session cookie.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   * This endpoint is deprecated and might be removed without warning. Use the batch version
   * instead.
   *
   */
  "_data_lists__post"(
    parameters?: Parameters<Paths.DataLists_Post.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataLists_Post.Responses.$Default>;
  /**
   * _data_lists__id__put - Update a list.
   *
   * List must belong to current user and request must be authenticated with
   * a MediaWiki session cookie. If the name is changed, the new name must not be in use.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_data_lists__id__put"(
    parameters?: Parameters<
      Paths.DataLists_Id_Put.PathParameters &
        Paths.DataLists_Id_Put.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataLists_Id_Put.Responses.$Default>;
  /**
   * _data_lists__id__delete - Delete a list.
   *
   * List must belong to current user and request must be authenticated with
   * a MediaWiki session cookie.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_data_lists__id__delete"(
    parameters?: Parameters<Paths.DataLists_Id_Delete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataLists_Id_Delete.Responses.$Default>;
  /**
   * _data_lists_batch_post - Create multiple new lists for the current user.
   *
   * See `POST /lists/`.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_data_lists_batch_post"(
    parameters?: Parameters<Paths.DataListsBatchPost.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataListsBatchPost.Responses.$Default>;
  /**
   * getListEntries - Get all entries of a given list.
   *
   * Returns pages contained by the given list. Might be truncated and include
   * a continuation token.
   *
   * List must belong to current user and request must be authenticated with
   * a MediaWiki session cookie.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "getListEntries"(
    parameters?: Parameters<
      Paths.GetListEntries.PathParameters & Paths.GetListEntries.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetListEntries.Responses.$Default>;
  /**
   * _data_lists__id__entries__post - Create a new list entry.
   *
   * Creates a new list entry in the given list. On conflict, does nothing and returns the
   * data of an existing list.
   *
   * The list must belong to the current user and the request must be
   * authenticated with a MediaWiki session cookie.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   * This endpoint is deprecated and might be removed without warning. Use the batch version
   * instead.
   *
   */
  "_data_lists__id__entries__post"(
    parameters?: Parameters<
      Paths.DataLists_Id_Entries_Post.PathParameters &
        Paths.DataLists_Id_Entries_Post.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataLists_Id_Entries_Post.Responses.$Default>;
  /**
   * _data_lists__id__entries__entry_id__delete - Delete a list entry.
   *
   * Deletes a given list entry.
   *
   * The list must belong to the current user and the request must be
   * authenticated with a MediaWiki session cookie.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_data_lists__id__entries__entry_id__delete"(
    parameters?: Parameters<Paths.DataLists_Id_Entries_EntryId_Delete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataLists_Id_Entries_EntryId_Delete.Responses.$Default>;
  /**
   * _data_lists__id__entries_batch_post - Create multiple new list entries.
   *
   * See `POST /lists/{id}/entries/`.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_data_lists__id__entries_batch_post"(
    parameters?: Parameters<
      Paths.DataLists_Id_EntriesBatchPost.PathParameters &
        Paths.DataLists_Id_EntriesBatchPost.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataLists_Id_EntriesBatchPost.Responses.$Default>;
  /**
   * _data_lists_pages__project___title__get - Get lists of the current user which contain a given page.
   *
   * Request must be authenticated with a MediaWiki session cookie.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_data_lists_pages__project___title__get"(
    parameters?: Parameters<
      Paths.DataListsPages_Project__Title_Get.PathParameters &
        Paths.DataListsPages_Project__Title_Get.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataListsPages_Project__Title_Get.Responses.$Default>;
  /**
   * _data_lists_changes_since__date__get - Get recent changes to the lists
   *
   * Returns metadata describing lists and entries which have changed. Might be truncated
   * and include a continuation token.
   *
   * Request must be authenticated with a MediaWiki session cookie.
   *
   * For safe synchronization, the date parameter should be taken from the `continue-from`
   * field of a previous `GET /lists/` or `GET /lists/changes/since/{date}` request. This will
   * ensure that no changes are skipped, at the cost of sometimes receiving the same change
   * multitple times. Clients should handle changes in an idempotent way.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_data_lists_changes_since__date__get"(
    parameters?: Parameters<
      Paths.DataListsChangesSince_Date_Get.PathParameters &
        Paths.DataListsChangesSince_Date_Get.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataListsChangesSince_Date_Get.Responses.$Default>;
  /**
   * _data_recommendation_article_creation_translation__from_lang__get - Recommend articles for translation.
   *
   * Recommends articles to be translated from the source
   * to the domain language.
   *
   * See more at [Recommendation API documentation](https://meta.wikimedia.org/wiki/Recommendation_API)
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_data_recommendation_article_creation_translation__from_lang__get"(
    parameters?: Parameters<
      Paths.DataRecommendationArticleCreationTranslation_FromLang_Get.PathParameters &
        Paths.DataRecommendationArticleCreationTranslation_FromLang_Get.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.DataRecommendationArticleCreationTranslation_FromLang_Get.Responses.$200
    | Paths.DataRecommendationArticleCreationTranslation_FromLang_Get.Responses.$Default
  >;
  /**
   * _data_recommendation_article_creation_translation__from_lang___seed_article__get - Recommend articles for translation.
   *
   * Recommends articles to be translated from the source
   * to the domain language.
   *
   * See more at [Recommendation API documentation](https://meta.wikimedia.org/wiki/Recommendation_API)
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_data_recommendation_article_creation_translation__from_lang___seed_article__get"(
    parameters?: Parameters<
      Paths.DataRecommendationArticleCreationTranslation_FromLang__SeedArticle_Get.PathParameters &
        Paths.DataRecommendationArticleCreationTranslation_FromLang__SeedArticle_Get.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.DataRecommendationArticleCreationTranslation_FromLang__SeedArticle_Get.Responses.$200
    | Paths.DataRecommendationArticleCreationTranslation_FromLang__SeedArticle_Get.Responses.$Default
  >;
  /**
   * _data_recommendation_article_creation_morelike__seed_article__get - Recommend missing articles
   *
   * Recommends articles similar to the seed article but are missing
   * from the domain language Wikipedia.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   */
  "_data_recommendation_article_creation_morelike__seed_article__get"(
    parameters?: Parameters<Paths.DataRecommendationArticleCreationMorelike_SeedArticle_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<
    | Paths.DataRecommendationArticleCreationMorelike_SeedArticle_Get.Responses.$200
    | Paths.DataRecommendationArticleCreationMorelike_SeedArticle_Get.Responses.$Default
  >;
  /**
   * _data_css_mobile__type__get - Get CSS for mobile apps.
   *
   * Gets common CSS mobile apps need to properly display pages using Page Content Service.
   * In most cases all of the types are needed (preferably in this order):
   * * base (Common mobile CSS from ResourceLoader)
   * * site (Site-specific, mobile CSS from ResourceLoader, as defined in MediaWiki\:Mobile.css)
   * * pcs (CSS for the Page Content Service)
   *
   * The `base` and `pcs` responses are the same regardless of what domain is used.
   * For these we suggest meta.wikimedia.org.
   *
   * You can still pass pagelib for type, but this is a legacy version of the CSS for
   * existing app clients.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
   *
   * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
   *
   */
  "_data_css_mobile__type__get"(
    parameters?: Parameters<Paths.DataCssMobile_Type_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataCssMobile_Type_Get.Responses.$Default>;
  /**
   * _data_javascript_mobile__type__get - Get JavaScript for mobileapps
   *
   * Gets the JavaScript bundle so that clients can have
   * convenient access to that for consuming the page HTML.
   * Amongst other things,
   * * it allows to detect the platform and through that enable platform specific CSS rules,
   * * has code to lazy load images on the page,
   * * code for collapsing and expanding tables.
   *
   * Valid types are pagelib or pcs. Passing pcs will return the JavaScript for the
   * Page Content Service. Passing pagelib will return a deprecated legacy version
   * of the wikimedia-page-library JavaScript to support existing app clients.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
   *
   * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
   *
   */
  "_data_javascript_mobile__type__get"(
    parameters?: Parameters<Paths.DataJavascriptMobile_Type_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataJavascriptMobile_Type_Get.Responses.$Default>;
  /**
   * _data_i18n__type__get - Get internationalization info
   *
   * Gets internationalization information for the given site. Currently the only
   * supported type is pcs for the Page Content Service.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   */
  "_data_i18n__type__get"(
    parameters?: Parameters<Paths.DataI18n_Type_Get.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DataI18n_Type_Get.Responses.$Default>;
}

export interface PathsDictionary {
  ["/page/"]: {
    /**
     * _page__get - List page-related API entry points.
     *
     * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
     *
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      Paths.Page_Get.Responses.$200 | Paths.Page_Get.Responses.$Default
    >;
  };
  ["/page/title/{title}"]: {
    /**
     * _page_title__title__get - Get revision metadata for a title.
     *
     * Returns the revision metadata for the given title. If a revision ID is provided,
     * metadata for that revision is returned, otherwise the latest revision ID is assumed.
     *
     * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
     *
     */
    "get"(
      parameters?: Parameters<Paths.PageTitle_Title_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PageTitle_Title_Get.Responses.$200
      | Paths.PageTitle_Title_Get.Responses.$404
      | Paths.PageTitle_Title_Get.Responses.$Default
    >;
  };
  ["/page/title/{title}/{revision}"]: {
    /**
     * _page_title__title___revision__get - Get revision metadata for a title.
     *
     * Returns the revision metadata for the given title. If a revision ID is provided,
     * metadata for that revision is returned, otherwise the latest revision ID is assumed.
     *
     * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
     *
     */
    "get"(
      parameters?: Parameters<Paths.PageTitle_Title__Revision_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PageTitle_Title__Revision_Get.Responses.$200
      | Paths.PageTitle_Title__Revision_Get.Responses.$404
      | Paths.PageTitle_Title__Revision_Get.Responses.$Default
    >;
  };
  ["/page/html/{title}"]: {
    /**
     * _page_html__title__get - Get latest HTML for a title.
     *
     * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.PageHtml_Title_Get.PathParameters &
          Paths.PageHtml_Title_Get.QueryParameters &
          Paths.PageHtml_Title_Get.HeaderParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PageHtml_Title_Get.Responses.$200
      | Paths.PageHtml_Title_Get.Responses.$404
      | Paths.PageHtml_Title_Get.Responses.$Default
    >;
    /**
     * _page_html__title__post - Save a new revision using HTML.
     *
     * Save a new revision of a page given in [Parsoid
     * HTML](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec)
     * format.
     *
     * For new pages, or when editting the latest revision of a page,
     * the `base_etag` parameter should be left empty. For editing old revisions,
     * it should contain the `ETag` header of the revision the edit is derived from.
     *
     * The latest page revision ETag header could be provided in the If-Match header
     * to detect edit conflicts. If the new page is created, appropriate user cookies
     * must be provided.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "post"(
      parameters?: Parameters<Paths.PageHtml_Title_Post.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PageHtml_Title_Post.Responses.$200
      | Paths.PageHtml_Title_Post.Responses.$400
      | Paths.PageHtml_Title_Post.Responses.$409
      | Paths.PageHtml_Title_Post.Responses.$Default
    >;
  };
  ["/page/html/{title}/{revision}"]: {
    /**
     * getFormatRevision - Get HTML for a specific title/revision & optionally timeuuid.
     *
     * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.GetFormatRevision.PathParameters &
          Paths.GetFormatRevision.QueryParameters &
          Paths.GetFormatRevision.HeaderParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.GetFormatRevision.Responses.$200
      | Paths.GetFormatRevision.Responses.$400
      | Paths.GetFormatRevision.Responses.$403
      | Paths.GetFormatRevision.Responses.$404
      | Paths.GetFormatRevision.Responses.$Default
    >;
  };
  ["/page/data-parsoid/{title}/{revision}/{tid}"]: {
    /**
     * _page_data_parsoid__title___revision___tid__get - Get data-parsoid metadata for a specific title/revision/tid.
     *
     * Data-parsoid is metadata used by
     * [Parsoid](https://www.mediawiki.org/wiki/Parsoid) to support clean
     * round-tripping conversions between HTML and Wikitext. Among other
     * things, it contains the original Wikitext offsets of each HTML
     * element, keyed by element ID. The format is unstable.
     *
     * The metadata in data-parsoid is specific to a specific HTML render.
     * For this reason, you need to supply the exact `revision` and `tid` as
     * provided in the `ETag` header of the HTML response.
     *
     * Stability: [Stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.PageDataParsoid_Title__Revision__Tid_Get.PathParameters &
          Paths.PageDataParsoid_Title__Revision__Tid_Get.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PageDataParsoid_Title__Revision__Tid_Get.Responses.$400
      | Paths.PageDataParsoid_Title__Revision__Tid_Get.Responses.$403
      | Paths.PageDataParsoid_Title__Revision__Tid_Get.Responses.$404
      | Paths.PageDataParsoid_Title__Revision__Tid_Get.Responses.$Default
    >;
  };
  ["/page/lint/{title}"]: {
    /**
     * _page_lint__title__get - Get the linter errors for a specific title/revision.
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<Paths.PageLint_Title_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PageLint_Title_Get.Responses.$200
      | Paths.PageLint_Title_Get.Responses.$400
      | Paths.PageLint_Title_Get.Responses.$403
      | Paths.PageLint_Title_Get.Responses.$404
      | Paths.PageLint_Title_Get.Responses.$Default
    >;
  };
  ["/page/lint/{title}/{revision}"]: {
    /**
     * _page_lint__title___revision__get - Get the linter errors for a specific title/revision.
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<Paths.PageLint_Title__Revision_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PageLint_Title__Revision_Get.Responses.$200
      | Paths.PageLint_Title__Revision_Get.Responses.$400
      | Paths.PageLint_Title__Revision_Get.Responses.$403
      | Paths.PageLint_Title__Revision_Get.Responses.$404
      | Paths.PageLint_Title__Revision_Get.Responses.$Default
    >;
  };
  ["/page/wikitext/{title}"]: {
    /**
     * _page_wikitext__title__post - Save a new revision of a page using Wikitext.
     *
     * For new pages, or when editting the latest revision of a page,
     * the `base_etag` parameter should be left empty.
     * For editing old revisions, it should contain the ETag header
     * of the revision the edit is derived from.
     *
     * The latest page revision ETag header should be provided in the If-Match header
     * to detect edit conflicts. If the new page is created, appropriate user cookies
     * must be provided.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "post"(
      parameters?: Parameters<Paths.PageWikitext_Title_Post.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PageWikitext_Title_Post.Responses.$201
      | Paths.PageWikitext_Title_Post.Responses.$400
      | Paths.PageWikitext_Title_Post.Responses.$409
      | Paths.PageWikitext_Title_Post.Responses.$Default
    >;
  };
  ["/page/segments/{title}"]: {
    /**
     * _page_segments__title__get - Fetches a segmented page to be used in machine translation
     *
     * Use this end point to fetch the segmented content of a page. Clients should
     * use the returned content in conjunction with the [language transform
     * API](https://wikimedia.org/api/rest_v1/#!/Transform).
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<Paths.PageSegments_Title_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PageSegments_Title_Get.Responses.$200
      | Paths.PageSegments_Title_Get.Responses.$400
      | Paths.PageSegments_Title_Get.Responses.$403
      | Paths.PageSegments_Title_Get.Responses.$404
      | Paths.PageSegments_Title_Get.Responses.$Default
    >;
  };
  ["/page/segments/{title}/{revision}"]: {
    /**
     * _page_segments__title___revision__get - Fetches a segmented page to be used in machine translation
     *
     * Use this end point to fetch the segmented content of a page. Clients should
     * use the returned content in conjunction with the [language transform
     * API](https://wikimedia.org/api/rest_v1/#!/Transform).
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<Paths.PageSegments_Title__Revision_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PageSegments_Title__Revision_Get.Responses.$200
      | Paths.PageSegments_Title__Revision_Get.Responses.$400
      | Paths.PageSegments_Title__Revision_Get.Responses.$403
      | Paths.PageSegments_Title__Revision_Get.Responses.$404
      | Paths.PageSegments_Title__Revision_Get.Responses.$Default
    >;
  };
  ["/page/mobile-sections/{title}"]: {
    /**
     * getSections - Get mobile-optimized HTML sections for a title.
     *
     * Retrieve the latest HTML for a page title optimised for viewing with
     * native mobile applications. Note that the output is split by sections.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
     *
     * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.GetSections.PathParameters &
          Paths.GetSections.QueryParameters &
          Paths.GetSections.HeaderParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      Paths.GetSections.Responses.$404 | Paths.GetSections.Responses.$Default
    >;
  };
  ["/page/mobile-sections/{title}/{revision}"]: {
    /**
     * getSectionsWithRevision - Get mobile-optimized HTML sections for a title.
     *
     * Retrieve the latest HTML for a page title optimised for viewing with
     * native mobile applications. Note that the output is split by sections.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
     *
     * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.GetSectionsWithRevision.PathParameters &
          Paths.GetSectionsWithRevision.QueryParameters &
          Paths.GetSectionsWithRevision.HeaderParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.GetSectionsWithRevision.Responses.$404
      | Paths.GetSectionsWithRevision.Responses.$Default
    >;
  };
  ["/page/mobile-sections-lead/{title}"]: {
    /**
     * getSectionsLead - Get mobile-optimized HTML lead section and metadata for a title.
     *
     * Retrieve the lead section of the latest HTML for a page title optimised
     * for viewing with native mobile applications.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
     *
     * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.GetSectionsLead.PathParameters &
          Paths.GetSectionsLead.QueryParameters &
          Paths.GetSectionsLead.HeaderParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.GetSectionsLead.Responses.$404
      | Paths.GetSectionsLead.Responses.$Default
    >;
  };
  ["/page/mobile-sections-lead/{title}/{revision}"]: {
    /**
     * getSectionsLeadWithRevision - Get mobile-optimized HTML lead section and metadata for a title.
     *
     * Retrieve the lead section of the latest HTML for a page title optimised
     * for viewing with native mobile applications.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
     *
     * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.GetSectionsLeadWithRevision.PathParameters &
          Paths.GetSectionsLeadWithRevision.QueryParameters &
          Paths.GetSectionsLeadWithRevision.HeaderParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.GetSectionsLeadWithRevision.Responses.$404
      | Paths.GetSectionsLeadWithRevision.Responses.$Default
    >;
  };
  ["/page/mobile-sections-remaining/{title}"]: {
    /**
     * getSectionsRemaining - Get non-lead mobile-optimized HTML sections for a title.
     *
     * Retrieve the remainder of the latest HTML (without the lead section) for
     * a page title optimised for viewing with native mobile applications,
     * provided as a JSON object containing the sections.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
     *
     * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.GetSectionsRemaining.PathParameters &
          Paths.GetSectionsRemaining.QueryParameters &
          Paths.GetSectionsRemaining.HeaderParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.GetSectionsRemaining.Responses.$404
      | Paths.GetSectionsRemaining.Responses.$Default
    >;
  };
  ["/page/mobile-sections-remaining/{title}/{revision}"]: {
    /**
     * getSectionsRemainingWithRevision - Get non-lead mobile-optimized HTML sections for a title.
     *
     * Retrieve the remainder of the latest HTML (without the lead section) for
     * a page title optimised for viewing with native mobile applications,
     * provided as a JSON object containing the sections.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
     *
     * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.GetSectionsRemainingWithRevision.PathParameters &
          Paths.GetSectionsRemainingWithRevision.QueryParameters &
          Paths.GetSectionsRemainingWithRevision.HeaderParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.GetSectionsRemainingWithRevision.Responses.$404
      | Paths.GetSectionsRemainingWithRevision.Responses.$Default
    >;
  };
  ["/page/summary/{title}"]: {
    /**
     * _page_summary__title__get - Get basic metadata and simplified article introduction.
     *
     * The summary response includes an extract of the first paragraph of the page in plain text
     * and HTML as well as the type of page. This is useful for page previews (fka. Hovercards,
     * aka. Popups) on the web and link previews in the apps.
     *
     * Stability: [stable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Stable)
     *
     * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.PageSummary_Title_Get.PathParameters &
          Paths.PageSummary_Title_Get.QueryParameters &
          Paths.PageSummary_Title_Get.HeaderParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PageSummary_Title_Get.Responses.$404
      | Paths.PageSummary_Title_Get.Responses.$Default
    >;
  };
  ["/page/media-list/{title}"]: {
    /**
     * getContent-media-list - Get list of media files used on a page.
     *
     * Gets the list of media items (images, audio, and video) in the order in which they appear on a
     * given wiki page.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
     *
     * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.GetContentMediaList.PathParameters &
          Paths.GetContentMediaList.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.GetContentMediaList.Responses.$404
      | Paths.GetContentMediaList.Responses.$Default
    >;
  };
  ["/page/media-list/{title}/{revision}"]: {
    /**
     * getContentWithRevision-media-list - Get list of media files used on a page.
     *
     * Gets the list of media items (images, audio, and video) in the order in which they appear on a
     * given wiki page.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
     *
     * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.GetContentWithRevisionMediaList.PathParameters &
          Paths.GetContentWithRevisionMediaList.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.GetContentWithRevisionMediaList.Responses.$404
      | Paths.GetContentWithRevisionMediaList.Responses.$Default
    >;
  };
  ["/page/mobile-html/{title}"]: {
    /**
     * getContent-mobile-html - Get page content HTML optimized for mobile consumption.
     *
     * Gets the content HTML optimized for mobile consumption for the given page. This content
     * is derived from Parsoid HTML (see `/page/html/{title}` endpoint).
     * The difference to Parsoid HTML is roughly:
     * * Some elements and attributes not needed for the reading case are removed.
     * * LeadIntroductionTransform: The introductory paragraph is moved before an infobox.
     * * RedLinks: Red links are flattened (=turned into span elements).
     * * WidenImage: images that should be displayed in gallery are widened.
     * * Section headings are slightly changed by wrapping the headings inside a div and adding
     *   a span element inside the new div for the edit buttons.
     * * Additional classes are added to img elements to fix issues with non-white backgrounds.
     *   See Theme support below for instructions on how to enable that.
     * * Pagelib CSS files needed to display the content are referenced.
     * * LazyLoadTransform: server-side portion/prep for lazy loading of images.
     * * CollapseTable: server-side portion/prep for collapsing tables.
     *
     * What's not included? What parts of the PageLibrary does a client still have to do?
     * * Theme support: Themes can be turned on by adding a theme class to the root <html> tag.
     *   Possible class names are:
     *   * `pagelib_theme_default`
     *   * `pagelib_theme_dark`
     *   * `pagelib_theme_black`
     *   * `pagelib_theme_sepia`
     *
     *   The pagelib JS has functionality to do that: ThemeTransform.setTheme(document, theme).
     * * Dim images: DimImagesTransform.dim(window, enable)
     * * PlatformTransform.classify(window) to trigger Android and iOS app specific CSS rules
     * * LazyLoadTransformer: client side companion of LazyLoadTransform (note the extra *er*
     * here)
     * * FooterTransformer: seems to be more UI than content, requires I18N, too
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.GetContentMobileHtml.PathParameters &
          Paths.GetContentMobileHtml.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.GetContentMobileHtml.Responses.$200
      | Paths.GetContentMobileHtml.Responses.$404
      | Paths.GetContentMobileHtml.Responses.$Default
    >;
  };
  ["/page/mobile-html/{title}/{revision}"]: {
    /**
     * getContentWithRevision-mobile-html - Get page content HTML optimized for mobile consumption.
     *
     * Gets the content HTML optimized for mobile consumption for the given page. This content
     * is derived from Parsoid HTML (see `/page/html/{title}` endpoint).
     * The difference to Parsoid HTML is roughly:
     * * Some elements and attributes not needed for the reading case are removed.
     * * LeadIntroductionTransform: The introductory paragraph is moved before an infobox.
     * * RedLinks: Red links are flattened (=turned into span elements).
     * * WidenImage: images that should be displayed in gallery are widened.
     * * Section headings are slightly changed by wrapping the headings inside a div and adding
     *   a span element inside the new div for the edit buttons.
     * * Additional classes are added to img elements to fix issues with non-white backgrounds.
     *   See Theme support below for instructions on how to enable that.
     * * Pagelib CSS files needed to display the content are referenced.
     * * LazyLoadTransform: server-side portion/prep for lazy loading of images.
     * * CollapseTable: server-side portion/prep for collapsing tables.
     *
     * What's not included? What parts of the PageLibrary does a client still have to do?
     * * Theme support: Themes can be turned on by adding a theme class to the root <html> tag.
     *   Possible class names are:
     *   * `pagelib_theme_default`
     *   * `pagelib_theme_dark`
     *   * `pagelib_theme_black`
     *   * `pagelib_theme_sepia`
     *
     *   The pagelib JS has functionality to do that: ThemeTransform.setTheme(document, theme).
     * * Dim images: DimImagesTransform.dim(window, enable)
     * * PlatformTransform.classify(window) to trigger Android and iOS app specific CSS rules
     * * LazyLoadTransformer: client side companion of LazyLoadTransform (note the extra *er*
     * here)
     * * FooterTransformer: seems to be more UI than content, requires I18N, too
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.GetContentWithRevisionMobileHtml.PathParameters &
          Paths.GetContentWithRevisionMobileHtml.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.GetContentWithRevisionMobileHtml.Responses.$200
      | Paths.GetContentWithRevisionMobileHtml.Responses.$404
      | Paths.GetContentWithRevisionMobileHtml.Responses.$Default
    >;
  };
  ["/page/mobile-html-offline-resources/{title}"]: {
    /**
     * _page_mobile_html_offline_resources__title__get - Get styles and scripts for offline consumption of mobile-html-formatted pages
     *
     * Provides links to scripts and styles needed for viewing mobile-html-formatted pages offline.
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<Paths.PageMobileHtmlOfflineResources_Title_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.PageMobileHtmlOfflineResources_Title_Get.Responses.$Default>;
  };
  ["/page/mobile-html-offline-resources/{title}/{revision}"]: {
    /**
     * _page_mobile_html_offline_resources__title___revision__get - Get styles and scripts for offline consumption of mobile-html-formatted pages
     *
     * Provides links to scripts and styles needed for viewing mobile-html-formatted pages offline.
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<Paths.PageMobileHtmlOfflineResources_Title__Revision_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.PageMobileHtmlOfflineResources_Title__Revision_Get.Responses.$Default>;
  };
  ["/page/related/{title}"]: {
    /**
     * getRelatedPages - Get pages related to the given title
     *
     * Returns summaries for 20 pages related to the given page. Summaries include
     * page title, namespace and id along with short text description of the page
     * and a thumbnail.
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<Paths.GetRelatedPages.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.GetRelatedPages.Responses.$200
      | Paths.GetRelatedPages.Responses.$404
      | Paths.GetRelatedPages.Responses.$Default
    >;
  };
  ["/page/random/{format}"]: {
    /**
     * _page_random__format__get - Get content for a random page
     *
     * Redirects the client to the URI for the desired format for a random page title.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "get"(
      parameters?: Parameters<Paths.PageRandom_Format_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.PageRandom_Format_Get.Responses.$Default>;
  };
  ["/page/talk/{title}"]: {
    /**
     * _page_talk__title__get - Get structured talk page contents
     *
     * Gets structured talk page contents for the provided title.
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.PageTalk_Title_Get.PathParameters &
          Paths.PageTalk_Title_Get.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PageTalk_Title_Get.Responses.$404
      | Paths.PageTalk_Title_Get.Responses.$Default
    >;
  };
  ["/page/talk/{title}/{revision}"]: {
    /**
     * _page_talk__title___revision__get - Get structured talk page contents
     *
     * Gets structured talk page contents for the provided title.
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.PageTalk_Title__Revision_Get.PathParameters &
          Paths.PageTalk_Title__Revision_Get.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PageTalk_Title__Revision_Get.Responses.$404
      | Paths.PageTalk_Title__Revision_Get.Responses.$Default
    >;
  };
  ["/page/pdf/{title}"]: {
    /**
     * _page_pdf__title__get - Get a page as PDF
     *
     * Renders the page content as PDF. Format and type are optional parameters and
     * the default values are "a4" for format and "desktop" for type.
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<Paths.PagePdf_Title_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PagePdf_Title_Get.Responses.$404
      | Paths.PagePdf_Title_Get.Responses.$503
      | Paths.PagePdf_Title_Get.Responses.$Default
    >;
  };
  ["/page/pdf/{title}/{format}"]: {
    /**
     * _page_pdf__title___format__get - Get a page as PDF
     *
     * Renders the page content as PDF. Format and type are optional parameters and
     * the default values are "a4" for format and "desktop" for type.
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<Paths.PagePdf_Title__Format_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PagePdf_Title__Format_Get.Responses.$404
      | Paths.PagePdf_Title__Format_Get.Responses.$503
      | Paths.PagePdf_Title__Format_Get.Responses.$Default
    >;
  };
  ["/page/pdf/{title}/{format}/{type}"]: {
    /**
     * _page_pdf__title___format___type__get - Get a page as PDF
     *
     * Renders the page content as PDF. Format and type are optional parameters and
     * the default values are "a4" for format and "desktop" for type.
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<Paths.PagePdf_Title__Format__Type_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.PagePdf_Title__Format__Type_Get.Responses.$404
      | Paths.PagePdf_Title__Format__Type_Get.Responses.$503
      | Paths.PagePdf_Title__Format__Type_Get.Responses.$Default
    >;
  };
  ["/feed/featured/{yyyy}/{mm}/{dd}"]: {
    /**
     * aggregatedFeed - Aggregated featured content
     *
     * Provides the aggregated feed content for the given date. The endpoint returns
     * the featured article of the day, most read articles for the previous day, news
     * content and the featured image and video of the day.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "get"(
      parameters?: Parameters<Paths.AggregatedFeed.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.AggregatedFeed.Responses.$200
      | Paths.AggregatedFeed.Responses.$Default
    >;
  };
  ["/feed/announcements"]: {
    /**
     * _feed_announcements_get - Current announcements to display
     *
     * Gets announcements for display in the official Wikipedia iOS and Android apps.
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<any>;
  };
  ["/feed/onthisday/{type}/{mm}/{dd}"]: {
    /**
     * onThisDay - Events on this day
     *
     * Provides events that historically happened on the provided day and month.
     * Supported types of events are:
     *  - All: all of the following
     *  - Selected: a list of a few selected anniversaries which occur on the provided day and month; often the entries are curated for the current year
     *  - Births: a list of birthdays which happened on the provided day and month
     *  - Deaths: a list of deaths which happened on the provided day and month
     *  - Holidays: a list of fixed holidays celebrated on the provided day and month
     *  - Events: a list of significant events which happened on the provided day and month and which are not covered by the other types yet
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<Paths.OnThisDay.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.OnThisDay.Responses.$404
      | Paths.OnThisDay.Responses.$501
      | Paths.OnThisDay.Responses.$Default
    >;
  };
  ["/transform/html/to/wikitext"]: {
    /**
     * _transform_html_to_wikitext_post - Transform HTML to Wikitext
     *
     * Transform [Parsoid HTML](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec)
     * to Wikitext.
     *
     * When converting pre-existing (possibly modified) content, you should
     * pass in the `title`, `revision`, and `If-Match` header. This lets
     * [Parsoid](https://www.mediawiki.org/wiki/Parsoid) preserve small
     * syntactic variations in wikitext, which ensures that diffs are
     * readable.
     *
     * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
     * - Rate limit: 25 req/s
     *
     */
    "post"(
      parameters?: Parameters<Paths.TransformHtmlToWikitextPost.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.TransformHtmlToWikitextPost.Responses.$200
      | Paths.TransformHtmlToWikitextPost.Responses.$403
      | Paths.TransformHtmlToWikitextPost.Responses.$404
      | Paths.TransformHtmlToWikitextPost.Responses.$409
      | Paths.TransformHtmlToWikitextPost.Responses.$410
      | Paths.TransformHtmlToWikitextPost.Responses.$Default
    >;
  };
  ["/transform/html/to/wikitext/{title}"]: {
    /**
     * _transform_html_to_wikitext__title__post - Transform HTML to Wikitext
     *
     * Transform [Parsoid HTML](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec)
     * to Wikitext.
     *
     * When converting pre-existing (possibly modified) content, you should
     * pass in the `title`, `revision`, and `If-Match` header. This lets
     * [Parsoid](https://www.mediawiki.org/wiki/Parsoid) preserve small
     * syntactic variations in wikitext, which ensures that diffs are
     * readable.
     *
     * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
     * - Rate limit: 25 req/s
     *
     */
    "post"(
      parameters?: Parameters<
        Paths.TransformHtmlToWikitext_Title_Post.PathParameters &
          Paths.TransformHtmlToWikitext_Title_Post.HeaderParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.TransformHtmlToWikitext_Title_Post.Responses.$200
      | Paths.TransformHtmlToWikitext_Title_Post.Responses.$403
      | Paths.TransformHtmlToWikitext_Title_Post.Responses.$404
      | Paths.TransformHtmlToWikitext_Title_Post.Responses.$409
      | Paths.TransformHtmlToWikitext_Title_Post.Responses.$410
      | Paths.TransformHtmlToWikitext_Title_Post.Responses.$Default
    >;
  };
  ["/transform/html/to/wikitext/{title}/{revision}"]: {
    /**
     * _transform_html_to_wikitext__title___revision__post - Transform HTML to Wikitext
     *
     * Transform [Parsoid HTML](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec)
     * to Wikitext.
     *
     * When converting pre-existing (possibly modified) content, you should
     * pass in the `title`, `revision`, and `If-Match` header. This lets
     * [Parsoid](https://www.mediawiki.org/wiki/Parsoid) preserve small
     * syntactic variations in wikitext, which ensures that diffs are
     * readable.
     *
     * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
     * - Rate limit: 25 req/s
     *
     */
    "post"(
      parameters?: Parameters<
        Paths.TransformHtmlToWikitext_Title__Revision_Post.PathParameters &
          Paths.TransformHtmlToWikitext_Title__Revision_Post.HeaderParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.TransformHtmlToWikitext_Title__Revision_Post.Responses.$200
      | Paths.TransformHtmlToWikitext_Title__Revision_Post.Responses.$403
      | Paths.TransformHtmlToWikitext_Title__Revision_Post.Responses.$404
      | Paths.TransformHtmlToWikitext_Title__Revision_Post.Responses.$409
      | Paths.TransformHtmlToWikitext_Title__Revision_Post.Responses.$410
      | Paths.TransformHtmlToWikitext_Title__Revision_Post.Responses.$Default
    >;
  };
  ["/transform/wikitext/to/html"]: {
    /**
     * _transform_wikitext_to_html_post - Transform Wikitext to HTML
     *
     * Transform wikitext to HTML. Note that if you set `stash: true`, you
     * also need to supply the title.
     *
     * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
     * - Rate limit: 25 req/s (5 req/s when `stash: true`)
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.TransformWikitextToHtmlPost.Responses.$200
      | Paths.TransformWikitextToHtmlPost.Responses.$403
      | Paths.TransformWikitextToHtmlPost.Responses.$404
      | Paths.TransformWikitextToHtmlPost.Responses.$409
      | Paths.TransformWikitextToHtmlPost.Responses.$410
      | Paths.TransformWikitextToHtmlPost.Responses.$Default
    >;
  };
  ["/transform/wikitext/to/html/{title}"]: {
    /**
     * _transform_wikitext_to_html__title__post - Transform Wikitext to HTML
     *
     * Transform wikitext to HTML. Note that if you set `stash: true`, you
     * also need to supply the title.
     *
     * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
     * - Rate limit: 25 req/s (5 req/s when `stash: true`)
     *
     */
    "post"(
      parameters?: Parameters<Paths.TransformWikitextToHtml_Title_Post.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.TransformWikitextToHtml_Title_Post.Responses.$200
      | Paths.TransformWikitextToHtml_Title_Post.Responses.$403
      | Paths.TransformWikitextToHtml_Title_Post.Responses.$404
      | Paths.TransformWikitextToHtml_Title_Post.Responses.$409
      | Paths.TransformWikitextToHtml_Title_Post.Responses.$410
      | Paths.TransformWikitextToHtml_Title_Post.Responses.$Default
    >;
  };
  ["/transform/wikitext/to/html/{title}/{revision}"]: {
    /**
     * _transform_wikitext_to_html__title___revision__post - Transform Wikitext to HTML
     *
     * Transform wikitext to HTML. Note that if you set `stash: true`, you
     * also need to supply the title.
     *
     * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
     * - Rate limit: 25 req/s (5 req/s when `stash: true`)
     *
     */
    "post"(
      parameters?: Parameters<Paths.TransformWikitextToHtml_Title__Revision_Post.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.TransformWikitextToHtml_Title__Revision_Post.Responses.$200
      | Paths.TransformWikitextToHtml_Title__Revision_Post.Responses.$403
      | Paths.TransformWikitextToHtml_Title__Revision_Post.Responses.$404
      | Paths.TransformWikitextToHtml_Title__Revision_Post.Responses.$409
      | Paths.TransformWikitextToHtml_Title__Revision_Post.Responses.$410
      | Paths.TransformWikitextToHtml_Title__Revision_Post.Responses.$Default
    >;
  };
  ["/transform/wikitext/to/lint"]: {
    /**
     * _transform_wikitext_to_lint_post - Check Wikitext for lint errors
     *
     * Parse the supplied wikitext and check it for lint errors.
     *
     * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     * - Rate limit: 25 req/s
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.TransformWikitextToLintPost.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.TransformWikitextToLintPost.Responses.$200
      | Paths.TransformWikitextToLintPost.Responses.$404
      | Paths.TransformWikitextToLintPost.Responses.$409
      | Paths.TransformWikitextToLintPost.Responses.$410
      | Paths.TransformWikitextToLintPost.Responses.$Default
    >;
  };
  ["/transform/wikitext/to/lint/{title}"]: {
    /**
     * _transform_wikitext_to_lint__title__post - Check Wikitext for lint errors
     *
     * Parse the supplied wikitext and check it for lint errors.
     *
     * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     * - Rate limit: 25 req/s
     *
     */
    "post"(
      parameters?: Parameters<Paths.TransformWikitextToLint_Title_Post.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.TransformWikitextToLint_Title_Post.Responses.$200
      | Paths.TransformWikitextToLint_Title_Post.Responses.$404
      | Paths.TransformWikitextToLint_Title_Post.Responses.$409
      | Paths.TransformWikitextToLint_Title_Post.Responses.$410
      | Paths.TransformWikitextToLint_Title_Post.Responses.$Default
    >;
  };
  ["/transform/wikitext/to/lint/{title}/{revision}"]: {
    /**
     * _transform_wikitext_to_lint__title___revision__post - Check Wikitext for lint errors
     *
     * Parse the supplied wikitext and check it for lint errors.
     *
     * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     * - Rate limit: 25 req/s
     *
     */
    "post"(
      parameters?: Parameters<Paths.TransformWikitextToLint_Title__Revision_Post.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.TransformWikitextToLint_Title__Revision_Post.Responses.$200
      | Paths.TransformWikitextToLint_Title__Revision_Post.Responses.$404
      | Paths.TransformWikitextToLint_Title__Revision_Post.Responses.$409
      | Paths.TransformWikitextToLint_Title__Revision_Post.Responses.$410
      | Paths.TransformWikitextToLint_Title__Revision_Post.Responses.$Default
    >;
  };
  ["/transform/wikitext/to/mobile-html/{title}"]: {
    /**
     * transformWikitextToMobileHtml - Transform Wikitext to Mobile HTML
     *
     * Transform wikitext to Mobile HTML.
     *
     * - Stability: [stable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Stable)
     * - Rate limit: 25 req/s (5 req/s when `stash: true`)
     *
     * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
     *
     */
    "post"(
      parameters?: Parameters<
        Paths.TransformWikitextToMobileHtml.PathParameters &
          Paths.TransformWikitextToMobileHtml.HeaderParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.TransformWikitextToMobileHtml.Responses.$200
      | Paths.TransformWikitextToMobileHtml.Responses.$404
      | Paths.TransformWikitextToMobileHtml.Responses.$Default
    >;
  };
  ["/transform/html/from/{from}"]: {
    /**
     * doMT - Machine-translate content
     *
     * Fetches the machine translation for the posted content from the source
     * to the language of this wiki.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "post"(
      parameters?: Parameters<Paths.DoMT.PathParameters> | null,
      data?: Paths.DoMT.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<
      Paths.DoMT.Responses.$200 | Paths.DoMT.Responses.$Default
    >;
  };
  ["/transform/html/from/{from}/{provider}"]: {
    /**
     * doMTProvider - Machine-translate content
     *
     * Fetches the machine translation for the posted content from the source
     * to the language of this wiki.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "post"(
      parameters?: Parameters<Paths.DoMTProvider.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      Paths.DoMTProvider.Responses.$200 | Paths.DoMTProvider.Responses.$Default
    >;
  };
  ["/transform/word/from/{from}/{word}"]: {
    /**
     * doDict - Fetch the dictionary meaning of a word
     *
     * Fetches the dictionary meaning of a word from a language and displays
     * it in the target language.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "get"(
      parameters?: Parameters<Paths.DoDict.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      Paths.DoDict.Responses.$200 | Paths.DoDict.Responses.$Default
    >;
  };
  ["/transform/word/from/{from}/{word}/{provider}"]: {
    /**
     * doDictProvider - Fetch the dictionary meaning of a word
     *
     * Fetches the dictionary meaning of a word from a language and displays
     * it in the target language.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "get"(
      parameters?: Parameters<Paths.DoDictProvider.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.DoDictProvider.Responses.$200
      | Paths.DoDictProvider.Responses.$Default
    >;
  };
  ["/media/math/check/{type}"]: {
    /**
     * _media_math_check__type__post - Check and normalize a TeX formula.
     *
     * Checks the supplied TeX formula for correctness and returns the
     * normalised formula representation as well as information about
     * identifiers. Available types are tex and inline-tex. The response
     * contains the `x-resource-location` header which can be used to retrieve
     * the render of the checked formula in one of the supported rendering
     * formats. Just append the value of the header to `/media/math/{format}/`
     * and perform a GET request against that URL.
     *
     * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
     *
     */
    "post"(
      parameters?: Parameters<Paths.MediaMathCheck_Type_Post.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.MediaMathCheck_Type_Post.Responses.$200
      | Paths.MediaMathCheck_Type_Post.Responses.$400
      | Paths.MediaMathCheck_Type_Post.Responses.$Default
    >;
  };
  ["/media/math/formula/{hash}"]: {
    /**
     * _media_math_formula__hash__get - Get a previously-stored formula
     *
     * Returns the previously-stored formula via `/media/math/check/{type}` for
     * the given hash.
     *
     * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
     *
     */
    "get"(
      parameters?: Parameters<Paths.MediaMathFormula_Hash_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.MediaMathFormula_Hash_Get.Responses.$200
      | Paths.MediaMathFormula_Hash_Get.Responses.$404
      | Paths.MediaMathFormula_Hash_Get.Responses.$Default
    >;
  };
  ["/media/math/render/{format}/{hash}"]: {
    /**
     * _media_math_render__format___hash__get - Get rendered formula in the given format.
     *
     * Given a request hash, renders a TeX formula into its mathematic
     * representation in the given format. When a request is issued to the
     * `/media/math/check/{format}` POST endpoint, the response contains the
     * `x-resource-location` header denoting the hash ID of the POST data. Once
     * obtained, this endpoint has to be used to obtain the actual render.
     *
     * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
     *
     */
    "get"(
      parameters?: Parameters<Paths.MediaMathRender_Format__Hash_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.MediaMathRender_Format__Hash_Get.Responses.$404
      | Paths.MediaMathRender_Format__Hash_Get.Responses.$Default
    >;
  };
  ["/data/citation/{format}/{query}"]: {
    /**
     * getCitation - Get citation data given an article identifier.
     *
     * Generates citation data given a URL, DOI, PMID, ISBN, or PMCID.
     *
     * See more at [Citoid service documentation](https://www.mediawiki.org/wiki/Citoid)
     *
     * The citation data can be requested in one of the following formats:
     *   - `mediawiki`: format designed for MediaWiki to be used with `templateData`.
     *     Uses [Zotero field names](https://aurimasv.github.io/z2csl/typeMap.xml).
     *   - `mediawiki-basefields`: `mediawiki` format with Zotero `basefield` field names.
     *   - `zotero`: format used by [Zotero](https://www.zotero.org/).
     *   - `bibtex`: format used in conjunction with LaTeX documents.
     *     See [bibtex.org](http://www.bibtex.org/).
     *   - `wikibase`: format designed for [Wikibase](https://www.mediawiki.org/wiki/Extension:Wikibase_Repository).
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.GetCitation.PathParameters & Paths.GetCitation.HeaderParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetCitation.Responses.$404>;
  };
  ["/data/lists/setup"]: {
    /**
     * _data_lists_setup_post - Opt in to use reading lists.
     *
     * Must precede other list operations.
     *
     * Request must be authenticated with a MediaWiki session cookie.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "post"(
      parameters?: Parameters<Paths.DataListsSetupPost.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataListsSetupPost.Responses.$Default>;
  };
  ["/data/lists/teardown"]: {
    /**
     * _data_lists_teardown_post - Opt out from using reading lists.
     *
     * Deletes all data. User needs to opt in again before being able to do anything.
     *
     * Request must be authenticated with a MediaWiki session cookie.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "post"(
      parameters?: Parameters<Paths.DataListsTeardownPost.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataListsTeardownPost.Responses.$Default>;
  };
  ["/data/lists/"]: {
    /**
     * _data_lists__get - Get all lists of the current user.
     *
     * Returns metadata describing the lists of the current user. Might be truncated and include
     * a continuation token.
     *
     * Request must be authenticated with a MediaWiki session cookie.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "get"(
      parameters?: Parameters<Paths.DataLists_Get.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataLists_Get.Responses.$Default>;
    /**
     * _data_lists__post - Create a new list for the current user.
     *
     * Creates a new empty list. On name conflict, does nothing and returns the data of an
     * existing list.
     *
     * Request must be authenticated with a MediaWiki session cookie.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     * This endpoint is deprecated and might be removed without warning. Use the batch version
     * instead.
     *
     */
    "post"(
      parameters?: Parameters<Paths.DataLists_Post.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataLists_Post.Responses.$Default>;
  };
  ["/data/lists/{id}"]: {
    /**
     * _data_lists__id__put - Update a list.
     *
     * List must belong to current user and request must be authenticated with
     * a MediaWiki session cookie. If the name is changed, the new name must not be in use.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "put"(
      parameters?: Parameters<
        Paths.DataLists_Id_Put.PathParameters &
          Paths.DataLists_Id_Put.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataLists_Id_Put.Responses.$Default>;
    /**
     * _data_lists__id__delete - Delete a list.
     *
     * List must belong to current user and request must be authenticated with
     * a MediaWiki session cookie.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "delete"(
      parameters?: Parameters<Paths.DataLists_Id_Delete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataLists_Id_Delete.Responses.$Default>;
  };
  ["/data/lists/batch"]: {
    /**
     * _data_lists_batch_post - Create multiple new lists for the current user.
     *
     * See `POST /lists/`.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "post"(
      parameters?: Parameters<Paths.DataListsBatchPost.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataListsBatchPost.Responses.$Default>;
  };
  ["/data/lists/{id}/entries/"]: {
    /**
     * getListEntries - Get all entries of a given list.
     *
     * Returns pages contained by the given list. Might be truncated and include
     * a continuation token.
     *
     * List must belong to current user and request must be authenticated with
     * a MediaWiki session cookie.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.GetListEntries.PathParameters &
          Paths.GetListEntries.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetListEntries.Responses.$Default>;
    /**
     * _data_lists__id__entries__post - Create a new list entry.
     *
     * Creates a new list entry in the given list. On conflict, does nothing and returns the
     * data of an existing list.
     *
     * The list must belong to the current user and the request must be
     * authenticated with a MediaWiki session cookie.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     * This endpoint is deprecated and might be removed without warning. Use the batch version
     * instead.
     *
     */
    "post"(
      parameters?: Parameters<
        Paths.DataLists_Id_Entries_Post.PathParameters &
          Paths.DataLists_Id_Entries_Post.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataLists_Id_Entries_Post.Responses.$Default>;
  };
  ["/data/lists/{id}/entries/{entry_id}"]: {
    /**
     * _data_lists__id__entries__entry_id__delete - Delete a list entry.
     *
     * Deletes a given list entry.
     *
     * The list must belong to the current user and the request must be
     * authenticated with a MediaWiki session cookie.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "delete"(
      parameters?: Parameters<Paths.DataLists_Id_Entries_EntryId_Delete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataLists_Id_Entries_EntryId_Delete.Responses.$Default>;
  };
  ["/data/lists/{id}/entries/batch"]: {
    /**
     * _data_lists__id__entries_batch_post - Create multiple new list entries.
     *
     * See `POST /lists/{id}/entries/`.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "post"(
      parameters?: Parameters<
        Paths.DataLists_Id_EntriesBatchPost.PathParameters &
          Paths.DataLists_Id_EntriesBatchPost.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataLists_Id_EntriesBatchPost.Responses.$Default>;
  };
  ["/data/lists/pages/{project}/{title}"]: {
    /**
     * _data_lists_pages__project___title__get - Get lists of the current user which contain a given page.
     *
     * Request must be authenticated with a MediaWiki session cookie.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.DataListsPages_Project__Title_Get.PathParameters &
          Paths.DataListsPages_Project__Title_Get.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataListsPages_Project__Title_Get.Responses.$Default>;
  };
  ["/data/lists/changes/since/{date}"]: {
    /**
     * _data_lists_changes_since__date__get - Get recent changes to the lists
     *
     * Returns metadata describing lists and entries which have changed. Might be truncated
     * and include a continuation token.
     *
     * Request must be authenticated with a MediaWiki session cookie.
     *
     * For safe synchronization, the date parameter should be taken from the `continue-from`
     * field of a previous `GET /lists/` or `GET /lists/changes/since/{date}` request. This will
     * ensure that no changes are skipped, at the cost of sometimes receiving the same change
     * multitple times. Clients should handle changes in an idempotent way.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.DataListsChangesSince_Date_Get.PathParameters &
          Paths.DataListsChangesSince_Date_Get.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataListsChangesSince_Date_Get.Responses.$Default>;
  };
  ["/data/recommendation/article/creation/translation/{from_lang}"]: {
    /**
     * _data_recommendation_article_creation_translation__from_lang__get - Recommend articles for translation.
     *
     * Recommends articles to be translated from the source
     * to the domain language.
     *
     * See more at [Recommendation API documentation](https://meta.wikimedia.org/wiki/Recommendation_API)
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.DataRecommendationArticleCreationTranslation_FromLang_Get.PathParameters &
          Paths.DataRecommendationArticleCreationTranslation_FromLang_Get.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.DataRecommendationArticleCreationTranslation_FromLang_Get.Responses.$200
      | Paths.DataRecommendationArticleCreationTranslation_FromLang_Get.Responses.$Default
    >;
  };
  ["/data/recommendation/article/creation/translation/{from_lang}/{seed_article}"]: {
    /**
     * _data_recommendation_article_creation_translation__from_lang___seed_article__get - Recommend articles for translation.
     *
     * Recommends articles to be translated from the source
     * to the domain language.
     *
     * See more at [Recommendation API documentation](https://meta.wikimedia.org/wiki/Recommendation_API)
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "get"(
      parameters?: Parameters<
        Paths.DataRecommendationArticleCreationTranslation_FromLang__SeedArticle_Get.PathParameters &
          Paths.DataRecommendationArticleCreationTranslation_FromLang__SeedArticle_Get.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.DataRecommendationArticleCreationTranslation_FromLang__SeedArticle_Get.Responses.$200
      | Paths.DataRecommendationArticleCreationTranslation_FromLang__SeedArticle_Get.Responses.$Default
    >;
  };
  ["/data/recommendation/article/creation/morelike/{seed_article}"]: {
    /**
     * _data_recommendation_article_creation_morelike__seed_article__get - Recommend missing articles
     *
     * Recommends articles similar to the seed article but are missing
     * from the domain language Wikipedia.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
     *
     */
    "get"(
      parameters?: Parameters<Paths.DataRecommendationArticleCreationMorelike_SeedArticle_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<
      | Paths.DataRecommendationArticleCreationMorelike_SeedArticle_Get.Responses.$200
      | Paths.DataRecommendationArticleCreationMorelike_SeedArticle_Get.Responses.$Default
    >;
  };
  ["/data/css/mobile/{type}"]: {
    /**
     * _data_css_mobile__type__get - Get CSS for mobile apps.
     *
     * Gets common CSS mobile apps need to properly display pages using Page Content Service.
     * In most cases all of the types are needed (preferably in this order):
     * * base (Common mobile CSS from ResourceLoader)
     * * site (Site-specific, mobile CSS from ResourceLoader, as defined in MediaWiki\:Mobile.css)
     * * pcs (CSS for the Page Content Service)
     *
     * The `base` and `pcs` responses are the same regardless of what domain is used.
     * For these we suggest meta.wikimedia.org.
     *
     * You can still pass pagelib for type, but this is a legacy version of the CSS for
     * existing app clients.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
     *
     * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
     *
     */
    "get"(
      parameters?: Parameters<Paths.DataCssMobile_Type_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataCssMobile_Type_Get.Responses.$Default>;
  };
  ["/data/javascript/mobile/{type}"]: {
    /**
     * _data_javascript_mobile__type__get - Get JavaScript for mobileapps
     *
     * Gets the JavaScript bundle so that clients can have
     * convenient access to that for consuming the page HTML.
     * Amongst other things,
     * * it allows to detect the platform and through that enable platform specific CSS rules,
     * * has code to lazy load images on the page,
     * * code for collapsing and expanding tables.
     *
     * Valid types are pagelib or pcs. Passing pcs will return the JavaScript for the
     * Page Content Service. Passing pagelib will return a deprecated legacy version
     * of the wikimedia-page-library JavaScript to support existing app clients.
     *
     * Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
     *
     * Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
     *
     */
    "get"(
      parameters?: Parameters<Paths.DataJavascriptMobile_Type_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataJavascriptMobile_Type_Get.Responses.$Default>;
  };
  ["/data/i18n/{type}"]: {
    /**
     * _data_i18n__type__get - Get internationalization info
     *
     * Gets internationalization information for the given site. Currently the only
     * supported type is pcs for the Page Content Service.
     *
     * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
     *
     */
    "get"(
      parameters?: Parameters<Paths.DataI18n_Type_Get.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DataI18n_Type_Get.Responses.$Default>;
  };
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>;
