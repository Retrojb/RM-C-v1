import { DeleteHouseComponent } from './../../components/houses-form/delete-house/delete-house.component';
import { NewHouseComponent } from '../../components/houses-form/new-house/new-house.component';
import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  houses: any = [];

  constructor(private houseService: HouseService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.houseService.getHouses().then(data => {
      this.houses = data;
      setTimeout(() => {}, 0);
    });
  }

  openNewHouseModal() {
    const dialogRef = this.dialog.open(NewHouseComponent, {
      data: { }
    });
    dialogRef.afterClosed().subscribe(house => {
      if (house) {
        this.addHouseToList(house);
      }
    });
  }

  addHouseToList(house) {
    this.houses.push(house);
  }

  deleteHouse(house) {
    const dialogRef = this.dialog
      .open(DeleteHouseComponent, {
        data: { house }
      });

    dialogRef.afterClosed().subscribe(confirm => {
        if (confirm) {
        const index = this.houses.findIndex((house) => house.id === house.id);
        this.houses.splice(index, 1);

        this.houseService.getHouses()
        .then(houses => {
          for (const house of houses) {
            this.houseService.deleteHouse(house.id);
          }
        });
      }});
  }
}
