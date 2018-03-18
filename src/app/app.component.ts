import { Component } from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component'
import {AboutComponent} from './components/about/about.component'
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
