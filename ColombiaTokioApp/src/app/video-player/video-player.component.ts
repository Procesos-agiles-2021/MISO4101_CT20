import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Participacion} from "../participacion";
import {ParticipacionService} from "../participacion.service";


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  participaciones: Participacion[];

  constructor(
    private route: ActivatedRoute,
    private participacionService: ParticipacionService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.getParticipaciones();
  }

  getParticipaciones(): void {
    const user_id = +this.route.snapshot.paramMap.get('id');
    this.participacionService.getParticipaciones(user_id)
      .subscribe(participaciones => this.participaciones = participaciones);
  }
}
