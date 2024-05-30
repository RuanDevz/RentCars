import React from 'react'
import Googleplay from '../../assets/Images/Googleplay.png'
import Appstore from '../../assets/Images/Appstore.png'
import car from '../../assets/Images/Car.png'
import background from '../../assets/Images/Background.png'
import Easily from '../../assets/Images/Backgrounddestaq.png'
import SearchBar from '../SearchBar/SearchBar'


const Home = () => {
  return (
    <div>
        <main data-aos="zoom-in"  className='flex justify-around items-center mx-auto -z-10'>
            <section className=' text-center mt-80 mx-auto  lg:flex flex-col max-width420 lg:text-left  pt-52 lg:absolute left-52'>
                <h1 className='font-primary text-5xl font-semibold'>Find, book and rent a car <span className='text-primary'>Easily</span></h1>
                <img className='w-32 left-14rem' src={Easily} alt="Easily" />
                <p className='py-10 font-semibold text-lg'>Get a car wherever and whenever you need it with your IOS and Android device.</p>
                <div className='flex justify-around items-center lg:flex lg:justify-start gap-4'>
                    <img src={Googleplay} alt="Googleplay" />
                    <img src={Appstore} alt="Googleplay" />
                </div>
            </section>
            <section className='lg:mt-64'>
                <img data-aos="zoom-in" className='hidden absolute top-0 right-0 w-1k lg:block' src={background} alt="" />
                <img data-aos="zoom-in" className='absolute top-60 right-0 w-car' src={car} alt="car" />
            </section>
        </main>
    </div>
  )
}

export default Home