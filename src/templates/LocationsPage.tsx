import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
  TemplateConfig
} from "@yext/pages";
import "../index.css";
import {
  SearchHeadlessProvider,
  provideHeadless,
  HeadlessConfig,
  SandboxEndpoints,
  useSearchState
  
} from "@yext/search-headless-react";
import {
  LocationBiasMethod,
  SearchTypeEnum,
  useAnswersActions,
  useAnswersState,
} from "@yext/answers-headless-react";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
  SpellCheck,
  ResultsCount,
  Pagination,
  AlternativeVerticals,
  AppliedFilters,
  DirectAnswer,
  LocationBias
} from "@yext/search-ui-react";

import { ArticlesCard } from '../components/cards/ArticlesCard';
import Navigation from '../components/Navigation';
import PageLayout from "../components/PageLayout";
import { answersHeadlessConfig } from '../config/answersHeadlessConfig';
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";
import { LocationCard } from "../components/cards/LocationCard";
import LocationResults from "../components/LocationResults";
import { LocationProvider } from "../components/LocationContext";

export const config: TemplateConfig = {
  stream: {
    $id: "header-and-footer",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["header-and-footer"] 
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};


export const getPath: GetPath<TemplateProps> = () => {
  return "/locations";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
    return {
      title: `Community Fibre | AS`,
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
    };
  };

answersHeadlessConfig.verticalKey = "locations";

const searcher = provideHeadless(answersHeadlessConfig);

const LocationsPage: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {

  
const {
  _site
} = document;
// let footerHelpMenu = _site.c_useful_links.headerLinksHeading;
// let footerHElpSubMenus = _site.c_useful_links.links;
// let headerProps = _site.c_header_links;
// console.log(_site.c_useful_links.headerLinksHeading,"Sites");
  // const {
  //   _site
  // } = document;


  
  return (
    <>
      <Header upperHeaderLinks={_site.c_upperPart} lowerHeaderLinks={_site.c_lowerPart}/>
      <SearchHeadlessProvider searcher={searcher}>
      <LocationProvider>
        <div className="px-4 py-8">
          <div className="mx-auto flex max-w-5xl flex-col">
            <SearchBar placeholder='Search...' />
            <Navigation />
            <DirectAnswer />
            <SpellCheck />
            <ResultsCount />
            <AppliedFilters hiddenFields={['builtin.entityType']} />
            {/* <VerticalResults CardComponent={LocationCard} /> */}
            <LocationResults
                  verticalKey="locations"
                  cardConfig={{ CardComponent: LocationCard }}
                />
            <LocationBias />
          </div>
          <Pagination />
        </div>
        </LocationProvider>
      </SearchHeadlessProvider>
      <Footer houseLender={_site.c_housingLender} office={_site.c_office} />
    </>
  );


};

export default LocationsPage;
