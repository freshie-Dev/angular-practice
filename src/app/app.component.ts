import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoTestOne';
  homeLink = 'home'
  aboutLink = 'about'
  dataBindingLink = 'data-binding'
  templateFormLink = 'template-form'
}
