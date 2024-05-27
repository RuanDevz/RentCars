import React, { useContext } from 'react'
import { useState } from 'react'
import Context from '../../../useContext/Context'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import axios from 'axios'
const FormAddCars = () => {
    const [Namecar, setNamecar] = useState('')
    const [passagers, setPassagers] = useState('')
    const [marcha, setMarcha] = useState('')
    const [Airconditioning, setAirconditioning] = useState('')
    const [doors, setDoors] = useState('')
    const [price, setPrice] = useState('')
    const [imagecar, setImagecar] = useState('')
    const [nota, setNota] = useState('6') 
    const [reviews, setReviews] = useState('6') 
    const regex = /\B(?=(\d{3})+(?!\d))/g


    const {myid, setMsg,msg,setShowMessage,showMessage, error, setError } = useContext(Context)


    const Addcar = async (e) => {
    e.preventDefault()

    try {
        const isEmpty = Object.values({ Namecar, passagers, marcha, Airconditioning, doors, price, imagecar }).some(value => value === '');

        if (isEmpty) {
             setError('Preencha todos os campos!');
            setShowMessage(true)
            setTimeout(() => {
                window.location.reload()
            }, 3000);
            return
        }

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
        console.log(response.data)
        setMsg(response.data.msg)
        setTimeout(() => {
            window.location.reload()
        }, 3000);
        
    } catch (error) {
        console.error("Erro ao adicionar carro", error);
        setError('Erro ao adicionar carro');
    }

    setShowMessage(true)
}
  return (
    <div>
         <form className='border-4 border-primary p-2 rounded font-primary mb-28' onSubmit={Addcar}>
                        <p className='py-5 text-base'>Qual é o nome do seu carro</p>
                        <Input value={Namecar} onChange={(e) => setNamecar(e.target.value)} maxLength='20' placeholder='Marca do Carro' />
                        <div>
                            <p className='py-5 text-base'>Quantos passageiros cabem em seu carro ?</p>
                            <select className='bg-blue-400 p-1 rounded' name="Passageiros" id="Passageiros" value={passagers} onChange={(e) => setPassagers(e.target.value)}>
                                <option disabled value="">Seleciona uma opção</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </div>
                        <div>
                            <p className='py-5 text-base'>Qual é a marcha do seu carro ?</p>
                            <select className='bg-blue-400 p-1 rounded' name="marcha" id="marcha" value={marcha} onChange={(e) => setMarcha(e.target.value)}>
                                <option disabled value="">Seleciona uma opção</option>
                                <option value="Automatico">Automatico</option>
                                <option value="Manual">Manual</option>
                            </select>
                        </div>
                        <div>
                            <p className='py-5 text-base'>Tem Arcondicionado ?</p>
                            <select className='bg-blue-400 p-1 rounded' name="Arcondicionado" id="Arcondicionado" value={Airconditioning} onChange={(e) => setAirconditioning(e.target.value)}>
                                <option disabled value="">Seleciona uma opção</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
                        <div>
                            <p className='py-5 text-base'>Quantas portas tem seu carro ?</p>
                            <select className='bg-blue-400 p-1 rounded' name="Portas" id="Portas" value={doors} onChange={(e) => setDoors(e.target.value)}>
                                <option disabled value="">Seleciona uma opção</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div>
                            <p className='py-5 text-base'>Preço da diária do seu carro</p>
                            <Input value={price} onChange={(e) => setPrice(e.target.value)} maxLength='7' htmlFor='preco' children='Preço da diaria do seu carro' placeholder='Preço'/>
                        </div>
                        <div>
                            <p className='py-5 text-base'>URL da foto do seu carro</p>
                            <Input value={imagecar} onChange={(e) => setImagecar(e.target.value)} htmlFor='preco' children='Preço da diaria do seu carro' placeholder='URL da imagem'/>
                        </div>
                        <div className='flex justify-center items-center mt-10 mb-7'>
                            <Button onClick={Addcar} type="submit" Children='SALVAR'/>
                            
                        </div>
                    </form>
    </div>
  )
}

export default FormAddCars
