import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule} from '@angular/fire/firestore';

import { Task } from '../models/Task';
import {map} from 'rxjs/operators';

@Injectable()
export class TaskService {
  tasksCollection: AngularFirestoreCollection<Task>;
  taskDoc: AngularFirestoreDocument<Task>;
  tasks: Observable<Task[]>;
  task: Observable<Task>;

  constructor(private afs: AngularFirestore) {
    this.tasksCollection = this.afs.collection('tasks', ref => ref.orderBy('id', 'asc'));
  }

  getTasks(): Observable<Task[]> {
    this.tasks = this.tasksCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Task;
        data.id = action.payload.doc.id;
        return data;
      });
    }));

    return this.tasks;
  }

  newTask(task: Task) {
    this.tasksCollection.add(task);
  }

  getTask(id: string): Observable<Task> {
    this.taskDoc = this.afs.doc<Task>(`tasks/${id}`);
    this.task = this.taskDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Task;
        data.id = action.payload.id;
        return data;
      }
    }));
    return this.task;
  }

  updateTask(task: Task){
    this.taskDoc = this.afs.doc(`tasks/${task.id}`);
    console.log(this.taskDoc);
    this.taskDoc.update(task);
  }

  deleteTask(task: Task){
    this.taskDoc = this.afs.doc(`tasks/${task.id}`);
    this.taskDoc.delete();
  }

  editTask(task: Task){
    this.taskDoc = this.afs.doc(`tasks/${task.id}`);
    console.log(this.taskDoc);
    this.taskDoc.update(task);
  }

}
