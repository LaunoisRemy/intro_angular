;
import { Festival/festivalsDetailsComponent } from './festival/festivals-details/festival/festivals-details.component'import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FestivalComponent } from './festival/festival.component';
import { Festival/festivalsListComponent } from './festival/festivals-list/festival/festivals-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FestivalComponent, Festival/festivalsListComponent, Festival/festivalsDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
