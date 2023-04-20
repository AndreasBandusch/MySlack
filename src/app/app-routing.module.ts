import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  { path: '', component: LogInComponent, pathMatch: 'full', },
  { path: 'login', component: LogInComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'send-email', component: SendEmailComponent },
  { path: 'app', component: MainContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
