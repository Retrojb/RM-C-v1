import { NewRoomComponent } from './../../components/rooms-form/new-room/new-room.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { House } from 'sdk';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: any = [];

  constructor(private roomService: RoomService,
              private houseService: HouseService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.roomService.getRooms()
    .then( data => {
      this.rooms = data;
      setTimeout(() => {}, 0);
    });
  }

  // openNewRoomModal() {
  //   const dialogref = this.dialog.open(NewRoomComponent , {
  //     data: {}
  //   });
  //   dialogref.afterClosed().subscribe(rooms => {
  //       if (rooms) {
  //         this.addRoomToList(rooms);
  //       }
  //     });
  // }

  addRoomToList(rooms) {
    this.roomService.createRoom(rooms);
  }

}
