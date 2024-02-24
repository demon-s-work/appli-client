import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Note} from "./models/Note";
import {NoteComponent} from "./components/note/note.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, NoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'appli-client';
  notes: Note[] | undefined;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    console.log("initiated");
    this.http
      .get<Note[]>("http://localhost:5109/note")
      .subscribe({next:(data:any) => this.notes=data})
  }
}
