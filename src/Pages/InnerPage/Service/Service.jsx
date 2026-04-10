import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';


const CoreERPServices = () => {
  const services = [
    {
      title: "SAP Services",
      link: "/service/sap_services",
      image: "/images/service111.png",
    },
    {
      title: "Cloud Services",
      link: "/services/Cloud_services",
      image: "/images/service22.png",
    },
    {
      title: "Cybersecurity Services",
      link: "/service/Cybersecurity_services",
      image: "/images/service33.png",
    },
    {
      title: "Staffing",
      link: "/service/staffing",
      image: "/images/service44.png",
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-left font-bold text-gray-900 mb-4">Core <span className='text-PrimaryColor2-0'>Services</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-center mb-5">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-34 w-34 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                <div className="text-center">
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-PrimaryColor2-0 hover:text-blue-800 font-medium transition-colors"
                  >
                    Learn More
                    <FaArrowRightLong className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutInner = () => {
  return (
    <>
      <div className="animate-fade-in">
        <BreadCrumb
          breadCrumbTitle={'Services'} 
          // breadCrumbIcon={<FaArrowRightLong />}
          url={'/about'}
          // breadCrumbLink={'Services'}
          backgroundImage="/images/sapservi.jpg"
        />
      </div>
      
      {/* Services Section */}
      <div className="py-12 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <CoreERPServices />
        </div>
      </div>
      
      
    </>
  );
};

export default AboutInner;