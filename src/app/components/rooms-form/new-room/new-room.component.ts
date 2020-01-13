import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RoomService } from 'src/app/services/room.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.scss']
})
export class NewRoomComponent implements OnInit {

  roomForm: FormGroup;


  constructor(private roomService: RoomService,
              public thisDialogRef: MatDialogRef<NewRoomComponent>,
              @Inject(MAT_DIALOG_DATA) public modalData: any) { }

  ngOnInit() {
    this.roomForm = new FormGroup({
      roomName: new FormControl(''),
      roomType: new FormControl(''),
      owner: new FormControl('')
    });
  }

  onSubmit(val){
    const room: any = {};
    room.roomName = val.roomName;
    room.roomType = val.roomType;
    room.owner = val.owner;

    this.roomService.createRoom(room)
    .then(room => {
      this.thisDialogRef.close(room);
      this.roomForm.reset();
    });
  }
    onCancel() {
      this.thisDialogRef.close();
    }

}

