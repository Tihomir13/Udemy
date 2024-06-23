import { bootstrapApplication } from '@angular/platform-browser';
import { InjectionToken } from '@angular/core';
import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';

const TasksServiceToken = new InjectionToken('tasks-service-token');
bootstrapApplication(AppComponent, {
  providers: [{ provide: TasksServiceToken, useClass: TasksService }],
}).catch((err) => console.error(err));
