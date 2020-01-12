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

  getRoom(id) {
    return this.roomApi.findById<Room>(id);
  }

  createRoom(val) {
    const room = new Room();
    room.roomName = val.roomName;
    room.roomType = val.roomType;
    room.owner = val.owner;
    return this.roomApi.create<Room>(room).toPromise();
  }
}
