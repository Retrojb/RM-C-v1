import { Room } from './Room';
import { Chore } from './Chore';
/* tslint:disable */

declare var Object: any;
export interface HouseInterface {
  "houseName": string;
  "address": string;
  "zipcode": string;
  "id"?: any;
  roomId?: any
  room?: Room[];
  choreId?: any;
  chore?: Chore[];
}

export class House implements HouseInterface {
  "houseName": string;
  "address": string;
  "zipcode": string;
  "id": any;
  roomId?: any
  room?: Room[];
  choreId?: any;
  chore?: Chore[];
  constructor(data?: HouseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `House`.
   */
  public static getModelName() {
    return "House";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of House for dynamic purposes.
  **/
  public static factory(data: HouseInterface): House{
    return new House(data);
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
      name: 'house',
      plural: 'Houses',
      path: 'Houses',
      idName: 'id',
      properties: {
        "houseName": {
          name: 'houseName',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "zipcode": {
          name: 'zipcode',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "roomId": {
          name: 'roomId',
          type: 'any'
        },
        "choreId": {
          name: 'choreId',
          type: 'any'
        }
      },
      relations: {
        rooms: {
          name: 'rooms',
          type: 'Rooms',
          model: 'Rooms',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'id'
        },
        chore: {
          name: 'chore',
          type: 'Chore',
          model: 'Chore',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'id'
        }
      }
    }
  }
}
