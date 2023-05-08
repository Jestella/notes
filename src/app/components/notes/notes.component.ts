import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from 'src/app/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes) => (this.notes = notes));
  }

  deleteNote(note: Note) {
    this.noteService
      .deleteNote(note)
      .subscribe(
        () => (this.notes = this.notes.filter((n) => n.id !== note.id))
      );
  }

  toggleStar(note: Note) {
    note.starred = !note.starred;
    this.noteService.addStar(note).subscribe();
  }

  addNote(note: Note) {
    this.noteService.addNote(note).subscribe((note) => this.notes.push(note));
  }
}
