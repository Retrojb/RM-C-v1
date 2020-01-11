import { SocketDriver } from 'sdk/sockets/socket.driver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SocketConnection } from 'sdk/sockets/socket.connections';
import { SDKModels, LoopBackAuth, ErrorHandler, InternalStorage } from 'sdk';

import { ChoresComponent } from './containers/chores/chores.component';
import { HousesComponent } from './containers/houses/houses.component';



import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RoomComponent } from './components/room/room.component';
import { HouseService } from './services/house.service';
import { RoomService } from './services/room.service';
import { ChoreService } from './services/chore.service';
import { SharedModule } from './shared/shared.module';
import { MyPlaceComponent } from './components/my-place/my-place.component';
import { RoomsComponent } from './containers/rooms/rooms.component';
import { ChoresFormComponent } from './components/chores-form/chores-form.component';
import { NewChoreComponent } from './components/chores-form/new-chore/new-chore.component';
import { EditChoreComponent } from './components/chores-form/edit-chore/edit-chore.component';
import { HouseFormComponent } from './components/houses-form/house-form.component';
import { NewHouseComponent } from './components/houses-form/new-house/new-house.component';
import { EditHouseComponent } from './components/houses-form/edit-house/edit-house.component';
@NgModule({
  declarations: [
    AppComponent,
    ChoresComponent,
    HousesComponent,

    LandingPageComponent,
    LoginComponent,
    UserProfileComponent,
    RoomComponent,

    MyPlaceComponent,
    RoomsComponent,
    ChoresFormComponent,
    NewChoreComponent,
    EditChoreComponent,
    HouseFormComponent,
    NewHouseComponent,
    EditHouseComponent
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
