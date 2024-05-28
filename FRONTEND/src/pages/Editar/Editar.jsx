import React, { useContext, useState, useEffect } from 'react';

import car from '../../assets/Images/Car.png';

import HeaderLogged from '../../components/ComponentLogado/HeaderLogged/HeaderLogged';
import Footer from '../../components/Footer/Footer';
import FormEditCars from '../../components/ComponentLogado/Formcars/FormEditCars';
import Context from '../../useContext/Context';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import axios from 'axios'
import Popup from '../../components/Popup/Popup';
import './Editar.css'

const Editar = () => {
    const { setMycars, mycars, myid, carData, setCarData, showMessage, setShowMessage, setMsg, msg, setError, error } = useContext(Context);
    const navigate = useNavigate()

    const [zoom, setZoom] = useState(0.8)
  
    const [carId, setCardid] = useState('')
  
    const [namecar, setNamecar] = useState('');
    const [passagers, setPassagers] = useState('');
    const [marcha, setMarcha] = useState('');
    const [airconditioning, setAirconditioning] = useState('');
    const [doors, setDoors] = useState('');
    const [price, setPrice] = useState('');
    const [imagecar, setImagecar] = useState('');
  
    useEffect(() => {
      if (carId) {
        axios.get(`https://rent-cars-jdua.vercel.app/car/${myid}/cars/${carId}`)
          .then((response) => {
            setCarData(response.data);
          })
          .catch((error) => {
            console.error("Erro ao buscar dados do carro", error);
          });
      }
    }, [carId, myid, setCarData]);
  
    console.log(myid, carId)
  
    useEffect(() => {
      if (carData) {
        setCardid(carData.id)
        setNamecar(carData.name);
        setPassagers(carData.passageiros);
        setMarcha(carData.marcha);
        setAirconditioning(carData.arcondicionado);
        setDoors(carData.portas);
        setPrice(carData.price);
        setImagecar(carData.img);
      }
    }, [carData]);
  
  
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
        const response = await axios.put(`https://rent-cars-jdua.vercel.app/car/${myid}/cars/${carId}`, updatedData);
        setShowMessage(true)
        setMsg('Carro atualizado com sucesso!')
        setTimeout(() => {
          navigate('/DashboardLooged/Meuscarros')
          window.location.reload()
        }, 3000);
        console.log(response.data.msg);
      } catch (error) {
        console.error("Erro ao atualizar carro", error);
        setShowMessage(true)
        setMsg('Erro ao atualizar carro')
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      Updatecar();
    };

    return (
        <div style={{zoom: zoom}}>
            <HeaderLogged/>
            <div className='flex justify-center mx-auto mt-10 p-5 lg:mt-20 whitespace-nowrap text-primary lg:text-primary font-medium py-3 px-14 bg-blue-100 rounded mb-10 max-w-64'>
                <h1 className='text-2xl text-primary'>Editar seu carro</h1>
            </div>
            <main className='flex justify-between flex-col items-center lg:flex-row-reverse'>
                <section>
                <img className='w-car-width' src={car} alt="Car" />
                {showMessage && <Popup/>}
                </section>
                <section className='ml-20lg:relative top-0 left-0 mt-32'>
                <div>
      <form className='border-4 border-primary p-2 rounded font-primary relative ml-0 mt-0 lg:absolute top-0 lg:mt-32 lg:ml-32' onSubmit={handleSubmit}>
        <p className='py-5 text-base'>Qual é o nome do seu carro</p>
        <div data-aos='fade-left'>
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
          <Button onClick={handleSubmit} Children='Salvar' type="submit"></Button>
        </div>
      </form>
    </div>
                </section>
            </main>
            <div className='mt-64'>
            <Footer/>
            </div>
        </div>
    );
};

export default Editar;
