import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../../share/todo.model';

@Component({
  selector: 'app-add-todo',
  template: `
    <button (click)="addTodo(newText)">+</button>
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText">
  `,
  styles: [`
    :host {
      display: block;
      padding: 16px 10px;
      background-color: white;
    }

    input {
      display: inline-block;
      font-size: 18px;
      border: none;
    }

    input:focus, button:focus {
      outline: none;
    }

    button {
      width: 24px;
      height: 24px;
      border-radius: 25px;
      color: white;
      font-size: 16px;
      line-height: 17px;
      border: 1px solid dimgray;
      background-color: darkblue;
    }
  `]
})
export class AddTodoComponent implements OnInit {

  // 부모 컴포넌트에 있는 todos 리스트에 event emitter를 통해 추가시키기 위해서
  // 아래와 같이 이벤트를 정의한다.(@Output)
  @Output() onTodoAdded = new EventEmitter();
  newText: string;

  constructor() {
    this.newText = '';
   }

  ngOnInit() {
  }

  addTodo(newText: string) {
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }
}
