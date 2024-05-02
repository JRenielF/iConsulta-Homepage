import React from 'react';

const services = [
  {
    name: 'iHome',
    description: 'Discover flexible living with iHome. From cozy apartments to spacious houses, find the perfect temporary home or rental service tailored to your needs.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    href: '#',
  },
  {
    name: 'iMoveU',
    description: 'Relocate seamlessly with iMoveU. Trust our expert movers for efficient relocation services within California.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    href: '#',
  },
  {
    name: 'iBoxMo',
    description: 'Simplify package deliveries with iBoxMo. Trust us for secure and prompt handling of your packages.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    href: '#',
  },
  {
    name: 'iLabadaKo',
    description: 'Ease laundry day stress with iLabadaKo. Our laundry service ensures your clothes are washed, dried, and folded perfectly.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    href: '#',
  },
  {
    name: 'iLinis',
    description: 'Keep your living space spotless with iLinis cleaning service.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    href: '#',
  },
  {
    name: 'iPasabay',
    description: 'Save money and reduce your carbon footprint with iPasabay carpooling.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    href: '#',
  },
];

export default function Services() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={service.imageSrc} alt={service.name} className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-700">{service.description}</p>git 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
