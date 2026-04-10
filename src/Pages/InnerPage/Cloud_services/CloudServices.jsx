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
  const cloudProviders = [
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      color: "#FF9900",
      description: "Enterprise-grade security, scalable infrastructure, and powerful AI/ML capabilities.",
      services: ["EC2, S3, Lambda", "Redshift Analytics", "GovCloud Compliance"],
    },
    {
      name: "Microsoft Azure",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      color: "#0089D6",
      description: "Robust hybrid cloud solutions, integrated DevOps, and specialized industry platforms.",
      services: ["Azure Virtual Machines", "Azure DevOps", "Hybrid Cloud with Arc"],
    },
    {
      name: "Google Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      color: "#4285F4",
      description: "Advanced data analytics, streamlined Kubernetes deployment, and sustainable cloud innovation.",
      services: ["Google Kubernetes Engine", "BigQuery", "Anthos for Multi-Cloud"],
    },
  ];

  

  const services = [
    {
      title: "Healthcare",
      description: "HIPAA-compliant patient data platforms on AWS/Azure.",
      image: "/images/health.png",
      bgImage: "/images/Healthcare1.png",
      color: "bg-blue-100",
    },
    {
      title: "Retail",
      description: "Scalable e-commerce infrastructure powered by GCP's BigQuery analytics.",
      image: "/images/retail.png",
      bgImage: "/images/Retail1.png",
      color: "bg-blue-100",
    },
    {
      title: "Manufacturing",
      description: "IoT-driven predictive maintenance systems on Azure IoT Edge.",
      image: "/images/manufature.png",
      bgImage: "/images/Manfacturing1.png",
      color: "bg-blue-100",
    },
    {
      title: "Finance Services",
      description: "Advanced fraud detection leveraging AWS AI/ML and real-time analytics.",
      image: "/images/finace.png",
      bgImage: "/images/finance.png",
      color: "bg-blue-100",
    },
    {
      title: "Utility",
      description: "Evaluate infrastructure, compliance needs, and operational risks across gas, oil, and water systems.",
      image: "/images/ut_1.png",
      bgImage: "/images/utility.png",
      color: "bg-blue-100",
    },
  ];

  const features = [
    {
      title: "Cloud Migration & Modernization",
      image: "/images/service1.png",
      bgimage: "/images/Cloudser/comprihensive_cloud_1.jpg",
      items: [
        "Our migration specialists help you transition smoothly to the cloud with:",
        "Strategic Assessment: Comprehensive planning with detailed cost-benefit analysis and workload prioritization",
        "Flexible Migration Approaches: Whether lift-and-shift or complete refactoring, we migrate legacy applications to AWS, Azure, or GCP with minimal business disruption",
        "Cloud-Native Development: Building truly scalable applications using serverless architectures (AWS Lambda, Azure Functions), microservices design, and containerization with Kubernetes",
      ],
    },
    {
      title: "Cloud Optimization & Management",
      image: "/images/service2.png",
      bgimage: "/images/Cloudser/comprihensive_cloud_2.jpg",
      items: [
        "Maximize your cloud investment through:",
        "Strategic Cost Governance: Eliminate waste through reserved instances, spot pricing strategies, and proven FinOps practices",
        "Performance Enhancement: Implement auto-scaling, intelligent load balancing, and database optimization across platforms (AWS RDS, Azure SQL, BigQuery)",
        "End-to-End Managed Services: Round-the-clock monitoring, security maintenance, and compliance management (SOC2, HIPAA, GDPR)",
      ],
    },
    {
      title: "Cloud Security & Compliance",
      image: "/images/service3.png",
      bgimage: "/images/Cloudser/comprihensive_cloud_3.jpg",
      items: [
        "Protect your cloud environment with:",
        "Zero-Trust Architecture: Robust IAM implementation, data encryption, and advanced threat detection (AWS GuardDuty, Azure Sentinel)",
        "Comprehensive Disaster Recovery: Multi-region backup strategies and failover solutions designed for business continuity",
        "Industry-Specific Compliance: Meeting healthcare (HIPAA), financial services (PCI-DSS), and consumer data (GDPR) standards",
      ],
    },
    {
      title: "Advanced Cloud Solutions",
      image: "/images/service4.png",
      bgimage: "/images/Cloudser/comprihensive-cloud-4.png",
      items: [
        "Protect your cloud environment with:",
        "AI/ML & Analytics: AWS: SageMaker, QuickSight, Azure: Cognitive Services, Synapse Analytics, GCP: Vertex AI, Looker",
        "IoT & Edge Computing: Connect your physical and digital assets through AWS Greengrass, Azure IoT Hub, or Google Edge TPU",
        "Sustainability Initiatives: Reduce your carbon footprint with GCP's Carbon Sense Suite or Azure Sustainability Calculator",
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
    <div className="bg-gradient-to-t to-BodyBg-0 from-transparent">
      {/* Hero Section */}
      <section className="py-16 px-4 mt-[-30px] sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl mt-[-25px] md:text-4xl font-bold text-gray-900 mb-4">
            Your Vision, Your Cloud,
            <span className="text-PrimaryColor2-0"> Our Expertise</span>
          </h1>
          <p className="text-xl text-TextColor2-0 max-w-3xl mx-auto">
            We bring expertise across all major cloud environments.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {cloudProviders.map((provider, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Logo with Beautiful Description */}
              <div className="mb-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white to-gray-50 group-hover:shadow-sm transition-all">
                  <img 
                    src={provider.logo} 
                    alt={provider.name} 
                    className="h-12 object-contain" 
                    style={{ filter: `drop-shadow(0 4px 8px ${provider.color}30)` }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{provider.name}</h3>
                <div className="relative">
                  <div className="absolute -left-1 top-0 h-full w-1 rounded-full" style={{ backgroundColor: provider.color }}></div>
                  <p className="text-TextColor2-0 text-[16px]  md:text-base pl-4  font-firefons leading-relaxed">
                    {provider.description}
                  </p>
                </div>
              </div>

              {/* Services List - Clean and Structured */}
              <div className="flex-1 mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Featured Services</h4>
                <ul className="space-y-3">
                  {provider.services.map((service, i) => (
                    <li key={i} className="flex items-center">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full mr-3" style={{ backgroundColor: provider.color }}></span>
                      <span className="text-gray-700 font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
   {/* Features Section */}
<section className="py-16 mt-[-10px] 2xl:mt-2 bg-white w-full bg-[url(/images/blog3_bg.png)] bg-no-repeat bg-center bg-cover">
  <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
    {/* Animated Header */}
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl mt-[-25px] md:text-4xl font-bold text-gray-900"
      >
        Comprehensive 
 <span className="text-PrimaryColor2-0"> Cloud</span> Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-TextColor2-0 max-w-3xl mx-auto mt-4"
      >
        End-to-end cloud solutions tailored to your business needs
      </motion.p>
    </div>

    {/* Grid for Mobile & Tablet */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8 perspective-[1500px]">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative w-full h-[670px] 2xl:h-[600px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"
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
            <div className="relative w-full max-w-[400px] h-[600px] flip-card transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
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
              className="text-3xl mt-[-25px] md:text-4xl font-bold text-gray-900"
            >
              <span className="text-PrimaryColor2-0">Industries </span> Who  We Served
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