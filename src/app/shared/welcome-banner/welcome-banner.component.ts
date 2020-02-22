import { Component, OnInit } from '@angular/core';
import { House } from 'sdk/models/House';
import { HouseService } from 'src/app/services/house.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.scss']
})
export class WelcomeBannerComponent implements OnInit {

  houses: any = [];
  constructor(private houseService: HouseService,
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

}
