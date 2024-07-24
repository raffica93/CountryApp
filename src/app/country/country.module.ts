import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryRoutingModule } from './country-routing-module.module';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './component/table/table.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent, 
    ByRegionPageComponent, 
    ByCountryPageComponent, 
    CountryPageComponent,
    TableComponent],
  imports: [

    CommonModule,CountryRoutingModule,SharedModule
  ]
})
export class CountryModule { }
