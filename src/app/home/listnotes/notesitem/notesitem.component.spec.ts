import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesitemComponent } from './notesitem.component';

describe('NotesitemComponent', () => {
  let component: NotesitemComponent;
  let fixture: ComponentFixture<NotesitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
