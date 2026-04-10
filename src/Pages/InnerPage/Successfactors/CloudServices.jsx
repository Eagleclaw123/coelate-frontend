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
      description: "Improve clinical staff retention rates, regulatory compliance, and optimized shift management.  ",
      image: "/images/health.png",
      bgImage: "/images/Healthcare1.png",
      color: "bg-blue-100",
    },
    {
      title: "Retail & Hospitality",
      description: "Enhance seasonal hiring processes, employee scheduling efficiency, and team engagement.  ",
      image: "/images/retail.png",
      bgImage: "/images/Retail1.png",
      color: "bg-blue-100",
    },
    {
      title: "Manufacturing",
      description: "Strengthen safety training programs, technical skills development, and workforce planning.",
      image: "/images/manufature.png",
      bgImage: "/images/Manfacturing1.png",
      color: "bg-blue-100",
    },
    {
      title: "Technology",
      description: "Scale talent acquisition operations and improve remote team collaboration.",
      image: "/images/tec_2.png",
      bgImage: "/images/Technology_image.png",
      color: "bg-blue-100",
    },
    {
      title: "Untilities",
      description: "Scale talent acquisition operations and improve remote team collaboration.",
      image: "/images/ut_1.png",
      bgImage: "/images/utility1.png",
      color: "bg-blue-100",
    },
  ];

  const successFactorsModules = [
    {
      title: "Employee Central",
      description: "Streamline fundamental HR processes and global payroll operations with our optimization solutions.",
    
      features: [
        "Global payroll integration",
        "Org structure management",
        "Employee data centralization",
        "Compliance automation"
      ]
    },
    {
      title: "Recruiting & Onboarding",
      description: "Automate candidate assessment pipelines and significantly improve time-to-productivity metrics.",
    
      features: [
        "AI-powered candidate screening",
        "Automated interview scheduling",
        "Digital onboarding workflows",
        "New hire productivity tracking"
      ]
    },
    {
      title: "Learning & Development",
      description: "Develop your workforce through personalized, AI-driven training pathways.",
    
      features: [
        "Personalized learning paths",
        "Skills gap analysis",
        "Microlearning modules",
        "Training ROI analytics"
      ]
    },
    {
      title: "Performance & Goals",
      description: "Align individual objectives with broader organizational strategy effectively.",
      
      features: [
        "Cascading goal management",
        "Real-time feedback systems",
        "Competency assessments",
        "Promotion readiness scoring"
      ]
    },
  ];
  

  const features = [
    {
      title: "Strategic Implementation Planning ",
      image: "/images/service1.png",
      bgimage: "/images/Strategic3.png",
      items: [
        "Thorough Needs Assessment: Align specific SuccessFactors modules (Employee Central, Recruiting, Learning, Compensation) with your strategic HR vision",
        "Structured Phased Deployment: Implement core modules initially, then expand to advanced capabilities like People Analytics or Workforce Planning",
        "Global Compliance Management: Global Compliance Management: Configure payroll systems, tax calculations, and labor law requirements across multiple countries.", 
      ],
    },
    {
      title: "Advanced Integration & Customization    ",
      image: "/images/service2.png",
      bgimage: "/images/Advanced3.png",
      items: [
        "Extended Ecosystem Connectivity: Seamlessly connect SuccessFactors with CRM platforms (Salesforce), ERP systems (S/4HANA), and existing HR applications",
        "Enhanced Functionality: Develop custom workflows using SAP Business Technology Platform (BTP) or efficient low-code development tools",
        "Mobile Experience Optimization: Create employee-friendly digital interfaces using SAP Fiori UX design principles",
        ],
    },
    {
      title: "Continuous Improvement Programs",
      image: "/images/service3.png",
      bgimage: "/images/Continuous3.png",
      items: [
        "Comprehensive Adoption Support: Change management strategies, leadership training programs, and employee engagement initiatives",
        "Advanced Analytics Implementation: Deploy predictive attrition models, skills gap analysis tools, and diversity measurement dashboards",
        "Post-Implementation Optimization:  Ongoing support through regular updates, security reviews, and continuous enhancement of SuccessFactors features to meet evolving business needs.",
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
     
<section className="py-16 px-4 mt-[-60px]  2xl:mt-[-65px] sm:px-6 lg:px-8 bg-gray-50 mb-[40px]">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl mt-[-25px] 2xl:mt-0 font-bold text-gray-900 mb-4">
        Key <span className="text-PrimaryColor2-0">SuccessFactors</span> Modules We Optimize
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {/* Enterprise-grade SAP expertise tailored to your business transformation needs */}
      </p>
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
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Employee Central</h3>
        <p className="text-gray-600 text-sm">
        Streamline fundamental HR processes and global payroll operations.
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">02</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Recruiting & Onboarding</h3>
        <p className="text-gray-600 text-sm">
        Automate candidate assessment pipelines and significantly improve time-to-productivity metrics.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">03</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Learning & Development </h3>
        <p className="text-gray-600 text-sm">
        Develop your workforce through personalized, AI-driven training pathways.
        </p>
      </motion.div>

      {/* Card 4 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">04</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance & Goals Management</h3>
        <p className="text-gray-600 text-sm">
        Align individual objectives with broader organizational strategy.
        </p>
      </motion.div>

      {/* Card 5 - Will appear beside others on lg screens */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500"
      >
        <div className="text-blue-600 text-2xl font-bold mb-3">05</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">People Analytics</h3>
        <p className="text-gray-600 text-sm">
        Transform raw HR data into actionable business insights with SAP Analytics Cloud integration.
        </p>
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
        Coelate's Comprehensive <span className="text-PrimaryColor2-0">SuccessFactors</span> Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-TextColor2-0 max-w-3xl mx-auto mt-4"
      >
        Integrated digital solutions that drive business transformation
      </motion.p>
    </div>

    {/* 3D Flip Card Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1500px]">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative w-full h-[680px]  2xl:h-[580px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
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