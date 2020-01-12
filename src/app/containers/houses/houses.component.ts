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
        this.addQuestionToList(house);
      }
    });
  }

  addQuestionToList(house) {
    this.houses.push(house);
  }
}
