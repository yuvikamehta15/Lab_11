import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todo:any= []  
  constructor(private todoInfo:TodoService) { }

  ngOnInit(): void {
    this.todo = this.todoInfo.getTodo()
  }

}
