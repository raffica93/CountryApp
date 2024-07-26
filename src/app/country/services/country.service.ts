import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfacce/country';
import { CacheStore } from '../interfacce/chache.interface';



@Injectable({ providedIn: 'root' })
export class CountryService {

    private baseUrl = 'https://restcountries.com/v3.1';
    public cacheStore: CacheStore = {
        byCapital: { term: "", countries: [] },
        byRegion: { region: "", countries: [] },
        byCountry: { term: "", countries: [] }
    }

    constructor(private httpClient: HttpClient) { }

    searchCountryAlphaCode(code: string): Observable<Country | null> {
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
            tap(c => this.cacheStore.byCapital={ term, countries: c }),
            catchError(() => of([])
            )
        );
    }
    searchCountry(term: string): Observable<Country[]> {
        const url = this.baseUrl + `/name/${term}`
        return this.getCountryRequest(url,term)
    }
    searchRegion(term: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(this.baseUrl + `/region/${term}`).pipe(
            tap(c => this.cacheStore.byRegion={ region:term, countries: c }),
            catchError(() => of([])
            )
        );
    }

    private getCountryRequest(url: string,term: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(url).pipe(
            tap(c => this.cacheStore.byCountry = { term: term, countries: c }),
            catchError(() => of([])),

        )
    }
}