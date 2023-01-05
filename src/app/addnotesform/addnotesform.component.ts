import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NotesServiceService } from '../shared/notes-service.service';
import { Note } from '../shared/note.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-addnotesform',
  templateUrl: './addnotesform.component.html',
  styleUrls: ['./addnotesform.component.css']
})
export class AddnotesformComponent implements OnInit {

  id: number
  editMode = false
  notesForm: FormGroup

  constructor(private notesService: NotesServiceService, private router: Router, private route: ActivatedRoute) { }
  /* Template Driven Form approach commented */

  /* onSubmit(form: NgForm) {
    console.log(form.value)
    const value = form.value
    const newNote = new Note(value.title, value.desc, value.content)
    this.notesService.addNotes(newNote)

    form.reset()
    this.onCancel()
  } */
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] != null
      this.initForm()
    })
  }
  private initForm() {
    let title = ''
    let description = ''
    let content = ''
    if (this.editMode) {
      const note = this.notesService.getNote(this.id)
      title = note.title
      description = note.description
      content = note.content

    }

    this.notesForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'content': new FormControl(content, Validators.required),

    })

  }

  onSubmit() {
    if (this.editMode) {
      this.notesService.updateNote(this.id, this.notesForm.value)
    }
    else {
      this.notesService.addNote(this.notesForm.value)
    }
    this.onCancel()
  }

  onCancel() {
    this.router.navigate(['/notes'])

  }
}
