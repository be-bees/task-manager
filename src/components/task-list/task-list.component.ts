import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; // For async pipe
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>; // tasks$ is an Observable of tasks
  newTaskTitle: string = ''; // For two-way data binding on input

  // Dependency Injection: Angular will provide an instance of TaskService here
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks(); // Fetch tasks when the component initializes
  }

  getTasks(): void {
    this.tasks$ = this.taskService.getTasks(); // Assign the Observable
  }

  addTask(): void {
    if (this.newTaskTitle.trim()) { // Ensure title is not empty
      this.taskService.addTask(this.newTaskTitle.trim()).subscribe(task => {
        console.log('Added task:', task);
        this.newTaskTitle = ''; // Clear input field
        this.getTasks(); // Refresh the list
      });
    }
  }

  toggleCompleted(id: number): void {
    this.taskService.toggleCompleted(id).subscribe(() => {
      console.log(`Task ${id} completion toggled.`);
      this.getTasks(); // Refresh the list
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      console.log(`Task ${id} deleted.`);
      this.getTasks(); // Refresh the list
    });
  }
}