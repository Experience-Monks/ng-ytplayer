import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YTPlayerComponent } from './ytplayer.component';
import { YTPlayerService } from './ytplayer.service';

@NgModule({
  imports: [CommonModule],
  exports: [YTPlayerComponent],
  declarations: [YTPlayerComponent]
})
export class YTPlayerModule { }
