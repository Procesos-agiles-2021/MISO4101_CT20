import { Component, OnInit, Input } from '@angular/core';
import { Deportista } from '../deportista';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Participacion} from "../participacion";
import {Video} from "../video";
import {Comentario} from "../comentario";
import {ParticipacionService} from "../participacion.service";

import {DeportistaService} from '../deportista.service';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-participacion-detail',
  templateUrl: './participacion-detail.component.html',
  styleUrls: ['./participacion-detail.component.css']
})
export class ParticipacionDetailComponent implements OnInit {

  @Input() deportista: Deportista;
  @Input() participacion: Participacion;
  @Input() videos: Video[];
  @Input() comentarios: Comentario[];

  form: FormGroup;
  API_URL  =  'https://colombia-tokio.herokuapp.com/';
  constructor(
    private route: ActivatedRoute,
    private deportistaService: DeportistaService,
    private participacionService: ParticipacionService,
    private location: Location,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public fB: FormBuilder
  ) {
    this.form = this.fB.group({
      mensaje: ['']
    })
   }

  ngOnInit(): void {
    this.getDeportista();
    this.getParticipacion();
    this.getVideos();
    this.getComentarios();
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

  getComentarios(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const idP = +this.route.snapshot.paramMap.get('idP');
    this.participacionService.getComentarios(id, idP)
      .subscribe(comentarios => this.comentarios = comentarios);
  }

  createComentario(): void {
    var formData: any = new FormData();
    console.log("Crear comentario")
    formData.append("mensaje", this.form.get('mensaje').value)
    const id = +this.route.snapshot.paramMap.get('id');
    const idP = +this.route.snapshot.paramMap.get('idP');
    console.log(JSON.stringify(formData))
    // this.participacionService.createComentario(formData,id,idP)
    console.log(formData)
    this.http.post(`${this.API_URL}/deportistas/`+id+`/participaciones/`+idP+'/video/comentarios', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
  goBack(): void {
    this.location.back();
 }


}

