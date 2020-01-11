import { RoomService } from './../../services/room.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  rooms: any = [];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms()
    .then( data => {
      this.rooms = data;
      setTimeout(() => {}, 0);
    })
  }


}
