import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-angdirectivespipes',
  templateUrl: './angdirectivespipes.component.html',
  styleUrls: ['./angdirectivespipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngdirectivespipesComponent implements OnInit {

  customDirective = `import { Directive, ElementRef } from '@angular/core';
  @Directive({
       selector: '[myRed]'
  })
  export class MyRedDirective {
      constructor(elRef: ElementRef) {
         elRef.nativeElement.style.color = 'red';
      }
  }
  Used in html:   <p myRed>Custom Attribute Directive</p>
`;

pipe = `import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'kilometersToMiles'
})
export class KilometersToMilesPipe implements PipeTransform {
  transform(value: number): number {
    const kilometersInMile = 1.609344;
    if(!isNaN(value)){
        return value / kilometersInMile;
    }
    return null;
}
}

Implementation in template: {{ 5 | kilometersToMiles }}`;

pipeInTs = ``;

  constructor() { }

  ngOnInit(): void {
  }

}
