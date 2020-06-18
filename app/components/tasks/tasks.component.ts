import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';

import {Task} from '../../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  totalHours: number;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.getTotalHours();
    });
  }

  getTotalHours() {
    this.totalHours = this.tasks.reduce((hours, task) => {
      return hours + task.hours;
    }, 0);
  }
}
