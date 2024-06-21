export interface IEspecialista{
    nombre: string,
    ubicacion: string,
    especialidad: string,
}

export async function getEspecialistas(): Promise<IEspecialista[]> {
    const especialistas: IEspecialista[] = [
        {
            nombre: "María Fernández",
            ubicacion: "Buenos Aires, Palermo",
            especialidad: "Dermatología"
        },
        {
            nombre: "Juan Pérez",
            ubicacion: "Buenos Aires, Recoleta",
            especialidad: "Cardiología"
        },
        {
            nombre: "Luisa González",
            ubicacion: "Buenos Aires, Belgrano",
            especialidad: "Pediatría"
        },
        {
            nombre: "Roberto Martínez",
            ubicacion: "Buenos Aires, Almagro",
            especialidad: "Oftalmología"
        },
    ];
    

    return especialistas;
}