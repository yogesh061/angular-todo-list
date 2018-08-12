import { Component, OnInit } from '@angular/core';
import { ListItem } from '../list-item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  private listItems: ListItem[] = [
    new ListItem(
      'Item 1',
      '10 Aug, 2018',
      '11 Aug, 2018'
    ),
    new ListItem(
      'Item 2',
      '09 Aug, 2018',
      '11 Aug, 2018'
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
