import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import processIcon from '/images/analytics.png';
import processIcon2 from '/images/strategic-design.png';
import processIcon3 from '/images/implementation-excellence.png';
import processIcon4 from '/images/contineous-optimization.png';
import ProcessCard from './ProcessCard';

const processData = [
  {
    id: 1,
    processIcon: processIcon,
    processTitle: 'Discovery & Analysis',
    processDesc: 'We begin by developing a comprehensive understanding of your current technological landscape, business objectives, and operational challenges. This phase includes stakeholder interviews, systems assessment, and documentation review to establish the foundation for solution design.',
    hoverBgImage: '/images/discovery-analysis.png',
  },
  {
    id: 2,
    processIcon: processIcon2,
    processTitle: 'Strategic Design',
    processDesc: 'Our architects create detailed solution blueprints that align technology capabilities with your business goals. We develop implementation roadmaps that balance quick wins with long-term transformation objectives, ensuring measurable progress throughout the engagement.',
    hoverBgImage: '/images/strategic-design-2.png',
  },
  {
    id: 3,
    processIcon: processIcon3,
    processTitle: 'Implementation Excellence',
    processDesc: 'Our certified specialists deploy solutions using a structured methodology that emphasizes quality, security, and knowledge transfer. We implement rigorous testing protocols to validate functionality, performance, and integration before systems go live.',
    hoverBgImage: '/images/implementation-&-excellence.png',
  },
  {
    id: 4,
    processIcon: processIcon4,
    processTitle: 'Continuous Optimization',
    processDesc: 'Implementation is just the beginning of our partnership. We provide ongoing support, performance monitoring, and regular system health checks to ensure your technology investments continue delivering maximum value as your business evolves.',
    hoverBgImage: '/images/continues-optimization.png',
  },
];

const Process = () => {
  return (
<section className='relative w-full pb-8 mt-[-40px] 2xl:mt-[-25px] bg-[url(/images/blog3_bg.png)] bg-no-repeat bg-cover bg-center  z-10 overflow-hidden'>      <div className="Container relative">
        <div className='text-center'>
          <h1 className='font-FiraSans font-semibold text-center mt-[50px] 2xl:mt-14 pl-3 text-gray-900 text-[32px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
            Our<span className="text-PrimaryColor2-0"> Methodology </span> 
          </h1>
        </div>

        {/* Mobile Grid (hidden on md and up) */}
        <div className='md:hidden grid grid-cols-1 gap-6 px-0 mt-8'>
          {processData.map(({ id, processIcon, processTitle, processDesc, hoverBgImage }) => (
            <ProcessCard
              key={id}
              processIcon={processIcon}
              processTitle={processTitle}
              processDesc={processDesc}
              hoverBgImage={hoverBgImage}
            />
          ))}
        </div>

        {/* Desktop Swiper (hidden on mobile) */}
        <div className='hidden md:block pb-16 mt-[56px] relative'>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            navigation={{
              nextEl: '.process-next-btn',
              prevEl: '.process-prev-btn',
            }}
            slidesPerView={3}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {processData.map(({ id, processIcon, processTitle, processDesc, hoverBgImage }) => (
              <SwiperSlide key={id}>
                <ProcessCard
                  processIcon={processIcon}
                  processTitle={processTitle}
                  processDesc={processDesc}
                  hoverBgImage={hoverBgImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className='process-prev-btn absolute top-1/2 -translate-y-1/2 left-[-80px] z-10 p-3 rounded-full bg-gray shadow-md hover:bg-PrimaryColor2-0 hover:text-white transition-colors duration-300'>
            <IoIosArrowBack size={26} />
          </button>
          <button className='process-next-btn absolute top-1/2 -translate-y-1/2 right-[-80px] z-10 p-3 rounded-full bg-gray shadow-md hover:bg-PrimaryColor2-0 hover:text-white transition-colors duration-300'>
            <IoIosArrowForward size={26} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;