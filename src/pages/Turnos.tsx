import { useState } from 'react';
import MainComponent from '../components/turnos/MainComponent';
import TurnosCardsUser from '../components/turnos/TurnosCardsUser';
import TurnosCardsInfo from '../components/turnos/TurnosCardsInfo';
import { UserData, Turno, Especialista } from '../components/turnos/types';
import './turnos.css';

const Turnos = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [especialistas, setEspecialistas] = useState<Especialista[]>([]);

  return (
    <main className='web-baground'>
      {userData && <TurnosCardsUser userData={userData} />}

      {turnos.length > 0 && especialistas.length > 0 && (
        turnos.map((turno, index) => (
          <TurnosCardsInfo
            key={index} // Añadí un key para evitar advertencias
            turno={turno}
            especialista={especialistas[index % especialistas.length]}
          />
        ))
      )}

      <MainComponent
        onUserData={setUserData}
        onTurnos={setTurnos}
        onEspecialistas={setEspecialistas}
      />
    </main>
  );
};

export default Turnos;
