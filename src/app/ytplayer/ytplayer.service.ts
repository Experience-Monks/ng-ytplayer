import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { YTPlayerComponent } from './ytplayer.component';
import { loadAPI } from './util';

@Injectable()
export class YTPlayerService {

  public get playersCount(): number {
    return this.players.length;
  }

  public apiReady = new BehaviorSubject<boolean>(false);

  private players = new Array<YTPlayerComponent>();

  constructor(private multiplePlaying = false) {
    loadAPI().then(() => this.apiReady.next(true));
  }

  public addPlayer(player: YTPlayerComponent) {
    this.players.push(player);
  }

  public removePlayer(player: YTPlayerComponent) {
    const index = this.players.indexOf(player);
    this.players.splice(index, 1);
  }

  public pauseAllExcept(playerComponent: YTPlayerComponent) {
    if (this.multiplePlaying) { return; }

    const exception = this.players.indexOf(playerComponent);
    if (exception > -1) {
      this.players.forEach((player, index) => {
        if (exception !== index) {
          player.pause();
        }
      });
    }
  }

}
