import {Component, Input} from '@angular/core';
import {Note} from "../../models/Note";
import {elementAt} from "rxjs";

@Component({
  selector: 'note-ui',
  standalone: true,
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() data?: Note
  visible: boolean = false
  toggle()
  {
    this.visible = !this.visible
  }
}
