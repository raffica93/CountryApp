import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfacce/country';



@Injectable({ providedIn: 'root' })
export class CountryService {

    private baseUrl = 'https://restcountries.com/v3.1';
    constructor(private httpClient: HttpClient) { }

    searchCountryAlphaCode(code: string): Observable<Country | null>  {
        return this.httpClient.get<Country[]>(this.baseUrl + `/alpha/${code}`).pipe(
            tap(c => console.log(c)),
            map(c => c.length > 0 ? c[0] : null),
            catchError(() => of(null)
            )
        );
    }
    // searchCountryAlphaCode(code: string): Observable<Country[]>   {
    //     return this.httpClient.get<Country[]>(this.baseUrl + `/alpha/${code}`).pipe(
    //         // tap(c => console.log(c)),
    //         // map(c => c.length > 0 ? c[0] : null),
    //         catchError(() => of([])
    //         )
    //     );
    // }

    searchCapital(term: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(this.baseUrl + `/capital/${term}`).pipe(
            tap(c => console.log(c)),
            catchError(() => of([])
            )
        );
    }
    searchCountry(term: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(this.baseUrl + `/capital/${term}`).pipe(
            tap(c => console.log(c)),
            catchError(() => of([])
            )
        );
    }
    searchRegion(term: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(this.baseUrl + `/name/${term}`).pipe(
            tap(c => console.log(c)),
            catchError(() => of([])
            )
        );
    }
}