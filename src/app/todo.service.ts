import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todo =
  [
    {
      id: 1,
      label: 'Bring Milk',
      done: false
    },
    {
      id: 2,
      label: 'Pay mobile bill',
      done: false
    },
    {
      id: 3,
      label: 'Bring Milk',
      done: true
    },

  ]
  getTodo()
  {
    return this.todo
  }

  constructor() { }
}
