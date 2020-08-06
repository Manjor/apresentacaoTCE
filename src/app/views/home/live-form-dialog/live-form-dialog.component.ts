import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {LiveService} from '../../../shared/service/live.service';
import {Live} from '../../../shared/model/live.model';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {
  public task = new Live();
  public taskForm: FormGroup;
  public edit: boolean;

  constructor(private liveService: LiveService, public dialogRef: MatDialogRef<LiveFormDialogComponent>, builder: FormBuilder)
  {
    this.taskForm = builder.group({
      id: this.task.id,
      title: this.task.title,
      description: this.task.description,
      finished: false,
      target_date: this.task.target_date,
      priority: this.task.priority || 3
    });
  }

  ngOnInit(): void {

  }
  closeForm(): void {
    this.dialogRef.close();
    window.location.reload();
  }
  createTask(): void{
    console.log(this.edit, this.taskForm.value);
    this.liveService.createTask(this.taskForm.value).subscribe(res =>
    {
      this.closeForm();
    });
  }

  setTask(task: Live, edit: boolean): void
  {
      this.task = task;
  }


}
