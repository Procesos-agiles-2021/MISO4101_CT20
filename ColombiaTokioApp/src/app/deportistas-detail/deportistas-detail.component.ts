import { Component, OnInit, Input } from '@angular/core';
import { Deportista } from '../deportista';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Participacion} from "../participacion";
import {ParticipacionService} from "../participacion.service";

import {DeportistaService} from '../deportista.service';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";


@Component({
  selector: 'app-deportistas-detail',
  templateUrl: './deportistas-detail.component.html',
  styleUrls: ['./deportistas-detail.component.css']
})
export class DeportistasDetailComponent implements OnInit {

  @Input() deportista: Deportista;
  @Input() participacion: Participacion[];

  constructor(
    private route: ActivatedRoute,
    private deportistaService: DeportistaService,
    private participacionService: ParticipacionService,
    private location: Location,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getDeportista();
    this.getParticipaciones();

  }
  cleanURL(oldURL ): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }

  getDeportista(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deportistaService.getDeportista(id)
      .subscribe(deportista => this.deportista = deportista);
  }

  getParticipaciones(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.participacionService.getParticipaciones(id)
      .subscribe(participacion => this.participacion = participacion);
  }


  goBack(): void {
    this.location.back();
 }


}
