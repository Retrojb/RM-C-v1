import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoresComponent } from './containers/chores/chores.component';
import { RoomsComponent } from './containers/rooms/rooms.component';


import { UserProfileComponent } from './containers/user-profile/user-profile.component';

import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { LoginComponent } from './containers/login/login.component';
import { HousesComponent } from './containers/houses/houses.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'houses', component: HousesComponent},
  {path: 'houses/:id', component: HousesComponent, pathMatch: 'full'}, //make house component for single entity
  {path: 'rooms', component: RoomsComponent},
  {path: 'rooms/:id', component: RoomsComponent, pathMatch: 'full'},
  {path: 'chores', component: ChoresComponent},
  {path: 'chores/:id', component: ChoresComponent, pathMatch: 'full'},


  {path: 'user-profile', component: UserProfileComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
