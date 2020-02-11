import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../../services/house.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewRoomComponent } from 'src/app/components/rooms-form/new-room/new-room.component';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.scss']
})
export class HouseFormComponent implements OnInit {

  houses: any = [];

  constructor(private houseService: HouseService,
              private roomService: RoomService,
              private dialog: MatDialog,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchHouse();
  }

  fetchHouse() {
    this.houseService.getHouses().then(data => {
      const id = this.route.snapshot.paramMap.get('id');
      this.houseService.getHouse(id)
    .subscribe(house => this.houses = house);
    });
  }

  onBack() {

  }

  openNewRoomModal() {
    const dialogref = this.dialog.open(NewRoomComponent , {
      data: {}
    });
    dialogref.afterClosed().subscribe(rooms => {
        if (rooms) {
          this.addRoomToList(rooms);
        }
      });
  }

  addRoomToList(rooms) {
    this.roomService.createRoom(rooms);
  }
}
