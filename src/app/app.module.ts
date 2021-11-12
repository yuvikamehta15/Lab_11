import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailsComponent,
    TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
