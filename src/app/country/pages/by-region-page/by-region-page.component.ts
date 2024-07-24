import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfacce/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public country:Country[] = [];
  constructor(private countryServices: CountryService) {
    
  }
  search(term: string) {
    this.countryServices.searchCapital(term).subscribe(countries => {
      this.country = countries
      console.log(countries);

    })
  }
}
