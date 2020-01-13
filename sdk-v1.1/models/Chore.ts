/* tslint:disable */
import {
  House,
  User
} from '../index';

declare var Object: any;
export interface ChoreInterface {
  "chore": string;
  "choreType": string;
  "description"?: string;
  "id"?: any;
  house?: House[];
  User?: User[];
}

export class Chore implements ChoreInterface {
  "chore": string;
  "choreType": string;
  "description": string;
  "id": any;
  house: House[];
  User: User[];
  constructor(data?: ChoreInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Chore`.
   */
  public static getModelName() {
    return "Chore";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Chore for dynamic purposes.
  **/
  public static factory(data: ChoreInterface): Chore{
    return new Chore(data);
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
      name: 'Chore',
      plural: 'chores',
      path: 'chores',
      idName: 'id',
      properties: {
        "chore": {
          name: 'chore',
          type: 'string'
        },
        "choreType": {
          name: 'choreType',
          type: 'string'
        },
        "description": {
          name: 'description',
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
          type: 'House[]',
          model: 'House',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'id'
        },
        User: {
          name: 'User',
          type: 'User[]',
          model: 'User',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'id'
        },
      }
    }
  }
}
