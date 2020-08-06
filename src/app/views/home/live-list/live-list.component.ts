import { Component, OnInit } from '@angular/core';
import {LiveService} from '../../../shared/service/live.service';
import {Live} from '../../../shared/model/live.model';
import {ResponsePageable} from '../../../shared/model/responsePageable.model';
import {MatDialog} from '@angular/material/dialog';
import {LiveFormDialogComponent} from '../live-form-dialog/live-form-dialog.component';
import {DialogLoadingComponent} from '../dialog-loading/dialog-loading.component';
import {FormControl, FormGroup} from '@angular/forms';
import {Task} from 'protractor/built/taskScheduler';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {
  openTaks: Live[];
  doneTasks: Live[];
  paginationTasks: ResponsePageable;
  paginationDone: ResponsePageable;
  loading: boolean;


  constructor(
    public liveService: LiveService, public dialog: MatDialog)
  {}

  ngOnInit(): void {
    this.getTasks();
    this.getDoneTasks();
  }

  getPerPage($event): void{
    this.liveService.getLives($event.pageIndex).subscribe( res =>
    {
      this.openTaks = res.data;
      this.paginationTasks = res;
    });
  }

  getDonePerPage($event): void{
    this.liveService.getDone($event.pageIndex).subscribe( res =>
    {
      this.doneTasks = res.data;
      this.paginationDone = res;
    });
  }

  getDoneTasks(): void{
    this.liveService.getDone().subscribe( res =>
    {
      this.doneTasks = res.data;
      this.paginationDone = res;
    });
  }

  getTasks(): void{
    this.loading = true;
    this.liveService.getLives().subscribe( res =>
    {
      this.openTaks = res.data;
      this.paginationTasks = res;
      this.loading = false;
    });
  }

  doneTask(id): void{
    this.liveService.doneTask(id).subscribe(() =>
    {
      this.getTasks();
      this.getDoneTasks();
    });
  }

  deleteTask(id): void{
    this.liveService.deleteTask(id).subscribe(() =>
    {
      this.getTasks();
      this.getDoneTasks();
    });
  }

  editar(task: Live): void{
    const dialogRef = this.dialog.open(LiveFormDialogComponent, {
      width: '375px',
    });
    dialogRef.componentInstance.setTask(task, true);
  }

}
