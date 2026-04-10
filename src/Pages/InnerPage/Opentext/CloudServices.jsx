import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CloudServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Data
 

  const services = [
    {
      title: "Healthcare",
      description: "Secure patient records, automate billing processes, and ensure HIPAA compliance.  ",
      image: "/images/health.png",
      bgImage: "/images/Healthcare1.png",
      color: "bg-blue-100",
    },
    {
      title: "Retail",
      description: "Optimize vendor payments, purchase orders, and ESG reporting through intelligent procurement.",
      image: "/images/retail.png",
      bgImage: "/images/Retail1.png",
      color: "bg-blue-100",
    },
    {
      title: "Manufacturing",
      description: "Streamline supplier invoices, contracts, and quality documentation through comprehensive invoice processing optimization.",
      image: "/images/manufature.png",
      bgImage: "/images/Manfacturing1.png",
      color: "bg-blue-100",
    },
    {
      title: "Financial Services",
      description: "Automate loan processing, maintain audit trails, and strengthen fraud detection.",
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

  const features = [
    {
      title: "Complete Implementation Services ",
      image: "/images/service1.png",
      bgimage: "/images/opentext/opentext_expertise-01.jpg",
      items: [
        "We assess your current state, design your ideal architecture, and deploy enterprise content management solutions like OpenText Content Suite, Extended ECM, or Documentum.",
        "Our integration services ensure seamless connectivity with your ERP systems (SAP, Oracle), CRM platforms (Salesforce), and collaboration tools (Microsoft Teams)."  ,
      ],
    },
    {
      title: "Tailored Solutions  ",
      image: "/images/service2.png",
      bgimage: "/images/opentext/opentext_expertise-02.jpg",
      items: [
        "We develop custom workflows for legal, HR, finance, and procurement teams.  ",
        "Enable secure mobile access and intuitive self-service portals for employees, suppliers, and customers.",
      ],
    },
    {
      title: "Ongoing Optimization & Support ",
      image: "/images/service3.png",
      bgimage: "/images/opentext/opentext_expertise-03.jpg",
      items: [
        "We handle legacy system migration, automate document archiving, and provide comprehensive user training.",
        "Deliver proactive monitoring, timely upgrades, and strategic scalability planning.",
      ],
    },
   
  ];

  const feature1 = [
    {
      title: "End-to-End Automation ",
      image: "/images/service1.png",
      bgimage: "/images/opentext/opentext_expertise-01.jpg",
      items: [
        "Our Vendor Invoice Management (VIM) consulting helps you select and implement the right solution—whether SAP VIM or OpenText VIM—to digitize invoice capture, validation, and archiving.",
        "We ensure seamless integration with your ERP systems (SAP S/4HANA, Oracle) and third-party procurement tools (Coupa, Ariba)."  ,
      ],
    },
    {
      title: "Enhanced Supplier Collaboration ",
      image: "/images/service2.png",
      bgimage: "/images/opentext/opentext_expertise-02.jpg",
      items: [
        "We simplify supplier onboarding with intuitive self-service portals and EDI integration. ",
        "Enable real-time invoice tracking and efficient dispute resolution, strengthening supplier relationships.",
      ],
    },
    {
      title: "Continuous Improvement",
      image: "/images/service3.png",
      bgimage: "/images/opentext/opentext_expertise-03.jpg",
      items: [
        "We optimize workflows with RPA and predictive analytics to capture early payment discounts. ",
        "Provide comprehensive training for AP teams and dedicated post-implementation support.",
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
     


<section className="py-16 px-4 mt-[-50px] 2xl:mt-[-55px] sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl mt-[-25px] 2xl:mt-0 font-bold text-gray-900 mb-4">
      Vendor Invoice Management  <span className="text-PrimaryColor2-0">(VIM)</span> 
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Automate Invoice Processing, Reduce Costs, and Strengthen Compliance      </p>
    </div>

    {/* 5-Card Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">01</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Truly Touchless Processing</h3>
        <p className="text-gray-600 text-sm">
        Our SAP VIM automation services enable automatic PO matching, approvals, and payments, integrated with your procurement systems.        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">02</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Fraud Prevention</h3>
        <p className="text-gray-600 text-sm">
        Detect anomalies and enforce multi-level approval workflows using AI-powered analytics.        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">03</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Business Support</h3>
        <p className="text-gray-600 text-sm">
        Handle multi-currency transactions, multi-language requirements, and complex tax compliance across global supplier networks.        </p>
      </motion.div>

      {/* Card 4 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">04</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Substantial Cost Reduction</h3>
        <p className="text-gray-600 text-sm">
        Our invoice processing optimization approaches typically reduce processing costs by up to 70% while eliminating costly manual errors.        </p>
      </motion.div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-16 mt-[-40px] 2xl:mt-[10px] w-full bg-[url(/images/blog3_bg.png)] bg-no-repeat bg-center bg-cover">
  <div className="px-4 sm:px-6 lg:px-8 mx-auto w-full">
   

    {/* First Features Section */}
    <div className="mb-20 max-w-7xl mx-auto">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-3xl md:text-4xl mt-[-25px] 2xl:mt-0 font-bold text-gray-900 mb-4 pb-8 text-center"
      >
        Coelate's<span className="text-PrimaryColor2-0"> OpenText </span>Expertise 
      </motion.h3>
      
      {/* 3D Flip Card Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1500px]">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative w-full h-[499px]  2xl:h-[430px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
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
    {/* Second Features Section */}
    
  </div>

</section>

     {/* Industry Solutions */}
     <section className="w-full bg-white mt-[-50px] bg-gray-50 bg-no-repeat bg-center bg-cover">
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
             <span className="text-PrimaryColor2-0">Industries </span>Who We Served
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