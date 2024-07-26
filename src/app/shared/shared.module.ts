import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [

    HomeComponent,
    AboutComponent,
    SidebarComponent,
    ContactComponent,
    SearchComponent, LoaderComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HomeComponent, AboutComponent, SidebarComponent, SearchComponent, LoaderComponent]
})
export class SharedModule { }
