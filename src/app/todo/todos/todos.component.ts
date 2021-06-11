import { Component, OnInit } from '@angular/core';
import { Todo } from '../share/todo.model';

// 메타데이터는 객체로써 정의한다.
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  newText = '';
  todos: Todo[];

  constructor() {
    this.todos = [
      {done: false, text: '운동하기'},
      {done: true, text: '공부하기'}
    ];
  }

  ngOnInit(): void {
  }

  toggleTodo(todo: Todo) {
    todo.done = !todo.done
  }

  addTodo(text: string){
    this.todos.push({
      done: false,
      text: text,
    });
  }
}
