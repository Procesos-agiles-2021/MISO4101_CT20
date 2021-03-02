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

  API_URL  =  'https://colombia-tokio.herokuapp.com';
  private deportistas: Array<Deportista>;

  getDeportistas(): Observable<Deportista[]>{
    this.deportistas = [] ;
    this.httpClient.get(`${this.API_URL}/deportistas/`).subscribe((data:  Array<any>) => {
      data.forEach( dataItem => {
        let deportista1 = new Deportista();
            deportista1.id = dataItem.id;
            deportista1.nombre = dataItem.nombre;
            deportista1.fecha_nacimiento = dataItem.fecha_nacimiento;
            deportista1.peso = dataItem.peso;
            deportista1.estatura = dataItem.estatura;
            deportista1.entrenador = dataItem.entrenador;
            deportista1.imagen = dataItem.imagen;
            deportista1.lugar_nacimiento = dataItem.lugar_nacimiento;

            this.deportistas.push(deportista1)
        });
      });
    return of(this.deportistas);
    }

  getDeportista(id: number): Observable<Deportista> {
    return of(this.deportistas.find(deportista => deportista.id === id));
  }

}
