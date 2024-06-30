import { useEffect, useState } from "react";
import { getMisTurnos, eliminarTurno } from "../../services/usuarioService";
import { MisTurnosResponse } from "./types";
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from "@mui/joy/Button";
import Table from "@mui/joy/Table";

const MisTurnosTable = () => {
  const [rows, setRows] = useState<MisTurnosResponse[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMisTurnos();
        setRows(response);
      } catch (error) {
        setError("Error al cargar los turnos");
      }
    };
    fetchData();
  }, []);

  if (error || !rows) {
    return <p>{error}</p>;
  }

  if (rows.length === 0) {
    return <p>No posee ningun turno</p>;
  }

const handleEliminar = async (turnoId: number) => {
try {
    await eliminarTurno(turnoId);
    const updatedRows = rows.filter(row => row.id !== turnoId);
    setRows(updatedRows);
} catch (error) {
    console.error("Error al eliminar el turno:", error);
}
};

  return (
    <Table hoverRow>
      <thead>
        <tr>
          <th style={{ width: "15%" }}>Turno N°</th>
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
            <td>{row.especialista?.nombre}</td>
            <td>
              <ButtonGroup spacing="0.5rem" aria-label="spacing button group">
                <Button onClick={function(){}} >Editar</Button>
                <Button onClick={() => handleEliminar(row.id)} color="danger">Eliminar</Button>
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MisTurnosTable;
