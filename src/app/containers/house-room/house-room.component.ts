import { Observable } from 'rxjs';
import { RoomService } from './../../services/room.service';
import { HouseService } from './../../services/house.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room, House } from 'sdk';

@Component({
  selector: 'app-house-room',
  templateUrl: './house-room.component.html',
  styleUrls: ['./house-room.component.scss']
})
export class HouseRoomComponent implements OnInit {

  rooms: Array<Room>;
  houseName: string;
  house: House;
  constructor(private houseService: HouseService,
              private roomsService: RoomService,
              private route: ActivatedRoute) { }

 ngOnInit() {
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
        this.rooms = data.rooms;
        this.house = data.house;
      }
    });
    console.log('Obs House', this.house);
 }

 getHouse(id: string) {
   this.houseService.getHouse(id);
 }
}
