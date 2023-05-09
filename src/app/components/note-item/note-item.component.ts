import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../Note';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class NoteItemComponent {
  @Input() note!: Note;
  @Output() onDeleteNote: EventEmitter<Note> = new EventEmitter();
  faTrashCan = faTrashCan;

  onDelete(note: any) {
    this.onDeleteNote.emit(note);
  }
}
