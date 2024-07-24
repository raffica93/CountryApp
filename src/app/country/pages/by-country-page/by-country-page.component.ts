import { Component } from '@angular/core';
import { Country } from '../../interfacce/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {


  public country:Country[] = [];
  constructor(private countryServices: CountryService) {
    
  }
  search(term: string) {
    this.countryServices.searchCountry(term).subscribe(countries => {
      this.country = countries
      console.log(countries);

    })
  }
}
