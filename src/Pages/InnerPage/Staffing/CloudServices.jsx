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
      title: "Needs Assessment",
      description: "We start by understanding your technical requirements, culture, and business objectives.",
      icon: "🏥",
      color: "bg-blue-100",
    },
    {
      title: "Targeted Sourcing",
      description: "Our horizontal sourcing units and niche networks allow us to tap into highly qualified candidates quickly.",
      icon: "🛍️",
      color: "bg-blue-100",
    },
    {
      title: "Rigorous Screening",
      description: "Each consultant undergoes a multi-level technical and behavioral assessment to ensure alignment with your expectations.",
      icon: "🏭",
      color: "bg-blue-100",
    },
    {
      title: "Onboarding & Support",
      description: "We handle end-to-end onboarding and provide ongoing consultant support to maximize engagement and performance.",
      icon: "💰",
      color: "bg-blue-100",
    },
  ];

 const features = [
    {
      title: "IT & Digital Workforce Solutions",
      image: "/images/service1.png",
      bgimage: "/images/Staffing/Core_Staffing_1.png",
      items: [
        "Today’s tech landscape evolves fast. We provide skilled professionals who can adapt quickly and bring immediate value to your projects",
        "Role-Specific Hiring: Engage experts in SAP, DevOps, cybersecurity, cloud engineering, data analytics, and more.",
        "On-Demand Deployment: Quickly assemble teams for digital transformation projects, system migrations, or software rollouts.",
        "International Talent Access: Choose from a broad network of pre-qualified candidates across critical technical domains.",
      ],
    },
    {
      title: "Contract and Interim Staffing",
      image: "/images/service2.png",
      bgimage: "/images/Staffing/Core_Staffing_2.png",
      items: [
        "Business demands change—our flexible workforce solutions help you stay ahead. We place experienced professionals for short durations or urgent roles without the long-term overhead",
        "Short-Term Assignments: Cover unexpected absences, seasonal peaks, or skill gaps with qualified personnel.",
        "Evaluation Before Commitment: Temporary-to-permanent options allow you to assess fit before making a final hire.",
        "Fully Managed Logistics: From onboarding to payroll processing, we handle all the administrative responsibilities.",
      ],
    },
    {
      title: "Full-Time Hiring & Leadership Placement",
      image: "/images/service3.png",
      bgimage: "/images/Staffing/Core_Staffing_3.png",
      items: [
        "Our recruitment services help you hire individuals who align with your strategic direction, company values, and future goals",
        "Strategic Hiring: Fill critical roles in leadership, technology, operations, and other key functions.",
        "Culture-First Approach: We prioritize alignment with your work environment, mission, and long-term objectives.",
        "Sector-Specific Talent: Our recruiters bring deep understanding of industries like healthcare, logistics, retail, manufacturing, and financial technology.",
      ],
    },
    {
      title: "End-to-End Workforce Management",
      image: "/images/service4.png",
      bgimage: "/images/Staffing/Core_Staffing_1.png",
      items: [
        "Beyond staffing, we support businesses through complete talent operations management to improve efficiency and reduce overhead",
        "Recruitment Outsourcing: From initial sourcing to final onboarding, our team manages the entire recruitment cycle.",
        "Regulatory Compliance Support: We ensure accurate and compliant payroll processing, tax handling, and employee documentation.",
        "Inclusive Hiring Frameworks: We help build diverse teams through inclusive strategies aligned with global workplace standards.",
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
             Our Core<span className="text-PrimaryColor2-0"> Staffing</span> Services
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-xl text-TextColor2-0 max-w-3xl mx-auto mt-4"
           >
             Tailored workforce strategies for your business needs
           </motion.p>
         </div>
     
         {/* Grid for Mobile & Tablet */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8 perspective-[1500px]">
           {features.map((feature, index) => (
             <div
               key={index}
               className="relative w-full h-[700px]  max-sm:h-[600px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
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
                 <div className="relative w-full max-w-[400px] h-[599px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
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
     
     

      
     <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="mt-[-30px] 2xl:mt-0 text-3xl md:text-4xl font-bold text-gray-900">
        Our <span className="text-PrimaryColor2-0">Staffing</span> Approach
      </h2>
      {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
        Tailored cloud solutions for your industry's unique challenges
      </p> */}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          whileHover={{ scale: 1.03 }}
          className={`${service.color} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300`}
        >
          {/* <div className="text-5xl mb-4">{service.icon}</div> */}
          <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
          <p className="text-gray-700">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


   <section className="w-full bg-[url(/images/blog3_bg.png)] bg-no-repeat bg-center bg-cover px-6 py-12 md:py-16">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-14">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        <span className="text-PrimaryColor2-0">Industries </span> Who We Serve
      </h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {[
        { title: 'Manufacturing', bg: '/images/Staffing5.png' },
        { title: 'Retail & eCommerce', bg: '/images/Staffing2.png' },
        { title: 'Healthcare & Life Sciences', bg: '/images/Staffing1.png' },
        { title: 'Financial Services', bg: '/images/Staffing6.png' },
        { title: 'Logistics & Supply Chain', bg: '/images/Staffing3.png' },
        { title: 'Public Sector & Utilities', bg: '/images/Staffing4.png' }
      ].map((industry, idx) => (
        <div
          key={idx}
          className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
        >
          {/* Background image that appears on hover */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            style={{ backgroundImage: `url(${industry.bg})` }}
          />
          
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          
          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
              {industry.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
    </div>
  );
};

export default CloudServices;