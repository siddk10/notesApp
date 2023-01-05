import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotesServiceService } from 'src/app/shared/notes-service.service';
import { Note } from 'src/app/shared/note.model';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.css']
})
export class ListnotesComponent implements OnInit, OnDestroy {

  notes: Note[]
  private subsciption: Subscription

  constructor(private notesService: NotesServiceService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subsciption = this.notesService.notesChanged.subscribe((notes: Note[]) => {
      this.notes = notes
    })
    this.notes = this.notesService.getNotes()

  }
  onNewNote() {
    this.router.navigate(['addnotes'], { relativeTo: this.route })
  }

  ngOnDestroy(): void {
    this.subsciption.unsubscribe()
  }



}
