import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Context from '../../../useContext/Context';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Popup from '../../Popup/Popup';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const FormEditCars = () => {
  const { setCarData, showMessage, setShowMessage, setMsg, setError } = useContext(Context);
  const { carId } = useParams();
  const navigate = useNavigate();

  const [namecar, setNamecar] = useState('');
  const [passagers, setPassagers] = useState('');
  const [marcha, setMarcha] = useState('');
  const [airconditioning, setAirconditioning] = useState('');
  const [doors, setDoors] = useState('');
  const [price, setPrice] = useState('');
  const [imagecar, setImagecar] = useState('');
  const isMobile = useIsMobile();

  useEffect(() => {
    if (carId) {
      axios.get(`https://rent-cars-jdua.vercel.app/car/${myid}/cars/${carId}`)
        .then((response) => {
          setCarData(response.data);
          setNamecar(response.data.name);
          setPassagers(response.data.passageiros);
          setMarcha(response.data.marcha);
          setAirconditioning(response.data.arcondicionado);
          setDoors(response.data.portas);
          setPrice(response.data.price);
          setImagecar(response.data.img);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados do carro", error);
        });
    }
  }, [carId, myid, setCarData]);

  const Updatecar = async () => {
    if (!myid || !carId) {
      console.error("ID do usuário ou ID do carro não definidos");
      return;
    }

    if (isMobile) {
      window.scrollTo({ top: 0 });
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
      const response = await axios.put(`https://rent-cars-jdua.vercel.app/car/${myid}/cars/${carId}`, updatedData);
      setShowMessage(true);
      setMsg('Carro atualizado com sucesso!');
      setTimeout(() => {
        navigate('/DashboardLooged/Meuscarros');
      }, 3000);
      console.log(response.data.msg);
    } catch (error) {
      console.error("Erro ao atualizar carro", error);
      setShowMessage(true);
      setMsg('Erro ao atualizar carro');
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
        <div data-aos='fade-left'>
          {showMessage && <Popup />}
        </div>
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
          <Button type="submit" Children='Salvar' />
        </div>
      </form>
    </div>
  );
};

export default FormEditCars;
