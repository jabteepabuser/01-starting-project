import { Component } from "@angular/core";   //import this always when creating new components

@Component({
    selector: 'my-header',     //which element should be replaced or controlled in this case, it is my-header.
    standalone: true, //should always be here.
    templateUrl: './myheader.component.html', //the template for this component which basically means the file that contains the markup for this comp.
    styleUrl: './myheader.component.css'

})

export class MyHeaderComponent {} //always call this so that it can be referenced to other files as well

//this is the main subcomponent for header.