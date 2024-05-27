import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Context from '../../../useContext/Context';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const FormEditCars = () => {
  const { setMycars, mycars, myid, setCarId } = useContext(Context);
  const { carId } = useParams();

  const [namecar, setNamecar] = useState('');
  const [passagers, setPassagers] = useState('');
  const [marcha, setMarcha] = useState('');
  const [airconditioning, setAirconditioning] = useState('');
  const [doors, setDoors] = useState('');
  const [price, setPrice] = useState('');
  const [imagecar, setImagecar] = useState('');

  useEffect(() => {
    console.log('carId:', carId);
    if (carId) {
      setCarId(carId);
    }
  }, [carId, setCarId]);

  const Updatecar = async () => {
    if (!myid || !carId) {
      console.error("ID do usuário ou ID do carro não definidos");
      return;
    }

    const updatedData = {
      img: imagecar,
      name: namecar,
      nota: '1',
      reviews: '1',
      passageiros: passagers,
      marcha: marcha,
      arcondicionado: airconditioning,
      portas: doors,
      price: price
    };

    try {
      const response = await axios.put(`https://rent-cars-jdua.vercel.app/user/${myid}/cars/${carId}`, updatedData);
      console.log(response.data.msg);
      setMycars(mycars.map(car => car.id === carId ? response.data.updatedCar : car));
    } catch (error) {
      console.error("Erro ao atualizar carro", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Updatecar();
  };

  return (
    <div>
      <form className='border-4 border-primary p-2 rounded font-primary mb-28' onSubmit={handleSubmit}>
        <p className='py-5 text-base'>Qual é o nome do seu carro</p>
        <Input value={namecar} onChange={(e) => setNamecar(e.target.value)} maxLength='20' placeholder='Marca do Carro' />
        <div>
          <p className='py-5 text-base'>Quantos passageiros cabem em seu carro?</p>
          <select className='bg-blue-400 p-1 rounded' name="Passageiros" id="Passageiros" value={passagers} onChange={(e) => setPassagers(e.target.value)}>
            <option disabled value="">Selecione uma opção</option>
            {[...Array(10).keys()].map(n => (
              <option key={n+1} value={n+1}>{n+1}</option>
            ))}
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div>
          <p className='py-5 text-base'>Qual é a marcha do seu carro?</p>
          <select className='bg-blue-400 p-1 rounded' name="marcha" id="marcha" value={marcha} onChange={(e) => setMarcha(e.target.value)}>
            <option disabled value="">Selecione uma opção</option>
            <option value="Automatico">Automático</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div>
          <p className='py-5 text-base'>Tem Ar-condicionado?</p>
          <select className='bg-blue-400 p-1 rounded' name="Arcondicionado" id="Arcondicionado" value={airconditioning} onChange={(e) => setAirconditioning(e.target.value)}>
            <option disabled value="">Selecione uma opção</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>
        <div>
          <p className='py-5 text-base'>Quantas portas tem seu carro?</p>
          <select className='bg-blue-400 p-1 rounded' name="Portas" id="Portas" value={doors} onChange={(e) => setDoors(e.target.value)}>
            <option disabled value="">Selecione uma opção</option>
            {[1, 2, 3, 4].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div>
          <p className='py-5 text-base'>Preço da diária do seu carro</p>
          <Input value={price} onChange={(e) => setPrice(e.target.value)} maxLength='7' placeholder='Preço' />
        </div>
        <div>
          <p className='py-5 text-base'>URL da foto do seu carro</p>
          <Input value={imagecar} onChange={(e) => setImagecar(e.target.value)} placeholder='URL da imagem' />
        </div>
        <div className='flex justify-center items-center mt-10 mb-7'>
          <Button onClick={handleSubmit} Children='Salvar' type="submit"></Button>
        </div>
      </form>
    </div>
  );
};

export default FormEditCars;
