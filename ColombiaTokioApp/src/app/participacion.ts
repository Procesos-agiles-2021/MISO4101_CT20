import { Video } from './video';

export class Participacion {
    id: number;
    deportista: number;
    deporte: number;
    fecha: string;
    hora: string;
    modalidad: string;
    resultado: string;
    videoObj: Video;
}
