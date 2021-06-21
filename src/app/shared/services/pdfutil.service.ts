import { Injectable, ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfutilService {

  constructor() { }

  public GeneratePDF(title: string, content: ElementRef): void {
    let contents = content.nativeElement;
    let doc = new jsPDF();
    let _elementHandlers =
    {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    doc.fromHTML(contents.innerHTML, 15, 15, {

      'width': 190,
      'elementHandlers': _elementHandlers
    });
    doc.text(title, 15, 8);
    doc.save(title + '.pdf');
  }
}
