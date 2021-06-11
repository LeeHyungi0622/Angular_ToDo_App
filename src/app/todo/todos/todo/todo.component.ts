import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../share/todo.model';

@Component({
  selector: 'app-todo',
  template: `
    <input type="checkbox" [checked]="todo.done"> <label>{{ todo.text }}</label>
  `,
  // 컴포넌트 자체를 선택 :host
  styles: [`
    :host {
      display: block;
      padding: 16px;
      color: darkgray;
      background-color: white;
    }

    input {
      position: relative;
    }

    input::before {
      content: "";
      display: inline-block;
      width: 25px;
      height: 25px;
      background-color: white;
      border-radius: 20px;
      position: absolute;
      top: -6px;
      left: -8px;
      border: 1px solid darkgray;
    }

    input:checked:after {
      content: '\\2713';
      display: inline-block;
      font-size: 18px;
      width: 25px;
      height: 25px;
      border-radius: 25px;
      position: absolute;
      top: -6px;
      left: -8px;
      border: 1px solid dimgray;
      text-align: center;
      color: white;
      background-color: dimgray;
    }
    input:checked + label {
      text-decoration: line-through;
    }
  `]
})
export class TodoComponent implements OnInit {

  // 부모 컴포넌트에 정의된 todos 객체 리스트를 전달받기 위해서
  // @Input 데코레이터를 사용한다.
  @Input() todo: Todo;

  constructor() {
    this.todo={
      done: false,
      text: '',
    };
   }

  ngOnInit() {
  }

}
