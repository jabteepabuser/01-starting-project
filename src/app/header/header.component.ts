import { Component } from "@angular/core";   //import this always to ts, when creating new components.

@Component({
    selector: 'header-app',     //which element should be replaced or controlled in this case, it is my-header.
    standalone: true, //should always be here.
    templateUrl: './header.component.html', //the template for this component which basically means the file that contains the markup for this comp.
    styleUrl: './header.component.css' //the attaches the styling component.

})

export class HeaderComponent {} //always call this so that it can be referenced to other files as well

//this is the main subcomponent for header.