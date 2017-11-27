/// <reference types="youtube"/>

import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { YTPlayerService } from './ytplayer.service';
import { parseQueryString } from './util';

@Component({
  selector: 'ng-ytplayer',
  template: '<div [id]="domID"></div>',
  styles: [':host, :host ::ng-deep iframe { width: 100%; height: 100%; }']
})
export class YTPlayerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  set videoID(id: string) {
    if (this.player && this.vid !== id) {
      this.player.loadVideoById(id);
    }
    this.vid = id;
  }
  get videoID(): string {
    return this.vid;
  }
  @Input() domID: string;
  @Input() parameters: string|YT.PlayerVars;

  @Output() ready = new EventEmitter();
  @Output() unstarted = new EventEmitter();
  @Output() ended = new EventEmitter();
  @Output() playing = new EventEmitter();
  @Output() paused = new EventEmitter();
  @Output() buffering = new EventEmitter();
  @Output() cued = new EventEmitter();

  private player: YT.Player;
  private vid: string;

  constructor(private ytPlayerService: YTPlayerService) { }

  ngOnInit() {
    this.ytPlayerService.addPlayer(this);
    this.domID = this.domID || this.videoID;
  }

  ngAfterViewInit() {
    this.ytPlayerService.apiReady.subscribe(ready => {
      if (ready && !this.player) {
        const parameters: YT.PlayerVars = typeof this.parameters === 'string' ? parseQueryString(this.parameters) : this.parameters;
        this.player = this.initPlayer(this.videoID, parameters, this.domID);
      }
    });
  }

  ngOnDestroy() {
    this.ytPlayerService.removePlayer(this);
  }

  public play() {
    if (this.player) {
      this.player.playVideo();
    }
  }

  public pause() {
    if (this.player) {
      this.player.pauseVideo();
    }
  }

  private onplay() {
    this.playing.emit();
    // TODO: consider making this configurable in the service
    this.ytPlayerService.pauseAllExcept(this);
  }

  private initPlayer(videoId: string, playerVars: YT.PlayerVars, domID?: string) {
    const onReady = () => this.ready.emit();
    const onStateChange = ({ data }) => {
      switch (data) {
        case YT.PlayerState.UNSTARTED:
          this.unstarted.emit();
          break;
        case YT.PlayerState.ENDED:
          this.ended.emit();
          break;
        case YT.PlayerState.PLAYING:
          this.onplay();
          break;
        case YT.PlayerState.PAUSED:
          this.paused.emit();
          break;
        case YT.PlayerState.BUFFERING:
          this.buffering.emit();
          break;
        case YT.PlayerState.CUED:
          this.cued.emit();
          break;
      }
    };

    return new YT.Player(domID, {
      videoId,
      playerVars,
      events: { onReady, onStateChange }
    });
  }

}
