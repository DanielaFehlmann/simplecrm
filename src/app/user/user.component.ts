import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  // user= new User();

  constructor(public dialog: MatDialog, private firestore: Firestore) {

  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {
      // data: {name: this.name, animal: this.animal},
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.animal = result;
    // });
  }

}
