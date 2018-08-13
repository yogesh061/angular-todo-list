import { Component, OnInit } from '@angular/core';
import { ListItem } from '../list-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  addedItem: ListItem;

  constructor() { }

  ngOnInit() {
  }

  onItemAdded(item: ListItem) {
    this.addedItem = item;
  }
}
