import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { OnlyonnetflixComponent } from './navigatingcomponents/onlyonnetflix/onlyonnetflix.component';
import { FAQComponent } from './navigatingcomponents/faq/faq.component';
import { InvestorrelationsComponent } from './navigatingcomponents/investorrelations/investorrelations.component';
import { PrivacyComponent } from './navigatingcomponents/privacy/privacy.component';
import { SpeedtestComponent } from './navigatingcomponents/speedtest/speedtest.component';
import { HelpcentreComponent } from './navigatingcomponents/helpcentre/helpcentre.component';
import { JobsComponent } from './navigatingcomponents/jobs/jobs.component';
import { CookiepreferencesComponent } from './navigatingcomponents/cookiepreferences/cookiepreferences.component';
import { LegalnoticesComponent } from './navigatingcomponents/legalnotices/legalnotices.component';
import { AccountComponent } from './navigatingcomponents/account/account.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { HeroSectionComponent } from './navigatingcomponents/onlyonnetflix/hero-section/hero-section.component';
import { KDramasComponent } from './navigatingcomponents/onlyonnetflix/k-dramas/k-dramas.component';
import { YoursnextwatchComponent } from './navigatingcomponents/onlyonnetflix/yoursnextwatch/yoursnextwatch.component';
import { IndiantvdramasComponent } from './navigatingcomponents/onlyonnetflix/indiantvdramas/indiantvdramas.component';
import { AwardwinningtvshowsComponent } from './navigatingcomponents/onlyonnetflix/awardwinningtvshows/awardwinningtvshows.component';
import { HollywoodmoviesComponent } from './navigatingcomponents/onlyonnetflix/hollywoodmovies/hollywoodmovies.component';
import { InternationaltvshowsComponent } from './navigatingcomponents/onlyonnetflix/internationaltvshows/internationaltvshows.component';
import { UstvshowsComponent } from './navigatingcomponents/onlyonnetflix/ustvshows/ustvshows.component';
import { ComedymoviesComponent } from './navigatingcomponents/onlyonnetflix/comedymovies/comedymovies.component';
import { EpicworldsComponent } from './navigatingcomponents/onlyonnetflix/epicworlds/epicworlds.component';
import { RomanticmoviesComponent } from './navigatingcomponents/onlyonnetflix/romanticmovies/romanticmovies.component';
import { CriticallyacclaimedtvshowsComponent } from './navigatingcomponents/onlyonnetflix/criticallyacclaimedtvshows/criticallyacclaimedtvshows.component';
import { UstvdramasComponent } from './navigatingcomponents/onlyonnetflix/ustvdramas/ustvdramas.component';
import { TvcomediesComponent } from './navigatingcomponents/onlyonnetflix/tvcomedies/tvcomedies.component';
import { InabitofhurryComponent } from './navigatingcomponents/onlyonnetflix/inabitofhurry/inabitofhurry.component';
import { HindilanguagemoviesComponent } from './navigatingcomponents/onlyonnetflix/hindilanguagemovies/hindilanguagemovies.component';
import { TvserialsComponent } from './navigatingcomponents/onlyonnetflix/tvserials/tvserials.component';
import { InternationaltvdramasComponent } from './navigatingcomponents/onlyonnetflix/internationaltvdramas/internationaltvdramas.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    OnlyonnetflixComponent,
    FAQComponent,
    InvestorrelationsComponent,
    PrivacyComponent,
    SpeedtestComponent,
    HelpcentreComponent,
    JobsComponent,
    CookiepreferencesComponent,
    LegalnoticesComponent,
    AccountComponent,
    NavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    KDramasComponent,
    YoursnextwatchComponent,
    IndiantvdramasComponent,
    AwardwinningtvshowsComponent,
    HollywoodmoviesComponent,
    InternationaltvshowsComponent,
    UstvshowsComponent,
    ComedymoviesComponent,
    EpicworldsComponent,
    RomanticmoviesComponent,
    CriticallyacclaimedtvshowsComponent,
    UstvdramasComponent,
    TvcomediesComponent,
    InabitofhurryComponent,
    HindilanguagemoviesComponent,
    TvserialsComponent,
    InternationaltvdramasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
