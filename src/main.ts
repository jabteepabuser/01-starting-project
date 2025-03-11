import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component'; // THIS IS THE ROOT COMPONENT
import { MyHeaderComponent } from './app/myheader.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err)); //THIS IS THE ROOT COMPONENT APPCOMPONENT
