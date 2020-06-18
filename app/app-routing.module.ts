import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AddTaskComponent} from './components/add-task/add-task.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EditTaskComponent} from './components/edit-task/edit-task.component';
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RegisterComponent} from './components/register/register.component';
import {SettingsComponent} from './components/settings/settings.component';
import {TaskDetailsComponent} from './components/task-details/task-details.component';

import { AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path:  '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path:  'login', component: LoginComponent},
  {path:  'register', component: RegisterComponent},
  {path:  'task/add', component: AddTaskComponent, canActivate: [AuthGuard]},
  {path:  'tasks/edit/:id', component: EditTaskComponent, canActivate: [AuthGuard]},
  {path:  'tasks/:id', component: TaskDetailsComponent, canActivate: [AuthGuard]},
  {path:  'settings', component: SettingsComponent},
  {path:  '**', component: NotFoundComponent}
  ];

@NgModule({
  exports: [RouterModule],
  providers: [AuthGuard],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
