import MainComponent from '../components/turnos/MainComponent'
import TurnosCardsUser from '../components/turnos/TurnosCardsUser';
import TurnosCardsInfo from '../components/turnos/TurnosCardsInfo';

import './turnos.css'

const Turnos = () => {
  return (
    <main className='web-baground'>

      <div className="turno-cards-user">
        <TurnosCardsUser userData={userData}/>
      </div>

      <div className="turno-cards-info">
        <TurnosCardsInfo turno={turno} especialista={especialista}/>
      </div>

      <MainComponent/>

    </main>
  )
}

export default Turnos
