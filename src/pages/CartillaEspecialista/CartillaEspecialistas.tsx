// App.tsx
import React, { useEffect, useState } from 'react';
import { IEspecialista, getEspecialistas } from '../../mocks/especialistas';
import { EspecialistaCard } from '../../components'
import './styles.css'

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
                {especialistas.map((especialista, index) => (
                    <EspecialistaCard key={index} especialista={especialista} />
                ))}
            </div>
        </main>
    );
}

export default App;
