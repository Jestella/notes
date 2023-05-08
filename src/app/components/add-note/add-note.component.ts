import { Component, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/Note';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

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
  showAddNote!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddNote = value));
  }

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
