import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {PARTICIPACIONES} from "./mock-participaciones";
import {Participacion} from "./participacion";
import {Comentario} from "./comentario";
import { HttpClient } from  '@angular/common/http';
import {Video} from "./video";

@Injectable({
  providedIn: 'root'
})
export class ParticipacionService {

  API_URL  =  'https://colombia-tokio.herokuapp.com';
  private participaciones: Array<Participacion>;
  private videos: Array<Video>;
  private comentarios: Array<Comentario>;

  constructor(private  httpClient:  HttpClient) { }

  getParticipaciones(user_id: number): Observable<Participacion[]> {
    this.participaciones = [] ;
    this.httpClient.get(`${this.API_URL}/deportistas/`+user_id+`/participaciones`).subscribe((data:  Array<any>) => {
      data.forEach( dataItem => {
        let participacion1 = new Participacion();
            participacion1.id = dataItem.id;
            participacion1.deportista = dataItem.deportista;
            participacion1.fecha= dataItem.fecha;
            participacion1.hora = dataItem.hora;
            participacion1.modalidad = dataItem.modalidad;
            participacion1.resultado = dataItem.resultado;
            this.participaciones.push(participacion1)
        });
      });
    return of(this.participaciones);
    }

    getParticipacion(id: number): Observable<Participacion> {
    return of(this.participaciones.find(participacion => participacion.id === id));
   }

    getVideo(user_id: number, part_id: number): Observable<Video[]> {
    this.videos=[];
    this.httpClient.get(`${this.API_URL}/deportistas/`+user_id+`/participaciones/`+part_id+'/video').subscribe((data:  Array<any>) => {
      data.forEach( dataItem => {
        let video = new Video();
            video.id = dataItem.id;
            video.url = dataItem.url;
            this.videos.push(video);
        });
      });
    return of(this.videos);
    }

    getComentarios(user_id: number, part_id: number): Observable<Comentario[]> {
    this.comentarios=[];
    this.httpClient.get(`${this.API_URL}/deportistas/`+user_id+`/participaciones/`+part_id+'/video/comentarios').subscribe((data:  Array<any>) => {
      data.forEach( dataItem => {
        let comment = new Comentario();
            comment.id = dataItem.id;
            comment.autor = dataItem.username;
            comment.texto = dataItem.texto;
            comment.fecha = dataItem.fecha;
            this.comentarios.push(comment);
        });
      });
    return of(this.comentarios);
    }

    createComentario(mensaje: string, user_id: number, part_id: number): void{
    this.httpClient.post(`${this.API_URL}/deportistas/`+user_id+`/participaciones/`+part_id+'/video/comentarios', mensaje).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

 }
