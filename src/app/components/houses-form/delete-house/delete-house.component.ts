import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HouseService } from 'src/app/services/house.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-delete-house',
  templateUrl: './delete-house.component.html',
  styleUrls: ['./delete-house.component.scss']
})
export class DeleteHouseComponent implements OnInit {

  constructor(private houseService: HouseService,
              public thisDialogRef: MatDialogRef<DeleteHouseComponent>,
              @Inject(MAT_DIALOG_DATA) public modalData: any
  ) { }

  ngOnInit() {
  }

  openDeleteModal() {
    this.houseService.deleteHouse(this.modalData.id)
    .then( res => {
      console.log('foo', this.modalData)
      this.thisDialogRef.close(true);
    });
  }

  onCloseCancel() {
    this.thisDialogRef.close(false);
  }
}
