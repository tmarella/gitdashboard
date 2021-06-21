import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-angrouter',
  templateUrl: './angrouter.component.html',
  styleUrls: ['./angrouter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngrouterComponent implements OnInit {
  lazyLoading = `{
    path: 'subs',
    loadChildren: () => import('./innerComponents/subs/subs.module').then(mod => mod.subsModule)

    or

    loadChildren: './form-module/form.module#UploadFormModule'
  }`;

  constructor() { }

  ngOnInit(): void {
  }

}
