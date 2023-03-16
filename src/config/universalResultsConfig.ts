import { FaqCard } from '../components/cards/FaqCards';
import { VerticalConfig } from '../components/UniversalResults';
import { LocationCard } from '../components/cards/LocationCard';
import LocationSection from '../sections/LocationSection';
import { ProductsCard } from '../components/cards/ProductsCard';

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  locations: {
    SectionComponent: LocationSection,
    label: 'Locations',
    viewAllButton: true,
    cardConfig: {
      CardComponent: LocationCard,
      showOrdinal: false
    }
  },
  faqs: {
    label: 'FAQs',
    viewAllButton: true,
    cardConfig: {
      CardComponent: FaqCard,
      showOrdinal: false
    }
  },
  insurances: {
    label: 'Insurance',
    viewAllButton: true,
    cardConfig: {
      CardComponent: ProductsCard,
      showOrdinal: false
    }
  }
  // },
  // video: {
  //   label: 'Videos',
  //   viewAllButton: true,
  //   cardConfig: {
  //     CardComponent: VideosCard,
  //     showOrdinal: false
  //   }
  // },
  // provider_switching: {
  //   label: 'Provider Switching',
  //   viewAllButton: true,
  //   cardConfig: {
  //     CardComponent: ProviderSwitchingCard,
  //     showOrdinal: false
  //   }
  // }
  //  
}