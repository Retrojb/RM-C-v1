import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ChoreComponent } from './components/chore/chore.component';
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
  {path: 'rooms', component: RoomComponent},
  {path: 'chores', component: ChoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
