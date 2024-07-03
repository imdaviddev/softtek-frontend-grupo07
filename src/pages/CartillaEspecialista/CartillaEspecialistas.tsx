// App.tsx
import React, { useEffect, useState } from 'react';
import { EspecialistaCard } from '../../components'
import './styles.css'
import { IEspecialista } from '../../models';
import { getEspecialistas } from '../../services/especialistaService';

const App: React.FC = () => {
    const [especialistas, setEspecialistas] = useState<IEspecialista[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getEspecialistas();
            setEspecialistas(data);
        };

        fetchData();
    }, []);

    return (
        <main className="cartilla">
            <h1 className='cartilla-titulo'>Lista de Especialistas</h1>
            <div className="especialistas-list">
                {especialistas.map((especialista) => (
                    <EspecialistaCard key={especialista.id} especialista={especialista} />
                ))}
            </div>
        </main>
    );
}

export default App;
