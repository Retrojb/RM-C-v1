import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../../services/house.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.scss']
})
export class HouseFormComponent implements OnInit {

  houses: any = [];

  constructor(private houseService: HouseService,
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
}
