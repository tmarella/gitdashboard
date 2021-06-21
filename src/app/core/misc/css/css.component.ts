import { PdfutilService } from './../../../shared/services/pdfutil.service';
import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssComponent implements OnInit {

  constructor(private pfdutil: PdfutilService) { }

  ngOnInit(): void {
  }

  @ViewChild('content') content: ElementRef;
  GeneratePDF() {
    this.pfdutil.GeneratePDF("CSS", this.content);
  }

}
