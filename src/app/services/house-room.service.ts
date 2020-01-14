import { RoomApi } from './../../../sdk-v1.1/services/custom/Room';
import { HouseApi } from './../../../sdk-v1.1/services/custom/House';
import { Injectable } from '@angular/core';
import { LoopBackFilter } from 'sdk-v1.1';

@Injectable({
  providedIn: 'root'
})
export class HouseRoomService {

  constructor(private houseApi: HouseApi,
              private roomApi: RoomApi) { }

  getRoomsForHouse() {
    return this.roomApi.find().toPromise();
  }

  fetchRoom(id) {
    const filter: LoopBackFilter = {
      include: {
        relation: 'room'
      },
      where: {
        houseId: id
      }
    }
    return this.roomApi.findById(filter)
     .toPromise();
  }
}
