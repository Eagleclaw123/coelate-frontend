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
      description: "Monitor patient outcomes securely using Power BI with HIPAA-compliant dashboards",
      image: "/images/health.png",
      bgImage: "/images/Healthcare1.png",
      color: "bg-blue-100",
    },
    {
      title: "Retail & Hospitality",
      description: "Optimize inventory levels and reduce waste with Tableau demand forecasting",
      image: "/images/retail.png",
      bgImage: "/images/Retail1.png",
      color: "bg-blue-100",
    },
    {
      title: "Manufacturing",
      description: "Minimize downtime by predicting equipment failures with SAC's IoT analytics",
      image: "/images/manufature.png",
      bgImage: "/images/Manfacturing1.png",
      color: "bg-blue-100",
    },
    {
      title: "Finance",
      description: "Manage risk exposure through real-time SAC financial modeling",
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
      title: "SAP Analytics Cloud (SAC) ",
      subtitle: "",
      image: "/images/service1.png",
      bgimage: "/images/Analytics/Analytics_Expert_1.png",
      items: [
        "Our SAP Analytics Cloud services help you:",
        "Seamless SAP Integration: Connect SAC with S/4HANA, SuccessFactors, and Ariba for comprehensive visibility across operations",
        "Data-Driven Forecasting: Anticipate market trends and business outcomes using SAP AI Business Services", 
        "Measurable Benefits:",
        "Speed up month-end financial closing by 40% with automated reporting workflows",
        "Support sustainability initiatives with dedicated ESG tracking and carbon footprint analytics"
      ],
    },
    {
      title: "Microsoft Power BI    ",
      image: "/images/service2.png",
      bgimage: "/images/Analytics/Analytics_Expert_2.png",
      items: [
        "Our Power BI solutions deliver:",
        "Custom Implementation: Build interactive visualizations that connect seamlessly with Azure, Dynamics 365, and existing systems",
        "Business User Empowerment: Enable teams to create their own reports with intuitive drag-and-drop tools",
        "Business Impact:",
        "Cut reporting preparation time by 50% through streamlined, automated workflows",
        "Maintain regulatory compliance with GDPR and HIPAA through secure data management",
        ],
    },
    {
      title: "Tableau",
      image: "/images/service3.png",
      bgimage: "/images/Analytics/Analytics_Expert_3.png",
      items: [
        "Our Tableau expertise includes:",
        "Strategic Dashboard Design: Create user-focused visualizations for sales performance, supply chain efficiency, and customer behavior",
        "Comprehensive Data Integration: Connect Tableau to your CRM (Salesforce), ERP (SAP), and Big Data systems",
        "Real-World Results:",
        "Increase stakeholder buy-in with intuitive, mobile-friendly dashboards",
        "Reduce costs by consolidating scattered reports into a unified source of truth",
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
      
<section className="py-16 mt-[-30px] 2xl:mt-0 px-4 sm:px-6 lg:px-8 bg-gray-50 mb-[40px]">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl mt-[-25px] 2xl:mt-0 font-bold text-gray-900 mb-4">
        Why <span className="text-PrimaryColor2-0">Partner</span> with Coelate?
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {/* Enterprise-grade SAP expertise tailored to your business transformation needs */}
      </p>
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
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Vendor-Neutral Recommendations </h3>
        <p className="text-gray-600 text-sm">
        We suggest the right tools for your specific needs—never pushing particular platforms         </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">02</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Support Network</h3>
        <p className="text-gray-600 text-sm">
        24/7 assistance from our teams across The U.S., UAE, and India         </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">03</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Project Lifecycle  </h3>
        <p className="text-gray-600 text-sm">
        From initial data strategy through governance to user adoption          </p>
      </motion.div>

      {/* Card 4 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">04</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h3>
        <p className="text-gray-600 text-sm">
        90% client retention with documented 30% improvements in decision speed        </p>
      </motion.div>

      
    </div>
  </div>
</section>


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
        Our <span className="text-PrimaryColor2-0">Analytics</span> Expertise
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

    {/* 3D Flip Card Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1500px]">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative w-full h-[700px]  2xl:h-[600px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
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