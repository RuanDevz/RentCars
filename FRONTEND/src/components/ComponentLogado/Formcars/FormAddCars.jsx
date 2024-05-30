import React, { useState, useContext } from 'react';
import Context from '../../../useContext/Context';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import axios from 'axios';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const FormAddCars = () => {
  const [Namecar, setNamecar] = useState('');
  const [passagers, setPassagers] = useState('');
  const [marcha, setMarcha] = useState('');
  const [Airconditioning, setAirconditioning] = useState('');
  const [doors, setDoors] = useState('');
  const [price, setPrice] = useState('');
  const [imagecar, setImagecar] = useState('');
  const [nota, setNota] = useState('6');
  const [reviews, setReviews] = useState('6');
  const regex = /\B(?=(\d{3})+(?!\d))/g;

  const { myid, setMsg, setShowMessage, setError } = useContext(Context);

  const isMobile = useIsMobile();

  const Addcar = async (e) => {
    e.preventDefault();

    if (isMobile) {
      window.scrollTo({ top: 0 });
    }

    const isEmpty = [Namecar, passagers, marcha, Airconditioning, doors, price, imagecar].some(value => value === '');

    if (isEmpty) {
      setError('Preencha todos os campos!');
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return;
    }

    try {
      const response = await axios.post(`https://rent-cars-jdua.vercel.app/car/${myid}/cars`, {
        name: Namecar,
        passageiros: passagers,
        marcha: marcha,
        arcondicionado: Airconditioning,
        portas: doors,
        price: price.toString().replace(regex, ","),
        img: imagecar,
        nota: nota,
        reviews: reviews
      });

      console.log(response.data);
      setMsg(response.data.msg);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } catch (error) {
      console.error("Erro ao adicionar carro", error);
      setError('Erro ao adicionar carro');
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  };

  return (
    <div>
      <form className='border-4 border-primary p-2 rounded font-primary mb-28' onSubmit={Addcar}>
        <p className='py-5 text-base'>Qual é o nome do seu carro</p>
        <Input value={Namecar} onChange={(e) => setNamecar(e.target.value)} maxLength='20' placeholder='Marca do Carro' />
        <div>
          <p className='py-5 text-base'>Quantos passageiros cabem em seu carro?</p>
          <select className='bg-blue-400 p-1 rounded' value={passagers} onChange={(e) => setPassagers(e.target.value)}>
            <option disabled value="">Seleciona uma opção</option>
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div>
          <p className='py-5 text-base'>Qual é a marcha do seu carro?</p>
          <select className='bg-blue-400 p-1 rounded' value={marcha} onChange={(e) => setMarcha(e.target.value)}>
            <option disabled value="">Seleciona uma opção</option>
            <option value="Automatico">Automatico</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div>
          <p className='py-5 text-base'>Tem Ar-condicionado?</p>
          <select className='bg-blue-400 p-1 rounded' value={Airconditioning} onChange={(e) => setAirconditioning(e.target.value)}>
            <option disabled value="">Seleciona uma opção</option>
            <option value="">Sim</option>
            <option value="Sem Arcondicionado">Não</option>
          </select>
        </div>
        <div>
          <p className='py-5 text-base'>Quantas portas tem seu carro?</p>
          <select className='bg-blue-400 p-1 rounded' value={doors} onChange={(e) => setDoors(e.target.value)}>
            <option disabled value="">Seleciona uma opção</option>
            {[...Array(4).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
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
          <Button type="submit" Children='SALVAR' />
        </div>
      </form>
    </div>
  );
};

export default FormAddCars;
