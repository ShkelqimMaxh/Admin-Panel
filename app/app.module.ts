import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TaskService} from './services/task.service';
import {AuthenticationService} from './services/authentication.service';

import { environment } from '../environments/environment';
import { AngularFireModule} from '@angular/fire';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent,
    TasksComponent,
    TaskDetailsComponent,
    EditTaskComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase, 'adminpanel'),
        AngularFirestoreModule,
        AngularFireAuthModule,
        FormsModule
    ],
  providers: [TaskService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
