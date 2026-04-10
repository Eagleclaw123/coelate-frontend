import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const partnershipImage = "/images/Differentiators1.jpeg";

const CloudServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Integration Strategy & Advisory",
      image: "/images/service1.png",
      bgimage: "/images/BTP/BTP_Services-01.jpg",
      items: [
        "Conduct comprehensive assessments of your current IT landscape and design future-proof integration roadmaps.",
        "Align SAP BTP capabilities (Integration Suite, Data Intelligence, AI) with your specific business objectives and growth plans.",
      ],
    },
    {
      title: "SAP Integration Suite Implementation",
      image: "/images/service2.png",
      bgimage: "/images/BTP/BTP_Services-02.jpg",
      items: [
        "Deploy Cloud Integration, API Management, and Open Connectors to establish end-to-end connectivity.",
        "Leverage our library of prebuilt templates for common integration scenarios (ERP ↔ CRM, HR ↔ payroll, IoT ↔ analytics).",
      ],
    },
    {
      title: "Advanced Integration Solutions",
      image: "/images/service3.png",
      bgimage: "/images/BTP/BTP_Services-03.jpg",
      items: [
        "B2B/EDI Integration: Streamline partner onboarding, establish EDI mappings, and ensure regulatory compliance.",
        "Process Orchestration: Automate complex multi-system workflows with SAP Process Automation.",
        "Data Harmonization: Synchronize critical master data (customers, products, suppliers) across your enterprise platforms.",
      ],
    },
    {
      title: "Optimization & Innovation",
      image: "/images/service4.png",
      bgimage: "/images/BTP/BTP_Services-04.jpg",
      items: [
        "Modernize legacy middleware through strategic migration from SAP PI/PO to cloud-native Integration Suite.",
        "Embed AI/ML capabilities for predictive maintenance, anomaly detection, and intelligent routing.",
        "Implement proactive monitoring, performance optimization, and comprehensive security protocols.",
      ],
    },
  ];
  const techStackData = [
    {
      title: "Future-Ready Architecture ",
      
      items: [
        "We design microservices-based, event-driven workflows and comprehensive API ecosystems built for long-term scalability.",
      ],
    },
    {
      title: "Business Outcome Focus",
      
      items: [
      
        " Our success metrics include tangible ROI, measurable process efficiency gains, and accelerated time-to-market.  ",
      ],
    },
  
    {
      title: "Security by Design ",
      
      items: [
        "We implement OAuth protocols, advanced encryption, and API threat protection as standard integration components. ",
      ],
    }
    ];

  const services = [
    {
      title: "Healthcare",
      description: "Connect patient records, billing systems, and IoT-enabled medical devices for improved patient care.",
      image: "/images/health.png",
      bgImage: "/images/Healthcare1.png",
      color: "bg-blue-100",
    },
    {
      title: "Retail",
      description: "Unify e-commerce platforms, inventory management, and customer loyalty systems for omnichannel excellence.",
      image: "/images/retail.png",
      bgImage: "/images/Retail1.png",
      color: "bg-blue-100",
    },
    {
      title: "Manufacturing",
      description: "Integrate shop floor IoT devices, supply chain systems, and ERP for end-to-end visibility.",
      image: "/images/manufature.png",
      bgImage: "/images/Manfacturing1.png",
      color: "bg-blue-100",
    },
    {
      title: "Financial Services",
      description: "Automate compliance reporting and establish secure core banking integrations",
      image: "/images/finace.png",
      bgImage: "/images/finance.png",
      color: "bg-blue-100",
    },
    {
      title: "Utility",
      description: "Evaluate infrastructure, compliance needs, and operational risks across gas, oil, and water systems.",
      image: "/images/ut_1.png",
      bgImage: "/images/utility1.png",
      color: "bg-blue-100",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Business Platform Services Section */}
      <section className="py-16 mt-[-60px] 2xl:mt-0 bg-white w-full bg-[url(/images/blog3_bg.png)] bg-no-repeat bg-center bg-cover">
  <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
    {/* Animated Header */}
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl mt-[-25px] md:text-4xl font-bold text-gray-900"
      >
        Coelate's  <span className="text-PrimaryColor2-0">Business</span> Platform Services 
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-TextColor2-0 max-w-3xl mx-auto mt-4"
      >
        Where Your Business Vision Meets Data Excellence
      </motion.p>
    </div>

    {/* Grid for Mobile & Tablet */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8 perspective-[1500px]">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative w-full h-[500px]  2xl:h-[600px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
        >
          {/* Front Face */}
          <div className="absolute inset-0 bg-white p-6 rounded-xl border border-gray-200 shadow-md [backface-visibility:hidden] overflow-hidden flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center mr-4 overflow-hidden p-3 bg-white/75">
                <img
                  src={feature.image || `/icons/platform-service-${index + 1}.svg`}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-PrimaryColor-0">
                {feature.title}
              </h3>
            </div>
            <ul className="space-y-3 overflow-y-auto pr-2">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✦</span>
                  <span className="text-TextColor2-0 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Back Face */}
          <div
            className="absolute inset-0 rounded-xl border border-blue-200 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden flex flex-col"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${feature.bgimage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="p-6 h-full w-full flex flex-col justify-start overflow-y-auto pr-2">
              <div className="flex items-center mb-4">
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center mr-4 overflow-hidden p-3 bg-white/75">
                  <img
                    src={feature.image || `/icons/platform-service-${index + 1}.svg`}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-white mr-2 mt-1">✦</span>
                    <span className="text-white leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Swiper for Desktop */}
    <div className="hidden lg:block relative group mt-10">
      {/* Navigation Buttons */}
     {/* Navigation Buttons (Always Visible) */}
<button
  className="platform-prev-btn absolute left-[-90px] top-1/2 z-10 -translate-y-1/2 h-[80%] w-16 flex items-center justify-center opacity-100 transition-opacity duration-300"
  aria-label="Previous"
>
  <div className="p-4 rounded-full bg-white shadow-xl hover:bg-PrimaryColor2-0 hover:text-white transition-colors duration-300">
    <IoIosArrowBack size={32} />
  </div>
</button>
<button
  className="platform-next-btn absolute right-[-90px] top-1/2 z-10 -translate-y-1/2 h-[80%] w-16 flex items-center justify-center opacity-100 transition-opacity duration-300"
  aria-label="Next"
>
  <div className="p-4 rounded-full bg-white shadow-xl hover:bg-PrimaryColor2-0 hover:text-white transition-colors duration-300">
    <IoIosArrowForward size={32} />
  </div>
</button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={false}
        navigation={{
          nextEl: '.platform-next-btn',
          prevEl: '.platform-prev-btn',
        }}
        className="!pb-10 mx-auto w-full"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index} className="!flex justify-center">
            <div className="relative w-full max-w-[400px] h-[450px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              {/* Front Face */}
              <div className="absolute inset-0 bg-white p-6 rounded-xl border border-gray-200 shadow-md [backface-visibility:hidden] overflow-hidden flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center mr-4 overflow-hidden p-3 bg-white/75">
                    <img
                      src={feature.image || `/icons/platform-service-${index + 1}.svg`}
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-PrimaryColor-0">
                    {feature.title}
                  </h3>
                </div>
                <ul className="space-y-3 overflow-y-auto pr-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">✦</span>
                      <span className="text-TextColor2-0 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back Face */}
              <div
                className="absolute inset-0 rounded-xl border border-blue-200 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden flex flex-col"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${feature.bgimage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="p-6 h-full w-full flex flex-col justify-start overflow-y-auto pr-2">
                  <div className="flex items-center mb-4">
                    <div className="w-24 h-24 rounded-2xl flex items-center justify-center mr-4 overflow-hidden p-3 bg-white/75">
                      <img
                        src={feature.image || `/icons/platform-service-${index + 1}.svg`}
                        alt={feature.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-white mr-2 mt-1">✦</span>
                        <span className="text-white leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>

        <section className="bg-gray-50 bg-no-repeat bg-center bg-cover py-16 px-4 sm:px-6 lg:px-8 w-full">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl mt-[-25px] md:text-4xl font-bold text-gray-900"
      >
        What Makes <span className="text-PrimaryColor2-0">Coelate</span> Unique
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-TextColor2-0 max-w-3xl mx-auto mt-4"
      >
        {/* Optional description can go here */}
      </motion.p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {techStackData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * index }}
          whileHover={{ y: -5 }}
          className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          {/* Animated Blue Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1">
            <div className="absolute bottom-0 left-0 h-full w-0 bg-PrimaryColor-0 group-hover:w-full transition-all duration-500 ease-out"></div>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-PrimaryColor-0">{item.title}</h3>
          <ul className="space-y-2">
            {item.items.map((point, i) => (
              <li key={i} className="flex items-start group">
                <span className="text-blue-500 mr-2 group-hover:scale-125 transition-transform">✓</span>
                <span className="text-TextColor2-0 group-hover:text-gray-800 transition-colors">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Industries We Serve Section */}
      <section className="w-full bg-[url(/images/blog3_bg.png)]  bg-no-repeat bg-center bg-cover">
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              <span className="text-PrimaryColor2-0">Industries </span>Who We Served
            </motion.h2>
          </motion.div>
        
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { type: "spring", stiffness: 300 }
                  }
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                }}
                className="relative overflow-hidden rounded-xl transition-all flex flex-col group bg-blue-100 border border-gray-200 shadow-sm p-6"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                />
        
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div 
                    className="flex justify-center mb-4 h-20"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="mt-[-20px] h-[120px] w-[120px] object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-PrimaryColor-0 group-hover:text-PrimaryColor2-0 text-center">
                    {service.title}
                  </h3>
                  <p className="text-TextColor2-0 group-hover:text-white tracking-[0.5px] leading-[1.6] text-center">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentiators Section */}
     

    </div>
  );
};

export default CloudServices;