import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  notesChanged = new Subject<Note[]>();


  private notes: Note[] = [
    new Note('December 22', 'Lorem upsum Lorem uplsum', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis augue et posuere blandit. Suspendisse egestas lacinia tellus nec suscipit. "),
    new Note('December 20', 'Lorem upsum Lorem uplsum', "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).")
  ]

  constructor() { }

  getNotes() {
    return this.notes.slice()
  }
  updateNote(id: number, newNote: Note) {
    this.notes[id] = newNote
    this.notesChanged.next(this.notes.slice())
  }
  addNote(note: Note) {
    this.notes.push(note)
    this.notesChanged.next(this.notes.slice())

  }
  getNote(id: number) {
    return this.notes[id]
  }
  deleteNote(id: number) {
    this.notes.splice(id, 1)
    this.notesChanged.next(this.notes.slice())
  }
}
