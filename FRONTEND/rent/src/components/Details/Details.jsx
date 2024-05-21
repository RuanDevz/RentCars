import React from 'react';
import audi from './Images/Audi.png';
import wallet from './Images/wallet.png';
import tick from './Images/tick.png';
import suport from './Images/24suport.png';
import message from './Images/message.png';
import backgroundaudi from './Images/BackgroundAudi.png'

const Details = () => {
    const vantagens = [
        {
            img: wallet,
            title: 'Best price guaranteed',
            description: 'Find a lower price? We’ll refund you 100% of the difference'
        },
        {
            img: tick,
            title: 'Experience driver',
            description: 'Don’t have driver? Don’t worry, we have many experienced driver for you.'
        },
        {
            img: suport,
            title: '24 hour car delivery',
            description: 'Book your car anytime and we will deliver it directly to you.'
        },
        {
            img: message,
            title: '24/7 technical support',
            description: 'Have a question? Contact Rentcars support any time when you have problem.'
        }
    ];

    return (
        <div>
            <main data-aos="zoom-in" className='lg:flex lg:justify-between mt-72'>
                <section className='car'>
                    <img className='absolute z-10 mt-28' src={audi} alt="audi" />
                    <img src={backgroundaudi} alt="backgroundaudi" />
                </section>
                <section className='flex flex-col justify-center items-center lg:mr-44'>
                    <p className='mt-32 whitespace-nowrap text-primary lg:text-primary font-medium py-3 px-10 bg-blue-100 rounded mb-10 max-w-56'>WHY CHOOSE US</p>
                    <h1 className='text-center lg:font-primary font-medium text-4xl max-w-xl'>We offer the best experience with our rental deals</h1>
                    <div>
                        {vantagens.map((vantagem, index) => (
                            <div className='flex items-center gap-7 my-10' key={index}>
                                <div className='bg-blue-100 p-5 rounded-3xl'>
                                    <img className=' lg:p-1 lg:bg-blue-100 rounded-3xl' src={vantagem.img} alt={vantagem.title} />
                                </div>
                                <div>
                                <h1 className='font-medium text-xl font-primary'>{vantagem.title}</h1>
                                <p className='font-primary font-normal text-gray-500 max-w-96'>{vantagem.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Details;
