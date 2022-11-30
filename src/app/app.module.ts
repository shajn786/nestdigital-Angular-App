import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestIndexComponent } from './nest-index/nest-index.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomenavbarComponent } from './homenavbar/homenavbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewallCourseComponent } from './admin-viewall-course/admin-viewall-course.component';
import { AdminViewallFreindsComponent } from './admin-viewall-freinds/admin-viewall-freinds.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
},
{
  path:"adminlogin",component:AdminLoginComponent
},
{
  path:"admincourse",component:AdminViewallCourseComponent
},
{
  path:"adminfriend",component:AdminViewallFreindsComponent
}

]


@NgModule({
  declarations: [
    AppComponent,
    NestIndexComponent,
    GalleryComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomenavbarComponent,
    AdminLoginComponent,
    AdminViewallCourseComponent,
    AdminViewallFreindsComponent,
    AdminnavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
