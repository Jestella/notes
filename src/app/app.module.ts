import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { AboutComponent } from './components/about/about.component';
import { NoteItemComponent } from './components/note-item/note-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    NotesComponent,
    AddNoteComponent,
    AboutComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
