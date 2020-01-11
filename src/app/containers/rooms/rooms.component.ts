import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: any = [];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms()
    .then( data => {
      this.rooms = data;
      setTimeout(() => {}, 0);
    });

}
}
