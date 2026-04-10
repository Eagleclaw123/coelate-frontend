import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Import client logos (replace with your actual image paths)
import client1 from '/images/clients/AI.png';
import client2 from '/images/clients/Basamh.png';
import client3 from '/images/clients/BSI.png';
import client4 from '/images/clients/EA.png';
import client5 from '/images/clients/PET.png';
import client6 from '/images/clients/Raw.png';
import client7 from '/images/clients/MSP.png';

const OurClients = () => {
  const clients = [
    { id: 1, logo: client1 },
    { id: 2, logo: client2 },
    { id: 3, logo: client3 },
    { id: 4, logo: client4 },
    { id: 5, logo: client5 },
    { id: 6, logo: client6 },
    { id: 7, logo: client7 },
    // Add more clients as needed
  ];

  return (
   <section className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="font-FiraSans font-medium text-xs sm:text-sm md:text-base text-PrimaryColor-0 uppercase tracking-wider mb-2 md:mb-3">
            
          </p>
          <h2 className="font-FiraSans font-bold text-gray-900 text-[34px] sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] 2xl:mt-[-25px] leading-tight">
            Our Valued <span className="text-PrimaryColor2-0">Customers</span>
          </h2>
        </div>

        {/* Clients Slider */}
        <div className="relative px-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            autoplay={{
              delay: 2500, // 2.5 seconds delay between slides
              disableOnInteraction: false, // continue autoplay after user interaction
            }}
            loop={true} // enable infinite loop
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="h-40 flex items-center justify-center p-4">
                  <img 
                    src={client.logo} 
                    alt={`Client ${client.id} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurClients;