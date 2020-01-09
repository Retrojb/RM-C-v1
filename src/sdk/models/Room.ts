/* tslint:disable */
import {
  House,
  Chore
} from '../index';

declare var Object: any;
export interface RoomInterface {
  "roomName": string;
  "roomType"?: string;
  "owner"?: string;
  "id"?: any;
  house?: House;
  Chore?: Chore[];
}

export class Room implements RoomInterface {
  "roomName": string;
  "roomType": string;
  "owner": string;
  "id": any;
  house: House;
  Chore: Chore[];
  constructor(data?: RoomInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Room`.
   */
  public static getModelName() {
    return "Room";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Room for dynamic purposes.
  **/
  public static factory(data: RoomInterface): Room{
    return new Room(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Room',
      plural: 'rooms',
      path: 'rooms',
      idName: 'id',
      properties: {
        "roomName": {
          name: 'roomName',
          type: 'string'
        },
        "roomType": {
          name: 'roomType',
          type: 'string',
          default: 'public'
        },
        "owner": {
          name: 'owner',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        house: {
          name: 'house',
          type: 'House',
          model: 'House',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'id'
        },
        Chore: {
          name: 'Chore',
          type: 'Chore[]',
          model: 'Chore',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'id'
        },
      }
    }
  }
}
