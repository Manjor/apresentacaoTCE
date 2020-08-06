import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LiveFormDialogComponent} from './live-form-dialog/live-form-dialog.component';
import { Router } from '@angular/router';
import {Live} from '../../shared/model/live.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }
  addTask(): void {
    const dialogRef = this.dialog.open(LiveFormDialogComponent, {
      width: '375px',
    });
    const task = new Live();
    dialogRef.componentInstance.setTask(task, false)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logout(): void {
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
