import { IEspecialista } from ".";

export interface ITurno {
    id: number;
    motivoConsulta: string;
    fechaHoraCita: string;
    idMedicoEspecialista: number;
}

export interface IReceta {
    id: number;
    descripcion: string;
    fechaCreacion: string;
}


export interface IMisTurnosResponse {
    id: number;
    motivoConsulta: string;
    fechaHoraCita: string;
    especialista: IEspecialista;
    receta?: IReceta;
}