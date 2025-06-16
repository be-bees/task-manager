// src/app/task.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // For simulating async operations
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root' // This makes the service a singleton and available throughout the app
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Learn Angular Core Concepts', completed: false },
    { id: 2, title: 'Build a Simple Task Manager', completed: false },
    { id: 3, title: 'Understand RxJS Observables', completed: true },
    { id: 4, title: 'Practice Data Binding', completed: false }
  ];
  private nextId = 5; // To simulate adding new tasks

  constructor() { }

  // Get all tasks - returns an Observable to simulate async fetch
  getTasks(): Observable<Task[]> {
    return of(this.tasks); // 'of' operator from RxJS converts a value to an Observable
  }

  // Add a new task
  addTask(title: string): Observable<Task> {
    const newTask: Task = {
      id: this.nextId++,
      title: title,
      completed: false
    };
    this.tasks.push(newTask);
    return of(newTask);
  }

  // Toggle task completion status
  toggleCompleted(id: number): Observable<boolean> {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      return of(true);
    }
    return of(false); // Task not found
  }

  // Delete a task
  deleteTask(id: number): Observable<boolean> {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.id !== id);
    return of(this.tasks.length < initialLength); // True if a task was removed
  }
}