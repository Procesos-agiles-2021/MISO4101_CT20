import { Participacion } from './participacion'

export const PARTICIPACIONES: Participacion[] =
[
  {
    id: 1,
    deportista: 1,
    fecha: '27/04/2020',
    hora: '08:30',
    modalidad: 'Peso Pesado',
    resultado: '2',
    videoObj: {id: 1, url:'https://www.youtube.com/embed/GGjHZZGR-DU', comentarios:[{id: 1, autor:'Kars', texto:'Que fuerza', fecha:'27/02/2021'}]}
  },
  {
    id: 2,
    deportista: 2,
    fecha: '27/04/2020',
    hora: '08:30',
    modalidad: 'Peso Pesado',
    resultado: '2',
    videoObj: {id: 2, url:'https://www.youtube.com/embed/Q1raFMDRi_Q', comentarios:[]}
  }
]
