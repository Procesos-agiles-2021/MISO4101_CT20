import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeportistasComponent } from './deportistas/deportistas.component';
import { DeportistasDetailComponent } from './deportistas-detail/deportistas-detail.component';
import {VideoPlayerComponent} from "./video-player/video-player.component";

@NgModule({
  declarations: [
    AppComponent,
    DeportistasComponent,
    DeportistasDetailComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
