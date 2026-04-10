import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './banner.css';
import { motion } from 'framer-motion';

const Banner = () => {
  const slides = [
    {
      image: '/images/aii.gif',
      title: (
        <>
          Powering Business Evolution
          <br />
          Through Strategic Technology Integration!
        </>
      ),
    },
    {
      image: '/images/SAP.gif',
      title: (
        <>
          Engineering Smarter Enterprises
          <br />
          with SAP and Beyond!
        </>
      ),
    },
    {
      image: '/images/banner4.gif',
      title: (
        <>
          Integrating Businesses with
          <br />
          Future Technology!
        </>
      ),
    },
  ];

  const settings = {
    loop: true,
    speed: 1500,
    autoplay: { delay: 9000, disableOnInteraction: false },
    navigation: true,
    effect: 'fade',
    modules: [EffectFade, Autoplay, Navigation],
    fadeEffect: { crossFade: true },
    preloadImages: false, // Disable preloading
    lazy: true, // Enable lazy loading
  };

  return (
    <div className="relative">
      <Swiper {...settings}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[450px] sm:h-[600px] md:h-[600px] lg:h-[650px] xl:h-[700px]">
              {/* Optimized image loading */}
              <img
                src={slide.image}
                alt=""
                className="absolute w-full h-full object-cover"
                loading="lazy" // Lazy load images
                decoding="async" // Non-blocking decoding
              />
              
              <div className="absolute inset-0 bg-black/30"></div>
              
              <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex items-center">
                <div className="banner-content text-center sm:text-left max-w-2xl mx-auto sm:mx-0 sm:ml-[90px]">
                  <motion.h2
                    className="font-FiraSans font-semibold text-white text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-4xl leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h2>

                  <motion.div
                    className="flex flex-row sm:flex-row justify-center sm:justify-start items-center gap-2 sm:gap-3 md:gap-4 pt-6 sm:pt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Link to="/contact">
                      <button className="text-white font-medium text-sm sm:text-base md:text-lg px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3.5 xl:px-10 xl:py-5 bg-PrimaryColor2-0 rounded-lg shadow-lg hover:opacity-90 transition duration-300 transform hover:scale-105 active:scale-95">
                        Contact Us
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;