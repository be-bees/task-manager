import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { HighlightOnHoverDirective } from '../directives/highlight-on-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    HighlightOnHoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
