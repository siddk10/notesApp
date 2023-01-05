import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddnotesformComponent } from './addnotesform/addnotesform.component';
import { ListnotesComponent } from './home/listnotes/listnotes.component';
import { NotesitemComponent } from './home/listnotes/notesitem/notesitem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeStartComponent } from './home/home-start/home-start.component';
import { NotesDetailComponent } from './home/notes-detail/notes-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddnotesformComponent,
    ListnotesComponent,
    NotesitemComponent,
    HomeStartComponent,
    NotesDetailComponent, DropdownDirective],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
