import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{ pageTitle }}</h1></div>
  <div>my fist Component</div>
  `
})

export class AppComponent {
  pageTitle: string = 'Acme Product Mangement'
}
