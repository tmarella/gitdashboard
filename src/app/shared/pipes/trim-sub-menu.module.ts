import { TrimSubMenuPipe } from './trim-sub-menu.pipe';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TrimSubMenuPipe],
  imports: [
    CommonModule
  ],
  exports: [TrimSubMenuPipe]
})
export class TrimSubMenuModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TrimSubMenuModule
    };
  }
}
