import { Component } from '@angular/core';

// decoratator that specifies different parts in my component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
}
