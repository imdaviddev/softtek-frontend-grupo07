import { useEffect, useState } from 'react';
import usuarioService from '../../services/usuarioService';
import { MisTurnosResponse } from './types';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';

const MisTurnosTable = () => {
    const [rows, setRows] = useState<MisTurnosResponse[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        usuarioService.getMisTurnos().then((response) => {
            setRows(response.data);
        }).catch(() => {
            setError('Error al cargar los turnos');
        });
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (rows.length === 0) {
        return <p>No posee ningun turno</p>;
    }

    return (
        <Table hoverRow>
            <thead>
                <tr>
                    <th style={{ width: '15%' }}>Turno N°</th>
                    <th>Motivo de Consulta</th>
                    <th>Fecha y Hora de la Cita</th>
                    <th>Nombre del especialista</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.motivoConsulta}</td>
                        <td>{new Date(row.fechaHoraCita).toLocaleString()}</td>
                        <td>{row.especialista.nombre}</td>
                        <td><Button variant="outlined">Editar</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default MisTurnosTable;
