import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RoomComponent } from './components/room/room.component';
import { HouseComponent } from './components/house/house.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'house', component: HouseComponent},
  {path: 'house/:id', component: HouseComponent, pathMatch: 'full'},
  {path: 'rooms', component: RoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
