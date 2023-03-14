import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
  TemplateConfig,
} from "@yext/pages";
import "../index.css";
import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import {
  SearchBar,
  SpellCheck,
  Pagination,
  DirectAnswer,  
} from "@yext/search-ui-react";
import { universalResultsConfig } from '../config/universalResultsConfig';
import UniversalResults from '../components/UniversalResults';
import Navigation from '../components/Navigation';
import { answersHeadlessConfig } from '../config/answersHeadlessConfig';
import Header from "../components/commons/header";
import Footer from "../components/commons/footer";


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

const universalResultsFilterConfig = {
  show: false
};



export const getPath: GetPath<TemplateProps> = () => {
  return "/index.html";
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

const searcher = provideHeadless(answersHeadlessConfig);

const IndexPage: Template<TemplateRenderProps> = ({
  document
}) => {

 const {
  _site
 } = document
 console.log(_site,"_site");
// let headerProps = _site.c_header_links;




  return (
    <>
    <Header upperHeaderLinks={_site.c_upperPart} lowerHeaderLinks={_site.c_lowerPart}/>
    <SearchHeadlessProvider searcher={searcher}>
     <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <SearchBar placeholder='Search...' />
          
          <Navigation />
          <SpellCheck />
          <DirectAnswer />
          <UniversalResults
            appliedFiltersConfig={universalResultsFilterConfig}
            verticalConfigs={universalResultsConfig}
          />
        </div>
        <Pagination />
      </div>
    </SearchHeadlessProvider>
    <Footer houseLender={_site.c_housingLender} office={_site.c_office} />
    </>
  );
};

export default IndexPage;

