import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { HeaderComponent } from './components/main-content/header/header.component';
import { MenuComponent } from './components/main-content/menu/menu.component';
import { MainChatComponent } from './components/main-content/main-chat/main-chat.component';
import { ThreadComponent } from './components/main-content/thread/thread.component';
import { UserMenuComponent } from './components/main-content/overlays/user-menu/user-menu.component';
import { AddChannelComponent } from './components/main-content/overlays/add-channel/add-channel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './components/main-content/overlays/profile/profile.component';
import { ChannelsComponent } from './components/main-content/menu/channels/channels.component';
import { DirectMessagesComponent } from './components/main-content/menu/direct-messages/direct-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignInComponent,
    SendEmailComponent,
    ResetPasswordComponent,
    MainContentComponent,
    HeaderComponent,
    MenuComponent,
    MainChatComponent,
    ThreadComponent,
    UserMenuComponent,
    AddChannelComponent,
    ProfileComponent,
    ChannelsComponent,
    DirectMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
