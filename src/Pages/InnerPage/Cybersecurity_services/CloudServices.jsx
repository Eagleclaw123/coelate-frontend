import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CloudServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Data
  

  const services = [
    {
      title: "Healthcare Provider",
      description: "Achieved complete HIPAA compliance management while securing sensitive patient data across 50+ distributed clinics.",
      image: "/images/health.png",
      bgImage: "/images/Healthcare1.png",
      color: "bg-blue-100",
    },
    {
      title: "Retail Giant",
      description: "Reduced phishing vulnerability by 80% through comprehensive employee training and enterprise-wide MFA implementation.",
      image: "/images/retail.png",
      bgImage: "/images/Retail1.png",
      color: "bg-blue-100",
    },
    {
      title: "Fintech Startup",
      description: "Implemented end-to-end encryption protocols, securing PCI-DSS certification in just 90 days.",
      image: "/images/tec_2.png",
      bgImage: "/images/Technology_image.png",
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

  const features = [
    {
      title: "Threat Detection & Prevention",
      image: "/images/service1.png",
      bgimage: "/images/Cybersecu/comprehensive_cyber-01.jpg",
      items: [
        "Advanced Monitoring: Continuous 24/7 surveillance utilizing AI-powered tools to identify anomalies before they become breaches.",
        "Next-Gen Firewalls & Endpoint Security: Multilayered ransomware protection that blocks sophisticated phishing attempts and zero-day attacks.",
        "Penetration Testing: Rigorous security assessments that simulate real-world attacks to uncover hidden vulnerabilities.",
      ],
    },
    {
      title: "Risk Assessment & Management",
      image: "/images/service2.png",
      bgimage: "/images/Cybersecu/comprehensive_cyber-02.jpg",
      items: [
        "Vulnerability Scans: Systematic identification of weaknesses across networks, applications, and cloud environments.",
        "Custom Risk Mitigation Plans: Strategic prioritization of security risks with implementation of tailored safeguards.",
        "Cybersecurity Audits: Comprehensive evaluations aligned with leading frameworks including ISO 27001, NIST, and CIS.",
      ],
    },
    {
      title: "Compliance & Regulatory Support",
      image: "/images/service3.png",
      bgimage: "/images/Cybersecu/comprehensive_cyber-03.jpg",
      items: [
        "GDPR, HIPAA, CCPA Compliance: Expert navigation through increasingly complex global regulatory requirements.",
        "Policy Development: Creation of robust governance frameworks designed to meet industry-specific standards.",
        "Certification Guidance: Specialized preparation for ISO 27001 certification, SOC 2, and PCI-DSS audits.",
      ],
    },
    {
      title: "Incident Response & Recovery",
      image: "/images/service333.png",
      bgimage: "/images/Cybersecu/comprehensive_cyber-04.jpg",
      items: [
        "Rapid Response Teams: Expert incident response that contains breaches within minutes, not days.",
        "Forensic Analysis: In-depth investigation of root causes to prevent future occurrences.",
        "Business Continuity Planning: Strategic recovery protocols that minimize downtime and maintain critical operations.",
      ],
    },
    {
      title: "Employee Training & Awareness",
      image: "/images/service4.png",
      bgimage: "/images/Cybersecu/comprehensive_cyber-05.jpg",
      items: [
        "Phishing Simulations: Practical training sessions that help staff recognize and respond to social engineering attacks.",
        "Cybersecurity Workshops: Interactive education that fosters a company-wide culture of security awareness.",
      ],
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-50">
      {/* Features Section */}
     <section className="py-16 mt-[-40px] bg-white w-full bg-[url(/images/blog3_bg.png)] bg-no-repeat bg-center bg-cover">
       <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
         {/* Animated Header */}
         <div className="text-center mb-16">
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="text-3xl mt-[-25px] md:text-4xl font-bold text-gray-900"
           >
             Comprehensive <span className="text-PrimaryColor2-0">Cybersecurity</span>  services 
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-xl text-TextColor2-0 max-w-3xl mx-auto mt-4"
           >
             Proactive Protection for Modren Challenges
           </motion.p>
         </div>
     
         {/* Grid for Mobile & Tablet */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8 perspective-[1500px]">
           {features.map((feature, index) => (
             <div
               key={index}
               className="relative w-full h-[600px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
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
           <button
             className="platform-prev-btn absolute left-[-90px] top-1/2 z-10 -translate-y-1/2 h-[80%] w-16 flex items-center justify-center opacity-100  transition-opacity duration-300"
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
                 <div className="relative w-full max-w-[400px] h-[500px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
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
     

      {/* Industry Solutions */}
      <section className="w-full bg-gray-50 bg-no-repeat bg-center bg-cover">
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Animated Header */}
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
              className="text-3xl mt-[-25px] 2xl:pt-2 md:text-4xl font-bold text-gray-900"
            >
              <span className="text-PrimaryColor2-0">Industries </span>Who We Served
            </motion.h2>
          </motion.div>
      
          {/* Industry Service Cards With Hover Background */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                {/* Hover Background Image Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                />
    
                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div 
                    className="flex justify-center mb-4 h-20"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="h-[120px] w-[120px] object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-blue-600 group-hover:text-white text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white tracking-[0.5px] leading-[1.6] text-center">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudServices;