import React from 'react'
import logo from './Images/Logo.png'
import location from './Images/location.png'
import phone from './Images/call.png'
import sms from './Images/sms.png'
import youtube from './Images/youtube.png'
import facebook from './Images/facebook.png'
import instagram from './Images/instagram.png'

const Footer = () => {
  return (
    <footer className='bg-footerbg'>
        <article className='flex justify-center items-center flex-col lg:flex lg:flex-row lg:justify-around pt-10 border-b-2 border-gray-500 pb-10'>
            <div className='text-p'>
                <div className='flex justify-center items-center'>
                <img src={logo} alt="logo" />
                </div>
                <div className='flex gap-2 my-5'>
                    <img className='w-8 h-8' src={location} alt="location" />
                    <p className='max-w-56 hover:text-pwo cursor-pointer'>25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
                </div>
                <div className='flex gap-2 my-5'>
                    <img className='w-6 h-6' src={phone} alt="phone" />
                    <p className='max-w-56 hover:text-pwo cursor-pointer'>+603 4784 273 12</p>
                </div>
                <div className='flex gap-2 my-5'>
                    <img className='w-6 h-6' src={sms} alt="sms" />
                    <p className='max-w-56 hover:text-pwo cursor-pointer'>rentcars@gmail.com</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-white pb-6'>Our Product</h1>
                <ul className='text-p'>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Career</li>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Car</li>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Packages</li>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Features</li>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Priceline</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-white pb-6'>Resources</h1>
                <ul className='text-p'>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Download</li>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Help Centre</li>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Guides</li>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Partner Network</li>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Cruises</li>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Developer</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-white pb-6'>About Rentcars</h1>
                <ul className='text-p'>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Why choose us</li>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Out Story</li>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Investor Relations</li>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Press Center</li>
                    <li className='my-3 hover:text-pwo cursor-pointer'>Advertise</li>
                </ul>
            </div>
            <div>
            <h1 className='font-bold text-white pb-6'>Follow Us</h1>
            <div className='flex gap-3'>
                <img className='hover:text-pwo cursor-pointer' src={facebook} alt="facebook" />
                <img className='hover:text-pwo cursor-pointer' src={instagram} alt="instagram" />
                <img className='hover:text-pwo cursor-pointer' src={youtube} alt="youtube" />
            </div>
            </div>
        </article>
        <div className='flex flex-col justify-center gap-6  items-center lg:flex lg:justify-around lg:flex-row text-p py-5'>
            <p className='font-medium'>Copyright 2024 ・ Rentcars, All Rights Reserved</p>
            <p>By: <a href="https://portfolio-nine-opal-13.vercel.app/" target='_blank'><span className='font-bold hover:underline cursor-pointer'>RuanDevz</span></a></p>
            </div>
    </footer>
  )
}

export default Footer