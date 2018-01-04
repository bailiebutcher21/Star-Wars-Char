import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatListModule} from '@angular/material';
import { AppComponent } from './app.component';
import {CharacterListComponent} from './character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
