import { Injectable } from '@angular/core';
import { Deportista } from './deportista';
import { DEPORTISTAS } from './mock-deportistas';
import { Observable, of } from 'rxjs';
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeportistaService {

  constructor(private  httpClient:  HttpClient
    ) { }

  API_URL  =  'http://localhost:8000';
  private deportistas: Array<Deportista>;
  
  getDeportistas(): Observable<Deportista[]>{
    this.deportistas = [] ;
    this.httpClient.get(`${this.API_URL}/deportistas`).subscribe((data:  Array<any>) => {
      data.forEach( dataItem => {
        let deportista1 = new Deportista();
            deportista1.id = dataItem.pk;
            deportista1.nombre = dataItem.fields.nombre;
            deportista1.fecha_nacimiento = dataItem.fields.fecha_nacimiento;
            deportista1.peso = dataItem.fields.peso;
            deportista1.estatura = dataItem.fields.estatura;
            deportista1.entrenador = dataItem.fields.entrenador;
            deportista1.imagen = dataItem.fields.imagen;
            deportista1.lugar_nacimiento = dataItem.fields.lugar_nacimiento;

            this.deportistas.push(deportista1)
        });
      });
    return of(this.deportistas);
    }

  getDeportista(id: number): Observable<Deportista> {
    return of(this.deportistas.find(deportista => deportista.id === id));  	
  }
  
}
