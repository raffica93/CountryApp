import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./shared/pages/home/home.component";
import { AboutComponent } from "./shared/pages/about/about.component";
import { ContactComponent } from "./shared/pages/contact/contact.component";

const routes: Routes = [
    
    // {
    //     path: '',
    //     component: HomeComponent
    // },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'countries',
      loadChildren: () => 
      import('./country/country.module').then(m => m.CountryModule)
    },
    {
        path: '**',
        redirectTo: 'countries'
    },
   
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }