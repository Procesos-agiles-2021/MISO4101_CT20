import { Video } from './video';

export class Participacion {
    id: number;
    user_id: number;
    fecha: string;
    hora: string;
    modalidad: string;
    resultado: string;
    videoObj: Video;
}
