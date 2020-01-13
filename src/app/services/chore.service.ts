import { ChoreApi } from './../../../sdk/services/custom/Chore';
import { Injectable } from '@angular/core';
import { Chore } from 'sdk-v1.1';

@Injectable({
  providedIn: 'root'
})
export class ChoreService {

  constructor(private choreApi: ChoreApi) { }

  getChores() {
    return this.choreApi.find<Chore>().toPromise();
  }
}
