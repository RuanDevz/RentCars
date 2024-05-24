import React from 'react'
import HeaderLogged from '../HeaderLogged/HeaderLogged'
import CarAudi from '../../CarAudi/CarAudi'
import Input from '../../Input/Input'
import Button from '../../Button/Button'

const MyCars = () => {
  return (
    <div>
        <HeaderLogged />
      <main className='font-primary flex justify-between'>
        <section >
            
            <div className='flex justify-center mx-auto mt-10 p-5 lg:mt-20 whitespace-nowrap text-primary lg:text-primary font-medium py-3 px-14 bg-blue-100 rounded mb-10 max-w-64'>
            <h1 className='text-2xl text-primary '>Alugue o seu carro</h1>
            </div>
            <CarAudi/>
        </section>
        <section className='mt-10 mr-28'>
            <form className='border-4 border-primary p-4 rounded font-primary'>
                <p className='py-5 text-xl'>Qual é a marca do seu carro</p>
            <Input maxLength='20' placeholder='Marca do Carro' />
            <div>
                <p className='py-5 text-xl'>Quantos passageiros cabem em seu carro ?</p>
                <select className='bg-blue-400 p-2 rounded' name="Passageiros" id="Passageiros">
                    <option selected disabled value="Seleciona uma opção">Seleciona uma opção</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">Outro</option>
                </select>
            </div>
            <div>
                <p className='py-5 text-xl'>Qual é a marcha do seu carro ?</p>
                <select className='bg-blue-400 p-2 rounded' name="marcha" id="marcha">
                    <option selected disabled value="Seleciona uma opção">Seleciona uma opção</option>
                    <option value="Automatico">Automatico</option>
                    <option value="Manual">Manual</option>
                </select>
            </div>
            <div>
                <p className='py-5 text-xl'>Tem Arcondicionado ?</p>
                <select className='bg-blue-400 p-2 rounded' name="Arcondicionado" id="Arcondicionado">
                     <option selected disabled value="Seleciona uma opção">Seleciona uma opção</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
            </div>
            <div>
                <p className='py-5 text-xl'>Quantas portas tem seu carro ?</p>
                <select className='bg-blue-400 p-2 rounded' name="Portas" id="Portas">
                <option selected disabled value="Seleciona uma opção">Seleciona uma opção</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>
            <div>
                <p className='py-5 text-xl'>Preço da diária do seu carro</p>
                <Input maxLength='7' htmlFor='preco' children='Preço da diaria do seu carro' placeholder='Preço'/>
            </div>
            </form>
            <div className='flex justify-center items-center mt-10'>
            <Button Children='ADICIONAR CARRO'/>
            </div>
        </section>
      </main>
    </div>
  )
}

export default MyCars
