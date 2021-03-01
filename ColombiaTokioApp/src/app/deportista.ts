import { Lugar } from './lugar';

export class Deportista {
   id: number;
   nombre: string;
   fecha_nacimiento: string;
   peso: number;
   estatura: number;
   entrenador: string;
   imagen: string;
   lugar_nacimiento: Lugar;
}
