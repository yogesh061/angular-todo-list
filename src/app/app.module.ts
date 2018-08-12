import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AddListItemComponent } from './add-list-item/add-list-item.component';
import { ListItemsComponent } from './list-items/list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    AddListItemComponent,
    ListItemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
