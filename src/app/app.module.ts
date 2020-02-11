import { SocketDriver } from 'sdk/sockets/socket.driver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SocketConnection } from 'sdk/sockets/socket.connections';
import { SDKModels, LoopBackAuth, ErrorHandler, InternalStorage } from 'sdk';

/*
COMPONENTS
*/
// CHORES
import { ChoresComponent } from './containers/chores/chores.component';
import { ChoresFormComponent } from './components/chores-form/chores-form.component';
import { NewChoreComponent } from './components/chores-form/new-chore/new-chore.component';
import { EditChoreComponent } from './components/chores-form/edit-chore/edit-chore.component';

// HOUSES
import { HousesComponent } from './containers/houses/houses.component';
import { HouseFormComponent } from './containers/house/house-form.component';
import { NewHouseComponent } from './components/houses-form/new-house/new-house.component';
import { EditHouseComponent } from './components/houses-form/edit-house/edit-house.component';

// ROOMS
import { RoomsComponent } from './containers/rooms/rooms.component';
import { HouseRoomsComponent } from './containers/house-rooms/house-rooms.component';

import { EditRoomComponent } from './components/rooms-form/edit-room/edit-room.component';
import { NewRoomComponent } from './components/rooms-form/new-room/new-room.component';
import { RoomFormComponent } from './components/rooms-form/room-form.component';

// USERS
  // USER LOGIN
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

  // USER PROFILE
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { NewUserFormComponent } from './components/user-form/new-user-form/new-user-form.component';
import { EditUserFormComponent } from './components/user-form/edit-user-form/edit-user-form.component';


/*
 SERVICES
*/
import { HouseService } from './services/house.service';
import { RoomService } from './services/room.service';
import { ChoreService } from './services/chore.service';

/*
  MODULES
*/
import { SharedModule } from './shared/shared.module';



import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { MyPlaceComponent } from './containers/my-place/my-place.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { HouseRoomComponent } from './containers/house-room/house-room.component';
import { DeleteHouseComponent } from './components/houses-form/delete-house/delete-house.component';
@NgModule({
  declarations: [
    AppComponent,

    ChoresComponent,
    ChoresFormComponent,
    NewChoreComponent,
    EditChoreComponent,

    HousesComponent,
    HouseFormComponent,
    NewHouseComponent,
    EditHouseComponent,
    DeleteHouseComponent,

    RoomsComponent,
    NewRoomComponent,
    EditRoomComponent,
    RoomFormComponent,

    LoginComponent,
    LoginFormComponent,

    UserProfileComponent,
    UserFormComponent,
    EditUserFormComponent,
    NewUserFormComponent,

    LandingPageComponent,
    MyPlaceComponent,
    HousesComponent,
    RoomsComponent,
    HouseRoomsComponent,
    LoginFormComponent,
    HouseRoomComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  entryComponents: [
    NewRoomComponent,
    HouseFormComponent,
    DeleteHouseComponent,

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
