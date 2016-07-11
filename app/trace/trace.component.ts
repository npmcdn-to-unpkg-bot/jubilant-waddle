import { Component, ViewChild, ElementRef} from '@angular/core';
import { Router }           from '@angular/router';

declare var Potrace:any;

@Component({
  selector: 'my-trace',
  templateUrl: 'app/trace/trace.component.html',
  styleUrls: ['app/trace/trace.component.css']
})

export class TraceComponent {
 @ViewChild('imageInput') imageInput: ElementRef;
 @ViewChild('imgdiv') imgdiv: ElementRef;
 @ViewChild('svgdiv') svgdiv: ElementRef;

  constructor(
    private router: Router) {
  }

  imageOpen(event){
    event.preventDefault();
    this.imageInput.nativeElement.click();
  }

  imageProcess(event){
    var self = this;
    event.preventDefault();
    Potrace.loadImageFromUrl("app/images/alien.jpg");
    Potrace.process(function() {
        self.displayImg();
        self.displaySVG(3, undefined);
    });
  }

  imageSave(event){
    event.preventDefault();

  }

  imageChanged(event){
    event.preventDefault();
    var files = event.srcElement.files;
    this.handleFiles(files);
  }


  handleFiles(files) {
      var self = this;
      Potrace.loadImageFromFile(files[0]);
      Potrace.process(function() {
          self.displayImg();
          self.displaySVG(3, undefined);
      });
  }

  displayImg() {
      var img = this.imgdiv.nativeElement;
      img.style.display = 'inline-block';
      img.innerHTML = "<p>Input image:</p>";
      img.appendChild(Potrace.img);
  }

  displaySVG(size, type) {
    var svg = this.svgdiv.nativeElement;
      svg.style.display = 'inline-block';
      svg.innerHTML = "<p>Result:</p>" + Potrace.getSVG(size, type);
  }


  // dragenter(){}
  // dragleave(){}
  // dragover(){}
  // drop(){}

}
