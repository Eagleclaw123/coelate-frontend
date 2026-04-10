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
      title: "Healthcare",
      description: "Strengthen compliance management, patient data security, and resource allocation.  ",
      image: "/images/health.png",
      bgImage: "/images/Healthcare1.png",
      color: "bg-blue-100",
    },
    {
      title: "Retail & Consumer Goods",
      description: "Improve demand forecasting accuracy and enable seamless omnichannel sales.  ",
      image: "/images/retail.png",
      bgImage: "/images/Retail1.png",
      color: "bg-blue-100",
    },
    {
      title: "Manufacturing",
      description: "Optimize production planning processes and enhance supply chain resilience.",
      image: "/images/manufature.png",
      bgImage: "/images/Manfacturing1.png",
      color: "bg-blue-100",
    },
    {
      title: "Logistics",
      description: "Enhance fleet management efficiency and implement real-time inventory tracking.",
      image: "/images/finace.png",
      bgImage: "/images/Logistics1.png",
      color: "bg-blue-100",
    },
  ];

  const features = [
    {
      title: "End-to-End Implementation Services",
      image: "/images/service1.png",
      bgimage: "/images/S4HANA/S4HANA_Expertise_1.png",
      items1: [
        "Thorough Readiness Assessment: Evaluate your current systems architecture and develop a strategic migration roadmap.  ",
      ],
      items: [
        "Flexible Deployment Options: Execute system conversion from SAP ECC or build a completely new S/4HANA instance.",
        "Comprehensive Integration: Connect S/4HANA seamlessly with CRM platforms, business intelligence tools, legacy systems, and IoT infrastructure.", 
      ],
    },
    {
      title: "Custom Solutions & Open Ecosystem Integration",
      image: "/images/service2.png",
      bgimage: "/images/S4HANA/S4HANA_Expertise_2.png",
      items1: [
        "Tailor workflows specifically for your industry (manufacturing, retail, healthcare, logistics, etc.). ",
        ],
        items: [
          "Design hybrid architectures that integrate SAP with complementary non-SAP tools for maximum operational flexibility ",
          "Optimize critical modules including FI/CO, SCM, and HR with customized enhancements ",
          ],
    },
    {
      title: "Ongoing Support & Optimization",
      image: "/images/service333.png",
      bgimage: "/images/S4HANA/S4HANA_Expertise_3.png",
      items1: [
        "Performance tuning, comprehensive user training, and effective change management",
      ],
      items: [
        "Continuous improvement through Fiori UX implementation, AI enhancements, and process automation",
        "Vendor-neutral guidance for system upgrades, security protocols, and scalability planning",
      ],
    },
    {
      title: "SAP S/4HANA Upgrades & Conversions ",
      image: "/images/service3.png",
      bgimage: "/images/S4HANA/S4HANA_Expertise_4.png",
      items: [
        "ECC to S/4HANA Conversion: Brownfield approach to migrate legacy SAP ERP with minimal disruption.",
        " Technical Upgrades: Stay current with SAP’s latest releases and security patches.  ",
        " Custom Code Adaptation: Optimize ABAP programs for HANA compatibility.  ",
      ],
    },
    {
      title: "SAP Lift & Shift Migrations   ",
      image: "/images/service4.png",
      bgimage: "/images/S4HANA/S4HANA_Expertise_5.png",
      items: [
        "Rehost SAP Environments: Migrate legacy systems to AWS, Azure, or GCP without reengineering.  ",
        " Hybrid Cloud Strategy: Balance on premise and cloud workloads for cost efficiency.  ",
        " Disaster Recovery: Ensure business continuity with multi cloud backups.  ",
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
    <div className="bg-gray-50  mt-[-25px]">

<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
        Our <span className="text-PrimaryColor2-0">SAP S/4HANA</span> Services
      </h2>
      {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">Enterprise-grade SAP expertise tailored to your business transformation needs</p> */}
    </div>

    {/* 3-Card Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all leading-relaxed"
      >
        <img 
          src="/images/S4HANA/SAP_S4HANA_1.png" 
          alt="SAP OnPremise"
          className="w-full h-[180px] rounded-2xl object-cover mb-6"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-4">SAP S/4HANA On-Premise<br />Robust, Secure, and Scalable ERP</h3>
        <p className="text-gray-700 mb-3">
          <strong>Customized Implementation:</strong> Deploy S/4HANA on your infrastructure with industry-specific best practices.
        </p>
        <p className="text-gray-700 mb-3">
          <strong>Performance Optimization:</strong> Leverage HANA in-memory computing for real-time analytics.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Hybrid Integration:</strong> Connect with cloud apps (SuccessFactors, Ariba) and third-party tools.
        </p>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Benefits:</h4>
        <ul className="text-gray-700 space-y-2">
          <li>✅ Full control over infrastructure and compliance</li>
          <li>✅ Ideal for regulated industries (manufacturing, utilities)</li>
        </ul>
      </motion.div>

      {/* Card 2 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all leading-relaxed"
      >
        <img 
          src="/images/S4HANA/SAP_S4HANA_2.png" 
          alt="RISE with SAP"
          className="w-full h-[180px] rounded-2xl object-cover mb-6"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-4">RISE with SAP<br />Accelerate Your Cloud Journey</h3>
        <p className="text-gray-700 mb-3">
          <strong>End-to-End Transformation:</strong> Bundled S/4HANA Cloud, infrastructure, and managed services.
        </p>
        <p className="text-gray-700 mb-3">
          <strong>Subscription Simplicity:</strong> Predictable costs with SAP’s holistic offering.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Business Process Intelligence:</strong> Optimize workflows with embedded analytics and AI.
        </p>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Benefits:</h4>
        <ul className="text-gray-700 space-y-2">
          <li>✅ Faster time to value with preconfigured processes</li>
          <li>✅ Seamless upgrades and continuous innovation</li>
        </ul>
      </motion.div>

      {/* Card 3 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all leading-relaxed"
      >
        <img 
          src="/images/S4HANA/SAP_S4HANA_3.png" 
          alt="GROW with SAP"
          className="w-full h-[180px] rounded-2xl object-cover mb-6"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-4">GROW with SAP<br />Scale with Agility and Innovation</h3>
        <p className="text-gray-700 mb-3">
          <strong>Modular Adoption:</strong> Start with core finance or supply chain modules and expand incrementally.
        </p>
        <p className="text-gray-700 mb-3">
          <strong>AI-Driven Insights:</strong> Embed predictive analytics and automation into workflows.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Sustainability Integration:</strong> Track ESG metrics and carbon footprint in real time.
        </p>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Benefits:</h4>
        <ul className="text-gray-700 space-y-2">
          <li>✅ Flexible, phased approach for evolving business needs</li>
          <li>✅ Future-proof operations with SAP’s latest innovations</li>
        </ul>
      </motion.div>

    </div>
  </div>
</section>


     
<section className="py-16 px-4 mt-[-50px] 2xl:mt-0 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      The Coelate Advantage for  <span className="text-PrimaryColor2-0">S/4HANA</span> 
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
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Truly Unbiased Expertise</h3>
        <p className="text-gray-600 text-sm">
        As an independent partner, we prioritize your business needs—not vendor lock-in.
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
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Service Delivery </h3>
        <p className="text-gray-600 text-sm">
        Round-the-clock support from our specialized teams across the U.S., UAE, and India.
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
        <h3 className="text-lg font-semibold text-gray-900 mb-2">SAP Activate Methodology</h3>
        <p className="text-gray-600 text-sm">
        Faster deployments, minimal downtime, and iterative improvements
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
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Future-Ready Strategy Development</h3>
        <p className="text-gray-600 text-sm">
        Architecture designed to adapt to evolving business requirements and technological trends.
        </p>
      </motion.div>

      
    </div>
  </div>
  <br/><br/>
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
        Our  <span className="text-PrimaryColor2-0">SAP S/4HANA</span>  Services
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
          className="relative w-full h-[500px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
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
        className="platform-next-btn absolute right-[-90px] top-1/2 z-10 -translate-y-1/2 h-[80%] w-16 flex items-center justify-center opacity-100  transition-opacity duration-300"
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
            <div className="relative w-full max-w-[400px] h-[400px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
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



      {/* Why Choose Us Section */}
     

      {/* Industry Solutions */}
      <section className="w-full bg- gray-50 bg-no-repeat bg-center bg-cover">
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
              text-xl font-semibold mb-3 
              text-PrimaryColor-0 group-hover:text-white text-center
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