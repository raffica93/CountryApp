import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  
    HomeComponent,
       AboutComponent,
       SidebarComponent,
       ContactComponent,
       SearchComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
   exports: [HomeComponent,AboutComponent,SidebarComponent,SearchComponent]
})
export class SharedModule { }
