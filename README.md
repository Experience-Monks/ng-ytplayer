# Angular 2+ YouTube Player Component Module

An Angular 2+ component module for using the embedded YouTube player.

## Installation

There is currently not an official tool to publish a `NgModule` as a npm package. So one way to use it for now is to download and put it into a project, or maybe use `git-submodule`.

But according to the Angular team, there would be something coming out with Angular 6; so stay tuned. ([reference issue](https://github.com/angular/angular-cli/issues/6510))

## Importing the module

In the module (e.g. `AppModule`) it will be used:

```TypeScript
import { YTPlayerModule } from 'path/to/ng-ytplayer';

@NgModule({
  declarations: [/* ... */],
  imports: [YTPlayerModule.forRoot()]
})
export class AppModule { }
```

## Config

There are two options are currently configurable:

```TypeScript
// config
imports: [
  YTPlayerModule.forRoot({
    shouldLoadAPI: true,
    multiplePlaying: false
  })
]
```

#### `shouldLoadAPI`

By default using this module would load the YouTube iframe player API, if you prefer to load it on your own, you could set it to false. Note that it would still require the API to be loaded.

#### `multiplePlaying`

When there are multiple instances of the player, it would only allow one to be playing by default (e.g. play one would pause the other). You could set this to true if you want to allow multiple videos playing at the same time.

## Using the component

Here's a list of the component's input and output properties:

```TypeScript
@Input() videoID: string;
@Input() domID: string;
@Input() parameters: string|YT.PlayerVars;

@Output() ready = new EventEmitter();
@Output() unstarted = new EventEmitter();
@Output() ended = new EventEmitter();
@Output() playing = new EventEmitter();
@Output() paused = new EventEmitter();
@Output() buffering = new EventEmitter();
@Output() cued = new EventEmitter();
```

### Input

#### `videoID`

The YouTube video ID to play

#### `domID` (optional)

The DOM element ID of the player

#### `parameters` (optional)

The player options, could be a query string or a object

Reference on [IFrame Player Parameters](https://developers.google.com/youtube/player_parameters)

### Output

The output events are all from the [IFrame Player API](https://developers.google.com/youtube/iframe_api_reference#Events).

### Other `public` properties and methods

```TypeScript
public get currentTime(): number
public play(): void
public pause(): void
public cueVideoById(videoId: string, startSeconds?: number): void
public loadVideoById(videoId: string, startSeconds?: number): void
```
