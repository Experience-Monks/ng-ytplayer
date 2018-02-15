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

[example](src/app/app.component.ts)
