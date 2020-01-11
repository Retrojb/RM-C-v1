import { House } from '../../../sdk/models/House';
import { Injectable } from '@angular/core';
import { HouseApi, LoopBackFilter } from 'sdk';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private houseApi: HouseApi) { }

  getHouses() {
    return this.houseApi.find<House>()
    .toPromise();
  }

  getHouse(houseId) {
    const houseQuery = {
      id: houseId
    };
    return this.houseApi.find<House>(
      {
        where: houseQuery
      });
  }

  createHouse(val) {
    const data = new House();
    data.houseName = val.houseName;
    data.houseName = val.houseName;
    data.address = val.address;
    data.zipcode = val.zipcode;
    return this.houseApi.create<House>(data)
      .toPromise();
  }

  updateHouse(val) {
    const data = new House();
    data.houseName = val.houseName;
    data.houseName = val.houseName;
    data.address = val.address;
    data.zipcode = val.zipcode;
    return this.houseApi.updateAttributes<House>(val.id, data);
  }

  deleteHouse(houseId) {
    return this.houseApi.deleteById<House>(houseId)
      .toPromise();
  }

  getHouseBySlug(slug: string) {
    return this.getHouses()
    .then(houses =>{
      return houses.find((house) => {
        return house.slug == slug;
      });
    })
  }
}
