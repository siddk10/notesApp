import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddnotesformComponent } from './addnotesform/addnotesform.component';
import { HomeComponent } from './home/home.component';
import { HomeStartComponent } from './home/home-start/home-start.component';
import { NotesDetailComponent } from './home/notes-detail/notes-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  {
    path: 'notes', component: HomeComponent, children: [
      { path: '', component: HomeStartComponent },
      { path: 'addnotes', component: AddnotesformComponent },
      { path: ':id', component: NotesDetailComponent },
      { path: ':id/edit', component: AddnotesformComponent }

    ]
  },
  { path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
