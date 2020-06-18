import {Component, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../../services/task.service';

import {Task} from '../../models/Task';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  task: Task = {
    id: '',
    title: '',
    text: '',
    hours: 0
  };

  disableHoursOnAdd = true;
  @ViewChild('taskForm') form: any;


  constructor(
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  onSubmit({value, valid}: {value: Task, valid: boolean}) {
    if (this.disableHoursOnAdd) {
      value.hours = 0;
    }

    if (!valid) {
      // @ts-ignore
      alertify.error('Please fill out the form correctly');
    } else {
      value.id = '';
      this.taskService.newTask(value);
      this.router.navigate(['/']).then(
        // @ts-ignore
        alertify.success('Your task have been aded')
        );
    }
  }

}
