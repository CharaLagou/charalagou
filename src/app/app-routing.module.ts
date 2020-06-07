import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../app/components/about/about.component';
import { ContactComponent } from '../app/components/contact/contact.component';
import { IntroComponent } from '../app/components/intro/intro.component';
import { WelcomeComponent } from '../app/components/welcome/welcome.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'intro', component: IntroComponent },
  { path: '',   component: WelcomeComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
