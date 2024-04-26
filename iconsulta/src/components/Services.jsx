const callouts = [
    {
      name: 'iHome',
      description: 'Discover flexible living with iHome. From cozy apartments to spacious houses, find the perfect temporary home or rental service tailored to your needs.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'iMoveU',
      description: 'Relocate seamlessly with iMoveU. Trust our expert movers for efficient relocation services within California.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: '.',
      href: '#',
    },
    {
      name: 'iBoxMo',
      description: 'Simplify package deliveries with iBoxMo. Trust us for secure and prompt handling of your packages.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'iLabadaKo',
      description: 'Ease laundry day stress with iLabadaKo. Our laundry service ensures your clothes are washed, dried, and folded perfectly.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'iLinis',
      description: 'Keep your living space spotless with iLinis cleaning service.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'iPasabay',
      description: 'Save money and reduce your carbon footprint with iPasabay carpooling.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'iLabadaKo',
      description: 'Ease laundry day stress with iLabadaKo. Our laundry service ensures your clothes are washed, dried, and folded perfectly.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'iLinis',
      description: 'Keep your living space spotless with iLinis cleaning service.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'iPasabay',
      description: 'Save money and reduce your carbon footprint with iPasabay carpooling.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: '',
      href: '#',
    },
     {
      name: 'iLabadaKo',
      description: 'Ease laundry day stress with iLabadaKo. Our laundry service ensures your clothes are washed, dried, and folded perfectly.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'iLinis',
      description: 'Keep your living space spotless with iLinis cleaning service.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'iPasabay',
      description: 'Save money and reduce your carbon footprint with iPasabay carpooling.',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: '',
      href: '#',
    },
  ]
  
  export default function Services() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-4xl font-bold text-gray-900 text-center">Our Services</h2>
  
            <div className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  