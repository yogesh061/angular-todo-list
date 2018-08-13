import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListItem } from '../list-item.model';

@Component({
  selector: 'app-add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.css']
})
export class AddListItemComponent implements OnInit {

  @Output() addItem = new EventEmitter<ListItem>();
  constructor() { }

  ngOnInit() {
  }

  addListItem(form: NgForm) {
    const addedItem: ListItem = new ListItem(form.value.name, (new Date()).toString(), (new Date()).toString());
    this.addItem.emit(addedItem);
    form.reset();
  }
}
