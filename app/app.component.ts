
import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>

  <article>
      <input type="file" id="imageInput" accept="image/*">
      <div id="imgdiv"> </div>
      <div> </div>
      <div id="svgdiv"> </div>
  </article>
  `
})
export class AppComponent {
    title = 'Converty';
}
