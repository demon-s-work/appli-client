import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Note} from "./model/Note";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
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
