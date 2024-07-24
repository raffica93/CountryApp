import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfacce/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
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
