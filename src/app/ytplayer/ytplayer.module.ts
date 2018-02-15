import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YTPlayerComponent } from './ytplayer.component';
import { YTPlayerService } from './ytplayer.service';
import { YTPlayerConfig } from './ytplayer.config';

@NgModule({
  imports: [CommonModule],
  exports: [YTPlayerComponent],
  declarations: [YTPlayerComponent]
})
export class YTPlayerModule {

  static forRoot(config: YTPlayerConfig = {}): ModuleWithProviders {
    return {
      ngModule: YTPlayerModule,
      providers: [YTPlayerService, { provide: YTPlayerConfig, useValue: config }]
    };
  }

}
