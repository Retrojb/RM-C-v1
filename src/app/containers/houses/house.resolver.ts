import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { HouseService } from "../../services/house.service";

@Injectable()
export class HouseResolver implements Resolve<any> {

  constructor( private houseService: HouseService ) { }

    resolve() {
      return new Promise((resolve, reject) => {
        const breadcrumbs = [
        { url: '/', label: 'house' }
      ];

      // get categories from local json file
        this.houseService.getHouses()
      .then(
        houses => {
          return resolve({
            houses,
            breadcrumbs
          });
        },
        err => {
          return resolve(null);
        }
      );
    });
  }
}
