import React from 'react'
import Iphone from './Images/Iphone.png'
import Googleplay from './Images/Googleplay.png'
import Appstore from './Images/Appstore.png'
import Background from './Images/Background.png'

const Download = () => {
  return (
    <div>
        <main data-aos="fade-right" className='flex justify-center items-center lg:flex lg:justify-between font-primary'>
            <img className='flex absolute left-0'  src={Background} alt="Background" />

            <section className='mx-auto flex items-center lg:max-w-lg lg:ml-40 pt-20 flex-col items-center lg:flex'>
                <p className='lg:text-primary font-medium py-3 text-sm px-10 bg-blue-100 rounded mb-10 w-40 text-center whitespace-nowrap'>DOWNLOAD</p>
                <h1 className='font-bold text-5xl text-center'>Download Rentcars App for <span className='text-primary'>FREE</span></h1>
                <p className='py-10 text-center'>For faster, easier booking and exclusive deals.</p>
                <div className='pb-20 flex flex-rowlg:flex gap-5'>
                    <img className='cursor-pointer z-30' src={Googleplay} alt="Googleplay" />
                    <img className='cursor-pointer z-30' src={Appstore} alt="Appstore" />
                </div>
            </section>
            <section className='hidden lg:block mr-24 mt-16'>
                <img src={Iphone} alt="Iphone" />
            </section>
        </main>
    </div>
  )
}

export default Download
