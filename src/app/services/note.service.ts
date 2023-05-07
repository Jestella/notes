import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from 'src/app/Note';

const httpOptions = {
  headers: new HttpHeaders({
    'Contnent-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private apiUrl = 'http://localhost:3000/notes';
  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  deleteNote(note: Note): Observable<Note> {
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.delete<Note>(url);
  }

  addStar(note: Note): Observable<Note> {
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.put<Note>(url, note, httpOptions);
  }
}
