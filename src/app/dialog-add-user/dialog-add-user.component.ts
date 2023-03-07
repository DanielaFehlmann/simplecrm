import { Component } from '@angular/core';
import { User } from 'src/models/user.class';

import { addDoc, collection } from '@firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  user = new User();
  birthDate: Date;
  loading = false;

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  onNoClick() {

  }


  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    let coll = collection(this.firestore, 'users');
    addDoc(coll, this.user.toJson()).then((result: any) => {
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
