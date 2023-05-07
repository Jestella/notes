import { Component, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/Note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent {
  @Output() onAddNote: EventEmitter<Note> = new EventEmitter();
  title!: string;
  text!: string;
  starred!: boolean;

  onSubmit() {
    if (!this.text) {
      alert('Add something');
      return;
    }

    const newNote = {
      title: this.title,
      text: this.text,
      starred: this.starred,
    };

    this.onAddNote.emit(newNote);

    this.title = '';
    this.text = '';
    this.starred = false;
  }
}
