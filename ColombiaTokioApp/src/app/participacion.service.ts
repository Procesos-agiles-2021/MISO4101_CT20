import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {PARTICIPACIONES} from "./mock-participaciones";
import {Participacion} from "./participacion";

@Injectable({
  providedIn: 'root'
})
export class ParticipacionService {

  constructor() { }

  getParticipaciones(user_id: number): Observable<Participacion[]> {
    return of(PARTICIPACIONES.filter(participacion => participacion.user_id === user_id))
  }
}
