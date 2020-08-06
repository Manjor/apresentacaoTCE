import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-loading',
  templateUrl: './dialog-loading.component.html',
  styleUrls: ['./dialog-loading.component.css']
})
export class DialogLoadingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogLoadingComponent>) { }

  ngOnInit(): void {
  }

  finish(): void{
    this.dialogRef.close();
  }

}
