import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfacce/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {
  public country: Country[] = [];
  public isLoad = false
  public initialValue: string = ''
  constructor(private countryServices: CountryService) {
  
  }

  ngOnInit(): void {
    this.country = this.countryServices.cacheStore.byCapital.countries
    this.initialValue = this.countryServices.cacheStore.byCapital.term
  }
  search(term: string) {
    this.countryServices.searchCapital(term).subscribe(countries => {
      this.country = countries
      console.log(countries);

    })
  }

}
