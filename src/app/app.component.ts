import { Component } from '@angular/core';
import { MyHeaderComponent } from './myheader.component'; // imported the premade component here since this is the root component.

@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [MyHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {} 

//ROOT COMPONENT