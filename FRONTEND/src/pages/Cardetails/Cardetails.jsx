import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cardetails = () => {
    const { carId } = useParams();
    const [cardetails, setCardetails] = useState(null);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const response = await axios.get(`https://rent-cars-jdua.vercel.app/car/${carId}`);
                setCardetails(response.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do carro:', error);
            }
        };

        fetchCarDetails();
    }, [carId]);

    if (!cardetails) {
        return <p>Carregando...</p>; // Renderiza enquanto a Promise está pendente
    }

    return (
        <div>
            <h1>{cardetails.name}</h1>
            {/* Renderize outros detalhes do carro conforme necessário */}
        </div>
    );
};

export default Cardetails;
