import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { YTPlayerModule, YTPlayerService } from './ytplayer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    YTPlayerModule,
    BrowserModule
  ],
  providers: [YTPlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
