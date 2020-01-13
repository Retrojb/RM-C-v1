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

  // getUsers(): Observable<UserData[]> {
  //   return this.http.get<UserData[]>(this.apiurl).pipe(
  //     tap(data => console.log(data)),
  //     catchError(this.handleError)
  //   );
  // }
  getHouse(id) {
   return this.houseApi.findById<House>(id);
  }

  getRoomsByHouse(id){
    let filter: LoopBackFilter = {
      include: {
        relation: 'room'
      },
      where: {
         houseId: id
       }
    }
    return this.houseApi.find<House>(filter)
     .toPromise();
  }
  createHouse(val) {
    const data = new House();
    data.houseName = val.houseName;
    data.houseName = val.houseName;
    data.address = val.address;
    data.zipcode = val.zipcode;
    return this.houseApi.create<House>(data)
          .toPromise()
  }

  updateHouse(val) {
    const data = new House();
    data.houseName = val.houseName;
    data.houseName = val.houseName;
    data.address = val.address;
    data.zipcode = val.zipcode;
    return this.houseApi.updateAttributes<House>(val.id, data);
  }

  deleteHouse(id) {
    return this.houseApi.deleteById<House>(id)
      .toPromise();
  }
}
