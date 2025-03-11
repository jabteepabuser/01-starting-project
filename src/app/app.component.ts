import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // imported the premade component here since this is the root component.

@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent], //currently only has MyHeaderComponent.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {} 

//ROOT COMPONENT