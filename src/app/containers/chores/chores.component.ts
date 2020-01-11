import { Component, OnInit } from '@angular/core';
import { ChoreService } from 'src/app/services/chore.service';

@Component({
  selector: 'app-chores',
  templateUrl: './chores.component.html',
  styleUrls: ['./chores.component.scss']
})
export class ChoresComponent implements OnInit {

  chores: any = [];
  constructor(private choreService: ChoreService) { }

  ngOnInit() {
    this.choreService.getChores()
    .then( data => {
      this.chores = data;
    });
  }

}
