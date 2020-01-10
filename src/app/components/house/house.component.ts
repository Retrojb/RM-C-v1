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

  houses: HouseModel[];

  $bogus: Observable<House>[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.houses = data.house;
      }
    });
    console.log('onit loop', this.$bogus);
    this.something();
  }

  something() {
    console.log('houses', this.houses);
    // this.houseService.getHouses();
  }

}
