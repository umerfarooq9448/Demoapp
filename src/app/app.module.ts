import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { MyheaderComponent } from './myheader/myheader.component';
import { FormsModule } from '@angular/forms';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CrudPageComponent } from './crud-page/crud-page.component';
import { CustomDirective } from './custom.directive';
import { CustomPipe } from './custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainbodyComponent,
    MyheaderComponent,
    ShowdetailsComponent,
    CrudPageComponent,
    CustomDirective,
    CustomPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
