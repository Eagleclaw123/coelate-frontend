import React from 'react';
import { useNavigate } from 'react-router-dom';

// Industry data with descriptions and paths
const industries = [
  { 
    name: 'SAP Services', 
    icon: '',
    description: 'Transform customer experiences with AI-powered personalization and omnichannel solutions that drive sales and loyalty.',
    path: '/service/sap_services'
  },
  { 
    name: 'Cloud Services', 
    icon: '',
    description: 'At Coelate, we empower businesses to harness the full potential of leading cloud platforms: AWS, Microsoft Azure, and Google Cloud (GCP). ',
    path: '/services/Cloud_services'
  },
  { 
    name: 'Cyber Security', 
    icon: '',
    description: 'In an era where cyber threats evolve hourly, Coelate delivers comprehensive cybersecurity consulting solutions tailored to protect  ',
    path: '/service/Cybersecurity_services'
  },
  { 
    name: 'Staffing', 
    icon: '',
    description: 'At Coelate Technologies, we specialize in delivering top-tier IT and SAP professionals to organizations across the globally. ',
    path: '/service/staffing'
  }
];

const IndustryCard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full  bg-gray-50 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
        <h3 className='font-FiraSans leading-relaxed font-semibold text-center pl-3 mt-[-40px] 2xl:mt-[-20px] text-gray-900 text-[29px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
          Reinvent Processes Elevate <span className="text-PrimaryColor2-0"> Enterprise </span> Performance
        </h3>
        <p className="font-FiraSans text-TextColor2-0 text-center text-l sm:text-[18px] mb-12 max-w-4xl mx-auto leading-relaxed">
          Our team is dedicated to deliver the best of the experience for our clients.  you can expect exceptional customer service, innovative solutions, and a focus on driving real results for your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              onClick={() => navigate(industry.path)}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-4xl mb-4 text-blue-600">{industry.icon}</div>
              <h3 className="font-FiraSans text-2xl font-bold text-gray-800 mb-3">{industry.name}</h3>
              <p className="font-FiraSans text-TextColor2-0 mb-4 text-l leading-relaxed">{industry.description}</p>
              <div className="text-blue-600 font-semibold text-sm flex items-center transition-all duration-300 group-hover:translate-x-1">
                Explore More
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;