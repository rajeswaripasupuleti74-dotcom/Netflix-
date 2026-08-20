import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OnlyonnetflixComponent } from './navigatingcomponents/onlyonnetflix/onlyonnetflix.component';
import { FAQComponent } from './navigatingcomponents/faq/faq.component';
import { InvestorrelationsComponent } from './navigatingcomponents/investorrelations/investorrelations.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'onlyonnetflix',component:OnlyonnetflixComponent},
  {path:'FAQ',component:FAQComponent},
  {path:'investorrelations',component:InvestorrelationsComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
