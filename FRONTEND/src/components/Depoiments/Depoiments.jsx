import React from 'react';
import Man from './Images/Man.png';
import Girl from './Images/Girl.png';
import Stars from './Images/Stars.png';
import aspasleft from './Images/aspasleft.png'
import aspasright from './Images/aspasright.png'

const Depoiments = [
  {
    Stars: '5.0',
    description: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    Name: 'Charlie Johnson',
    City: 'New York, US',
    Img: Man,
  },
  {
    Stars: '4.5',
    description: 'I had a great experience with caretall. The service was efficient and the staff was friendly. Definitely recommend!',
    Name: 'Emily Smith',
    City: 'Los Angeles, US',
    Img: Girl
  }
];

const DepoimentsComponent = () => {
  return (
    <div data-aos="fade-down" className='bg-depoiments pt-1'>
     <div className='flex justify-between lg: relative'>
     <img className=' w-32 lg:w-96 absolute top-0 left-0' src={aspasleft} alt="aspasleft" />
      <img className=' w-32 lg:w-96 absolute top-0 right-0' src={aspasright} alt="aspasright" />
     </div>
      <div className='mt-40 flex justify-around flex-col mx-auto items-center'>
        <p className='text-primary font-medium py-3 px-10 bg-blue-100 rounded mb-10 w-64 text-center whitespace-nowrap'>TESTIMONIALS</p>
        <h1 className='text-center lg:font-primary font-medium text-4xl pb-40'>What people say about us?</h1>
      </div>
      <div className='flex flex-col  lg:flex lg:flex-row justify-around'>
      {Depoiments.map((depoiment, index) => (
        <div key={index} className='flex flex-col lg:flex lg:flex-row justify-center max-w-3xl mx-auto font-primary font-normal pb-30 mb-40 shadow-2xl rounded-lg'>
          <img src={depoiment.Img} alt={depoiment.Name} />
          <div className='flex flex-col pl-10'>
            <div className='flex items-end pb-3'>
              <h1 className='pt-10 lg:font-primary text-6xl font-bold lg:pt-3'>{depoiment.Stars}</h1>
              <p className='text-base font-primary pl-2 font-medium'>stars</p>
            </div>
            <div className='flex gap-1 pb-10'>
              {[...Array(parseInt(depoiment.Stars))].map((_, index) => (
                <img key={index} className='w-6 h-6' src={Stars} alt="Stars" />
              ))}
            </div>
            <div>
              <p className='pb-32 max-w-96'>{depoiment.description}</p>
              <h2 className='font-medium text-2xl'>{depoiment.Name}</h2>
              <p className='pb-5 lg:text-sm text-gray-400'>From {depoiment.City}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default DepoimentsComponent;
