import { SocketDriver } from 'sdk/sockets/socket.driver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HouseComponent } from './components/house/house.component';
import { RoomComponent } from './components/room/room.component';
import { ChoreComponent } from './components/chore/chore.component';
import { HouseService } from './services/house.service';
import { RoomService } from './services/room.service';
import { ChoreService } from './services/chore.service';
import { HttpClientModule } from '@angular/common/http';
import { SocketConnection } from 'sdk/sockets/socket.connections';
import { SDKModels, LoopBackAuth, ErrorHandler, InternalStorage } from 'sdk';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    UserProfileComponent,
    HouseComponent,
    RoomComponent,
    ChoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    HouseService,
    RoomService,
    ChoreService,
    SocketConnection,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
    ErrorHandler,
    SocketDriver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
