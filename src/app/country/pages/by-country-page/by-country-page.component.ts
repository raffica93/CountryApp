import { Component, OnInit, ViewChild } from '@angular/core';
import { Country } from '../../interfacce/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public isLoading: boolean = false;
 
  public initialValue: string = ''
  public country: Country[] = [];
  constructor(private countryServices: CountryService) {

  }

  ngOnInit(): void {
    this.country = this.countryServices.cacheStore.byCountry.countries
    this.initialValue = this.countryServices.cacheStore.byCountry.term
  }
  search(term: string) {
    this.isLoading = true
    this.countryServices.searchCountry(term).subscribe(countries => {
      this.country = countries
      console.log(countries);
      this.isLoading = false

    })
  }
}
