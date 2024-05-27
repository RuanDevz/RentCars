import React, { useContext } from 'react';
import axios from 'axios';
import Context from '../../useContext/Context';

const Editar = () => {
    const { setMycars, mycars, myid } = useContext(Context);

    const Updatecar = async (carId) => {
        const updatedData = {
            img: "",
            name: "",
            nota: "",
            reviews: "",
            passageiros: "",
            marcha: "",
            arcondicionado: "",
            portas: "",
            price: ""
        };
        await axios.put(`https://rent-cars-three.vercel.app/user/${myid}/cars/${carId}`, updatedData)
            .then((response) => {
                console.log(response.data.msg);
                setMycars(mycars.filter(car => car.id !== carId));
            })
            .catch((error) => {
                console.error("Erro ao atualizar carro", error);
            });
    };

    return (
        <div>
            <h1>Editar carro</h1>
            <button onClick={() => Updatecar(carId)}>Editar</button>
        </div>
    );
};

export default Editar;
