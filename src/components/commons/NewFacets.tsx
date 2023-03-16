import { useSearchState, useSearchActions, DisplayableFacetOption } from '@yext/search-headless-react'
import * as React from 'react';
import { CompositionMethod, useComposedCssClasses } from '../hooks/useComposedCssClasses';
import renderCheckboxOption from '../utils/renderCheckboxOption';



interface FacetsProps {
  searchOnChange?: boolean,
  searchable?: boolean,
  collapsible?: boolean,
  defaultExpanded?: boolean,
  facetConfigs?: Record<string, FacetConfig>,
  customCssClasses?: FacetsCssClasses,
  cssCompositionMethod?: CompositionMethod
}

interface FacetsCssClasses extends FacetCssClasses {
  container?: string,
  divider?: string,
  buttonsContainer?: string,
  button?: string
}


export default function NewFacets (props: FacetsProps): JSX.Element {
    const { 
      searchOnChange,
      searchable,
      collapsible,
      defaultExpanded,
      facetConfigs = {},
      customCssClasses,
      cssCompositionMethod
    } = props;
    
    
  
    
    return(
        <>
            <p>Facets Here</p>
        </>
    )

}