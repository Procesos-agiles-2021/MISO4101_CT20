import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {PARTICIPACIONES} from "./mock-participaciones";
import {Participacion} from "./participacion";
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipacionService {

  API_URL  =  'http://localhost:8000';
  private participaciones: Array<Participacion>;
  constructor(private  httpClient:  HttpClient) { }

  getParticipaciones(user_id: number): Observable<Participacion[]> {
    this.participaciones = [] ;
    this.httpClient.get(`${this.API_URL}/deportistas/`+user_id+`/participaciones`).subscribe((data:  Array<any>) => {
      data.forEach( dataItem => {
        let participacion1 = new Participacion();
            participacion1.id = dataItem.pk;
            participacion1.deportista = dataItem.fields.deportista;
            participacion1.fecha= dataItem.fields.fecha;
            participacion1.hora = dataItem.fields.hora;
            participacion1.modalidad = dataItem.fields.modalidad;
            participacion1.resultado = dataItem.fields.resultado;

            this.participaciones.push(participacion1)
        });
      });
    return of(this.participaciones);
    }
}
