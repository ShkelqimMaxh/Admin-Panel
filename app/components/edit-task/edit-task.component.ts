import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../models/Task';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  id: string;
  task: Task = {
    title: '',
    text: '',
    hours: 0
  };
  disableHoursOnEdit = true;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    // Get client
    this.taskService.getTask(this.id).subscribe(task => {
      this.task = task ;
    });
  }
  onSubmit({value, valid}: {value: Task, valid: boolean}) {
    this.taskService.updateTask(this.task);
    this.router.navigate(['/']).then(
      // @ts-ignore
      alertify.warning('Your task have been edited')
    );
  }
}
