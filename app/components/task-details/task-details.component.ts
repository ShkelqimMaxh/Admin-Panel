import { Component, OnInit } from '@angular/core';
import { TaskService} from '../../services/task.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Task} from '../../models/Task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  id: string;
  task: Task;
  hasHours = false;
  showHoursOnInput = false;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params.id;
    // Get client
    this.taskService.getTask(this.id).subscribe(task => {
      if (task != null) {
        if (task.hours > 0) {
          this.hasHours = true;
        }
      }
      this.task = task;
    });
  }

  updateHours(id: string){
    this.taskService.updateTask(this.task);
    // @ts-ignore
    alertify.warning('Your hours have been edited');
  }
  onDeleteClick(){
    if (confirm('Do you really want to delete this task ?')){
        this.taskService.deleteTask(this.task);
        this.router.navigate(['/']).then(
          // @ts-ignore
          alertify.warning('Your task have been deleted')
        );
    }
  }

}
