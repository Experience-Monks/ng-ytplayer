import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YTPlayerComponent } from './ytplayer.component';
import { YTPlayerService } from './ytplayer.service';

@NgModule({
  imports: [CommonModule],
  exports: [YTPlayerComponent],
  declarations: [YTPlayerComponent]
})
export class YTPlayerModule {

  static forRoot(multiplePlaying = false): ModuleWithProviders {
    return {
      ngModule: YTPlayerModule,
      providers: [{ provide: YTPlayerService, useFactory: () => new YTPlayerService(multiplePlaying) }]
    };
  }

}
