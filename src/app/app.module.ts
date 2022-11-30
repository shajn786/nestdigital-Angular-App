import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestIndexComponent } from './nest-index/nest-index.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomenavbarComponent } from './homenavbar/homenavbar.component';
import { RouterModule, Routes } from '@angular/router';


const myRoute : Routes=[

{
  path:"",component:NestIndexComponent
},
{
  path:"aboutus",component:AboutUsComponent
},
{
  path:"gallery",component:GalleryComponent
},
{
  path:"contactus",component:ContactUsComponent
}

]


@NgModule({
  declarations: [
    AppComponent,
    NestIndexComponent,
    GalleryComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
