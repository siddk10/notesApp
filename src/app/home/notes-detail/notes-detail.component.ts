import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotesServiceService } from 'src/app/shared/notes-service.service';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.css']
})
export class NotesDetailComponent implements OnInit {
  id: number
  note: Note

  constructor(private notesService: NotesServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.note = this.notesService.getNote(this.id)
    })
  }
  onDeleteNote() {

    this.notesService.deleteNote(this.id)
    this.router.navigate(['/notes'])
  }
  onEditNote() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }


}
