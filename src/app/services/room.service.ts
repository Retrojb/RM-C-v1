import { Room } from './../../../sdk/models/Room';
import { Injectable } from '@angular/core';
import { RoomApi } from 'sdk';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private roomApi: RoomApi) { }

  getRooms() {
    return this.roomApi.find<Room>().toPromise();
  }
}
