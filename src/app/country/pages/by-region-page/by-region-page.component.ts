import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfacce/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {
  public country:Country[] = [];
  public region:string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public sel=''
  public initialValue: any;
  constructor(private countryServices: CountryService) {
   
  }

  ngOnInit(): void {
    this.country = this.countryServices.cacheStore.byRegion.countries
    this.sel = this.countryServices.cacheStore.byRegion.region 
  }
  search(term: string) {
    this.sel=term
    this.countryServices.searchRegion(term).subscribe(countries => {
      this.country = countries
      console.log(countries);

    })
  }
}
