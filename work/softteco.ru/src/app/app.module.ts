import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BlueSectionComponent } from './blue-section/blue-section.component';
import { BranchenComponent } from './branchen/branchen.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { CustomersComponent } from './customers/customers.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './shared/logo/logo.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SectionTitleComponent } from './shared/section-title/section-title.component';
import { ServicesComponent } from './services/services.component';
import { SharedButtonComponent } from './shared/shared-button/shared-button.component';

const routes: Routes =[];

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BranchenComponent,
    BlueSectionComponent,
    ContactComponent,
    ContactFormComponent,
    CustomersComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    MainScreenComponent,
    PortfolioComponent,
    SectionTitleComponent,
    ServicesComponent,
    SharedButtonComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
