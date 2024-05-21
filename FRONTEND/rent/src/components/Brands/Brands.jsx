import React, { useState, useEffect } from 'react';
import Audi from './Images/Audi.png';
import Jaguar from './Images/Jaguar.png';
import Nissan from './Images/Nissan.png';
import Volvo from './Images/Volvo.png';
import Acura from './Images/Acura.png'
import Honda from './Images/Hondaa.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';



const Brands = () => {


  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      setSlidesPerView(isDesktop ? 4 : 1);
    };

    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);
    
  return (
    <div className='ml-32'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{ delay: 1200 }} 
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ margin: '0 auto' }} // Adicionando estilo inline para centralizar
      >
        <SwiperSlide><img src={Audi} alt="Audi" /></SwiperSlide>
        <SwiperSlide><img src={Jaguar} alt="Jaguar" /></SwiperSlide>
        <SwiperSlide><img src={Nissan} alt="Nissan" /></SwiperSlide>
        <SwiperSlide><img src={Volvo} alt="Volvo" /></SwiperSlide>
        <SwiperSlide><img src={Acura} alt="Acura" /></SwiperSlide>
        <SwiperSlide><img src={Honda} alt="Honda" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
