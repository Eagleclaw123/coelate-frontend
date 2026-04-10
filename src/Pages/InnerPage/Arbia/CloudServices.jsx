import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaMobileAlt, FaGlobeAmericas, FaRocket } from 'react-icons/fa';
const partnershipImage = "/images/partnership1.jpg"; // Or whatever image path you're using

const CloudServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Data
  
  const services = [
    {
      title: "Healthcare",
      description: "Streamline the acquisition of medical supplies while maintaining strict compliance and cost control.",
      image: "/images/health.png",
      bgImage: "/images/Healthcare1.png",
      color: "bg-blue-100",
    },
    {
      title: "Retail & Consumer Goods",
      description: "Enhance supplier collaboration to manage seasonal demand fluctuations and sustainability initiatives.",
      image: "/images/retail.png",
      bgImage: "/images/Retail1.png",
      color: "bg-blue-100",
    },
    {
      title: "Manufacturing",
      description: "Optimize direct materials procurement, MRO supplies, and build resilient supplier networks.",
      image: "/images/manufature.png",
      bgImage: "/images/Manfacturing1.png",
      color: "bg-blue-100",
    },
    {
      title: "Technology",
      description: "Navigate complex supplier ecosystems and maintain rigorous contract compliance in highly regulated environments.",
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
      title: "Comprehensive Implementation   ",
      image: "/images/service1.png",
      bgimage: "/images/Ariba/Ariba_Expertise_1.png",
      items: [
        "Process Assessment: We start by understanding your current procurement landscape, identifying improvement opportunities, and recommending the right Ariba modules for your specific needs.",
        "Strategic Deployment: Our phased approach begins with quick wins like Guided Buying or Supplier Risk Management before scaling to more complex workflows—ensuring you see value from day one.",
        "Global Compliance Built-In: We configure your system to handle multi-country tax regulations, legal requirements, and localization needs, keeping you compliant wherever you operate. ", 
      ],
    },
    {
      title: "Seamless Integration   ",
      image: "/images/service2.png",
      bgimage: "/images/Ariba/Ariba_Expertise_2.png",
      items: [
        "Connect Your Enterprise Systems: Ariba Our SAP Ariba integration consulting ensures seamless connectivity with S/4HANA, Oracle, Microsoft Dynamics, and legacy systems-eliminating information silos (Seamless Integration).",
        "Enhance with Best-of-Breed Tools: We integrate leading solutions such as Coupa, Workday, Salesforce, and custom AI-powered analytics to seamlessly fill capability gaps.",
        "Effortless Supplier Onboarding: We streamline and automate the supplier enablement process, making catalog management simple and efficient for your team.",
        ],
    },
    {
      title: "Continuous Improvement & Innovation   ",
      image: "/images/service3.png",
      bgimage: "/images/Ariba/Ariba_Expertise_3.png",
      items: [
        "AI-Enhanced Procurement: Leverage the SAP Business Network with predictive analytics and market insights to drive smarter, data-informed purchasing decisions.",
        "End-to-End Automation: Deploy robotic process automation for invoice matching, purchase approvals, and contract management—freeing your team from manual, repetitive tasks. ",
        "People-First Adoption: Ensure organization-wide buy-in with comprehensive training, change management strategies, and intuitive, mobile-first user interfaces.",
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
     



<section className="py-16 px-4 mt-[-50px] 2xl:mt-[-46px] sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl mt-[-25px] 2xl:mt-0 md:text-4xl font-bold text-gray-900 mb-4">
      Key <span className="text-PrimaryColor2-0">SAP Ariba</span> Modules We Implement
      </h2>
      {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Enterprise-grade SAP expertise tailored to your business transformation needs
      </p> */}
    </div>

    {/* 5-Card Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {/* Card 1 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">01</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Sourcing & Contracts</h3>
        <p className="text-gray-600 text-sm">
        Streamline RFx processes, online auctions, and contract negotiations with powerful automation.        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">02</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Supplier Lifecycle Management</h3>
        <p className="text-gray-600 text-sm">
        Monitor supplier performance in real-time to identify and address risks before they impact your business.        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">03</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Guided Buying</h3>
        <p className="text-gray-600 text-sm">
        Make purchasing intuitive for employees with AI-powered catalogs and simplified approval workflows.        </p>
      </motion.div>

      {/* Card 4 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">04</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Spend Analytics</h3>
        <p className="text-gray-600 text-sm">
        Transform raw spending data into strategic insights using the power of SAP Analytics Cloud.        </p>
      </motion.div>

      {/* Card 5 - Will appear beside others on lg screens */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">05</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Invoice-to-Pay</h3>
        <p className="text-gray-600 text-sm">
        Eliminate manual processing bottlenecks with intelligent invoice matching and approval automation.        </p>
      </motion.div>
    </div>
  </div>
</section>




      {/* Features Section */}
      <section className="py-16 mt-[-40px] 2xl:mt-[10px] w-full bg-[url(/images/blog3_bg.png)] bg-no-repeat bg-center bg-cover">
  <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    {/* Animated Header */}
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl mt-[-25px] md:text-4xl font-bold text-gray-900"
      >
        Coelate's SAP  <span className="text-PrimaryColor2-0">Ariba </span> Expertise
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-TextColor2-0 max-w-3xl mx-auto mt-4"
      >
        End-to-end cloud solutions tailored to your business needs
      </motion.p>
    </div>

   {/* 3D Flip Card Grid */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1500px]">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative w-full h-[680px]  2xl:h-[660px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
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
             className="text-3xl mt-[-25px] md:text-4xl font-bold text-gray-900"
           >
             <span className="text-PrimaryColor2-0">Industries</span> Who We Served
             </motion.h2>
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-TextColor2-0 max-w-3xl mx-auto mt-4"
           >
             {/* Tailored cloud solutions for your industry's unique challenges */}
           </motion.p>
         </motion.div>
     
         {/* Industry Service Cards With Hover Background */}
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
               className={`
                 relative overflow-hidden rounded-xl transition-all flex flex-col group
                 bg-blue-100 border border-gray-200 shadow-sm p-6
               `}
             >
               {/* Hover Background Image Overlay */}
               <div
                 className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
                 style={{ backgroundImage: `url(${service.bgImage})` }}
               />
     
               {/* Card Content (z-10 to sit above overlay) */}
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
                 <h3 className="
                   text-xl font-bold mb-3  
                   text-PrimaryColor-0 group-hover:text-PrimaryColor2-0 text-center
                 ">
                   {service.title}
                 </h3>
                 <p className="
                   text-TextColor2-0 group-hover:text-white 
                   tracking-[0.5px] leading-[1.6] text-center
                 ">
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