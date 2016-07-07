import { Component } from "@angular/core";
import { Tab1Component } from './components/tab1';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    directives: [Tab1Component]
})
export class AppComponent {
   
}
