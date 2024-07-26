import { Country } from "./country";

export interface CacheStore {
    byCapital: TermCountries;
    byRegion: RegionCountries;
    byCountry: TermCountries;
}

export interface TermCountries {
    term: string;
    countries: Country[];
}
export interface RegionCountries {
   
    region: string;
    countries: Country[] ;
}