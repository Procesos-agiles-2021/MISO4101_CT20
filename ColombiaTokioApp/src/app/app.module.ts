import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeportistasComponent } from './deportistas/deportistas.component';
import { DeportistasDetailComponent } from './deportistas-detail/deportistas-detail.component';
import {VideoPlayerComponent} from "./video-player/video-player.component";
import {YouTubePlayerModule} from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';
import { ParticipacionDetailComponent } from './participacion-detail/participacion-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    DeportistasComponent,
    DeportistasDetailComponent,
    VideoPlayerComponent,
    ParticipacionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
