import { Component, OnInit, Input } from '@angular/core';
import { Deportista } from '../deportista';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Participacion} from "../participacion";
import {Video} from "../video";
import {ParticipacionService} from "../participacion.service";

import {DeportistaService} from '../deportista.service';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";


@Component({
  selector: 'app-participacion-detail',
  templateUrl: './participacion-detail.component.html',
  styleUrls: ['./participacion-detail.component.css']
})
export class ParticipacionDetailComponent implements OnInit {

  @Input() deportista: Deportista;
  @Input() participacion: Participacion;
  @Input() videos: Video[];

  constructor(
    private route: ActivatedRoute,
    private deportistaService: DeportistaService,
    private participacionService: ParticipacionService,
    private location: Location,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getDeportista();
    this.getParticipacion();
    this.getVideos();

  }
  cleanURL(oldURL ): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }

  getDeportista(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deportistaService.getDeportista(id)
      .subscribe(deportista => this.deportista = deportista);
  }

  getParticipacion(): void {
    const id = +this.route.snapshot.paramMap.get('idP');
    this.participacionService.getParticipacion(id)
      .subscribe(participacion => this.participacion = participacion);
  }

  getVideos(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const idP = +this.route.snapshot.paramMap.get('idP');
    this.participacionService.getVideo(id, idP)
      .subscribe(videos => this.videos = videos);
  }

  goBack(): void {
    this.location.back();
 }


}

