import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'; 
import 'swiper/css';
import 'swiper/css/navigation'; // Import the Navigation styles
import { Navigation, Autoplay } from 'swiper/modules'; // Import the Navigation module
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import border from '/images/hero_border.png';
import testiThumb from '/images/auothor.png';
import testiThumb2 from '/images/auothor2.png';
import testiQuote from '/images/quote.png';
import CountUp from 'react-countup';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import serviceShape2 from '/images/about_shape_3.png';
import serviceShape3 from '/images/service_shpe2.png';
// import serviceShape4 from '/images/tir.png';

const testiData = [
  {
    id: 1,
    testiThumb: testiThumb,
    testiQuote: testiQuote,
    testiDesc: "Coelate expertly managed our SAP Business One integration with our POS platform, delivering a flawless, end-to-end solution on schedule. Their team was proactive, responsive, and highly professional—anticipating challenges before they arose and maintaining clear communication every step of the way. Thanks to Coelate’s dedication, we achieved uninterrupted operations and greater efficiency. ",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'Bijad Hussein ',
    testiDesignation: 'IT Director-Rawabi',
  },
  {
    id: 2,
    testiThumb: testiThumb2,
    testiQuote: testiQuote,
    testiDesc: "We are incredibly grateful for the exceptional support provided by the Coelate Technologies team. Their dedication, technical expertise, and prompt responses to critical issues have been crucial in maintaining the stability and performance of our systems.Thanks to their proactive monitoring, swift troubleshooting, and collaborative approach, our SAP environment runs smoothly and efficiently. ",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'Mohamed Ali Elsayyad',
    testiDesignation: 'IT Manager-Al Nasser Group',
  },
  {
    id: 3,
    testiThumb: testiThumb,
    testiQuote: testiQuote,
    testiDesc: "Partnering with Coelate for our SAP implementation has been an excellent experience. Their team brought strong technical expertise, professionalism, and a deep understanding of our business needs. They were responsive, collaborative, and consistently delivered high-quality solutions on time.",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'Shankary',
    testiDesignation: 'Project Manager - MSP',
  },
  {
    id: 4,
    testiThumb: testiThumb,
    testiQuote: testiQuote,
    testiDesc: "Coelate Technologies has proven to be a trusted partner for our SAP change requests. Their strong SAP expertise and consistent delivery of accurate, well-documented solutions—ranging from simple updates to complex enhancements—have helped us maintain system integrity and align IT with business needs. We truly value them as a strategic IT partner.",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'Kalyan Sagiraju',
    testiDesignation: 'Global Head - IT & Business Systems-Petronash',
  },
  {
    id: 5,
    testiThumb: testiThumb,
    testiQuote: testiQuote,
    testiDesc: "We have been working with Coelate Technologies over the years, and their support in SAP technical services and the Fiori migration as part of our digital transformation journey has been exceptional. Their deep expertise, prompt response times, and proactive approach have consistently ensured the stability and performance of our SAP environment.",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'Mohammed Aslam Shareef',
    testiDesignation: 'Projects Management Office Manager - Saudi Modern Foods Factory',
  },
  {
    id: 6,
    testiThumb: testiThumb,
    testiQuote: testiQuote,
    testiDesc: "I joined Coelate last year, and I can confidently say that the entire experience—from hiring to onboarding—has been exceptional. The process was handled with full transparency and consistent communication. I always felt supported and had everything I needed to succeed in my role. I feel fortunate to be part of Coelate and would highly recommend it as an employer.",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'Rose Andrea Franco',
    testiDesignation: ' Senior cloud network engineer',
  },

];

// Custom Navigation Buttons Component
const CustomNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className='flex justify-center gap-4 mb-4'> {/* Simplified container */}
      <button
        onClick={() => swiper.slidePrev()}
        className="p-4 rounded-full mr-6 bg-white shadow-xl hover:bg-PrimaryColor2-0 hover:text-white transition-colors duration-300"
        aria-label="Previous"
      >
        <IoIosArrowBack size={32} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="p-4 rounded-full bg-white shadow-xl hover:bg-PrimaryColor2-0 hover:text-white transition-colors duration-300"
        aria-label="Next"
      >
        <IoIosArrowForward size={32} />
      </button>
    </div>
  );
};


const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1500,
    autoplay: true,
    navigation: {
    nextEl: '.platform-next-btn',
    prevEl: '.platform-prev-btn',
  },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <section className='testimonial pt-[14px] pb-[6px] xl:pt-24 pb-[100px] bg-[url(/images/blog3_bg.png)] bg-no-repeat bg-cover bg-center relative z-10 overflow-hidden'>
      {/* <div 
      className='absolute -z-10 top-[5%] left-[90%] animate-rotate hidden 2xl:block' >
        <img
          src={serviceShape4}
          draggable='false'
        />
      </div> */}
      <div className='absolute -z-10 top-1/4 -left-40 hidden 2xl:block animate-rotate'>
        <img
          src={serviceShape3}
          draggable='false'
        />
      </div>
      <div className='absolute -z-10 right-10 bottom-10 hidden 2xl:block animate-rotate'>
        <img
          src={serviceShape3}
          draggable='false'
        />
      </div>
      <div className='mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8'>
     
            <Swiper
              {...settings}
              modules={[Navigation, Autoplay]} // Add Navigation module
            >
              {testiData.map(
                ({
                  id,
                  // testiThumb,
                  // testiQuote,
                  // testiRatingIcon,
                  testiName,
                  testiDesignation,
                  testiDesc,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className='pb-[52px]'>
                        <TestimonialCard
                          // testiThumb={testiThumb}
                          // testiQuote={testiQuote}
                          // testiRatingIcon={testiRatingIcon}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiDesc={testiDesc}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
              <CustomNavigation /> {/* Add custom navigation buttons */}
            </Swiper>
        
      </div>
    </section>
  );
};

export default Testimonial;