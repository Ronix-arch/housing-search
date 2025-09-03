import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent  } from './home/home.component';
import{ RouterModule} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
 // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class App {
  //protected readonly title = signal('home-search-app');
  title = 'home-search-app';
}
