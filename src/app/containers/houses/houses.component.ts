import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  houses: any = [];

  constructor(private houseService: HouseService) { }

  ngOnInit() {
    this.houseService.getHouses().then(data => {
      this.houses = data;
      setTimeout(() => {}, 0);
    });
  }


}
