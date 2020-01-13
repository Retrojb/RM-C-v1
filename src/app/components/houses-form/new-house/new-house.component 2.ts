import { HouseService } from './../../../services/house.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.scss']
})
export class NewHouseComponent implements OnInit {

  houseForm: FormGroup;

  constructor(private houseService: HouseService,
              public thisDialogRef: MatDialogRef<NewHouseComponent>,
              @Inject(MAT_DIALOG_DATA) public modalData: any) { }

  ngOnInit() {
    this.houseForm = new FormGroup({
      houseName: new FormControl(''),
      address: new FormControl(''),
      zipcode: new FormControl('')
    });
  }

  onSubmit(val) {
    const house: any = {};
    house.houseName = val.houseName;
    house.address = val.address;
    house.zipcode = val.zipcode;

    this.houseService.createHouse(house)
    .then(house => {
      this.thisDialogRef.close(house);
      this.houseForm.reset();
    });
  }

  onCancel() {
    this.thisDialogRef.close();
  }
}
