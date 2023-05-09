import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes) => (this.notes = notes));
  }

  deleteNote(note: Note) {
    this.noteService
      .deleteNote(note)
      .subscribe(
        () => (this.notes = this.notes.filter((i) => i.id !== note.id))
      );
  }

  addNote(note: Note) {
    this.noteService.addNote(note).subscribe((note) => this.notes.push(note));
  }
}
