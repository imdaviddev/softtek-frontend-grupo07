export interface Turno {
  id: number;
  motivoConsulta: string;
  fechaHoraCita: string;
  idMedicoEspecialista: number;
}

export interface Especialista {
  id: number;
  nombre: string;
  especialidad: string;
  horariosConsulta: string;
  ubicacion: string;
  fechaCreacion: string;
}

export interface UserData {
  nombre: string;
  dni: string;
  numeroCelular: string;
  email: string;
  token: string;
}

export interface MisTurnosResponse {
  id: number;
  motivoConsulta: string;
  fechaHoraCita: string;
  especialista: Especialista;
}
