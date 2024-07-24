import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfacce/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country 
  constructor(private activateRoute: ActivatedRoute, private countryService: CountryService,
    private router:Router) { }

  ngOnInit() {
    this.activateRoute.params
      .pipe(
        tap((params) => console.log(params)),//{id: 'Ita'}
        tap((params) => console.log({params: params['id']})),//{params: 'Ita'}
        tap(({id}) => console.log(id)),//ita
        switchMap(({ id }) => this.countryService.searchCountryAlphaCode(id)),
      )
      .subscribe((resp) => {
        console.log({resp});
        if(!resp) {
          return this.router.navigateByUrl('');

        }
        this.country = resp
        
        return;
      })
  }
  // ngOnInit() {
  //   this.activateRoute.params
  //   .subscribe(({ id }) => {

  //     this.countryService.searchCountryAlphaCode(id)
  //     .subscribe(countries => {
  //       console.log(countries[0]);
  //     })

  //   })
  // }

  searchCountry(term: string) {





  }
}
