import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.css']
})
export class AddListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    console.log(form);
    console.log(form.value);
  }
}
