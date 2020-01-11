import { Observable } from 'rxjs';
import { HouseService } from './../../services/house.service';
import { HouseModel } from './house.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { House } from 'sdk';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  houses: any = [];

  constructor(private houseService: HouseService) { }

  ngOnInit() {
    this.houseService.getHouses().then(data => {
      this.houses = data;
      setTimeout(() => {}, 0);
    });
  }

  something() {

  }
}
