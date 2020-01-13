import { ActivatedRoute } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';
import { RoomService } from 'src/app/services/room.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent implements OnInit {

  rooms: any = [];

  constructor(private roomService: RoomService,
              private houseService: HouseService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchRoom();
  }

  fetchRoom() {
    this.roomService.getRooms().then( data => {
      const id  = this.route.snapshot.paramMap.get('id');
      this.roomService.getRoom(id)
      .subscribe(room => this.rooms = room);
    });
  }

}
