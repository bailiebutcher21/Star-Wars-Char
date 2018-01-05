import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatListModule} from '@angular/material';
import { AppComponent } from './app.component';
import {CharacterListComponent} from '../CharacterList/character-list.component';
import {CharacterListFilterPipes} from "../CharacterList/character-list-filter.pipes";


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterListFilterPipes,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
