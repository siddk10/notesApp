import { Component, Input } from '@angular/core';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-notesitem',
  templateUrl: './notesitem.component.html',
  styleUrls: ['./notesitem.component.css']
})
export class NotesitemComponent {
  @Input() note: Note
  @Input() index: number


}

