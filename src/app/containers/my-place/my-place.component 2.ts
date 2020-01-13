import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { House } from 'sdk';
import { HouseService } from '../../services/house.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-place',
  templateUrl: './my-place.component.html',
  styleUrls: ['./my-place.component.scss']
})
export class MyPlaceComponent implements OnInit {

  houses: Observable<House>;
  myPlace: string;
  constructor(private houseService: HouseService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMeAllTheThings();
    this.something(this.myPlace);
  }

  getMeAllTheThings(): any {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.houses = data.house;
      }
    });
    console.log('check', this.houses);
  }

  something(id: string) {
    const house = this.getMeAllTheThings();
    console.log('kong', house.id);
    // this.houseService.getHouse(house.id).subscribe( res => this.houses = res);
  }

}
