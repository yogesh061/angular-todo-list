import { Component, OnInit, ViewChild } from '@angular/core';
import { ListItem } from '../list-item.model';
import { ListItemsComponent } from '../list-items/list-items.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @ViewChild(ListItemsComponent) todoList;

  constructor() { }

  ngOnInit() {
  }

  onItemAdded(item: ListItem) {
    this.todoList.addListItem(item);
  }
}
