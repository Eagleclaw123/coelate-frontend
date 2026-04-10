import { useState } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import whyChooseThumb1 from '/images/system-integrations.jpg';
import whyChooseThumb2 from '/images/analytics-and-intelligence.jpg';
import whyChooseThumb3 from '/images/cloud-infrastructure-and-management.jpg';
import whyChooseThumb4 from '/images/security-archetecture-and-operations.jpg';

import whyChooseShape from '/images/box.png';
import whyChooseShape2 from '/images/choose_rotete.png';
import whyChooseShape3 from '/images/choose_dot2.png';
import border from '/images/hero_border.png';
import serviceShape3 from '/images/service_shpe2.png';


const tabsData = [
  {
    title: "Systems Integration",
    desc: `• Cross-platform data synchronization <br/>
           • API-driven architecture implementation <br/>
           • Legacy system modernization <br/>
           • Middleware optimization`,
    img: whyChooseThumb1,
  },
  {
    title: "Analytics & Intelligence",
    desc: `• Predictive analytics implementation <br/>
           • Machine learning model deployment <br/>
           • Business intelligence dashboard creation <br/>
           • Data visualization strategy`,
    img: whyChooseThumb2,
  },
  {
    title: "Cloud Infrastructure & Management",
    desc: `• Multi-cloud orchestration <br/>
           • Container deployment & management <br/>
           • Serverless architecture implementation <br/>
           • Cloud cost optimization`,
    img: whyChooseThumb3,
  },
  {
    title: "Security Architecture & Operations",
    desc: `• Zero-trust network implementation <br/>
           • Security operations center design <br/>
           • Threat hunting & intelligence <br/>
           • Identity & access management`,
    img: whyChooseThumb4,
  }
];

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className=" bg-gray-50 relative z-20 pt-20 lg:pt-[50px] pb-8">
       <div className='absolute -z-10 top-1/4 -left-40 hidden 2xl:block animate-rotate'>
              <img
                src={serviceShape3}
                draggable='false'
              />
            </div>
      
        <div className="Container">
         

        {/* Heading */}
        <div className="text-center mb-8">
          <h5 className="font-FiraSans font-medium text-sm mt-[-40px] 2xl:mt-0 sm:text-base text-PrimaryColor-0 uppercase mb-2">
            WHY CHOOSE US
          </h5>
          <h1 className="font-FiraSans font-semibold text-gray-900 text-[30px] sm:text-[38px] lg:text-[42px] inline-block relative pb-2">
            We Provide <span className="text-PrimaryColor2-0">Creative</span> Solutions
            <img
              src={border}
              alt=""
              className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20"
            />
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabsData.map((tab, i) => (
            <button
             key={i}
onMouseEnter={() => setActiveTab(i)} // changed from onClick
className={`px-4 py-2 rounded-full border transition
      ${activeTab === i
        ? 'bg-PrimaryColor2-0 text-white border-PrimaryColor2-0'
        : 'bg-white text-PrimaryColor2-0 border-PrimaryColor2-0'}
    `}

>
              {tab.title}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-stretch gap-12 ml-0 lg:ml-[10%] xl:ml-[15%]">
  
  {/* Image Column (50% width) */}
  <div className="w-full lg:w-2/4 2xl:ml-[-35px]">
    <div className="relative w-full aspect-square lg:aspect-[4/3] h-full">
      <img
        src={tabsData[activeTab].img}
        alt={tabsData[activeTab].title}
        className="rounded-lg shadow-md w-full h-full object-cover"
      />
      {/* Decorative elements remain same */}
    </div>
  </div>

  {/* Text Column (50% width)  */}
  <div className="w-full lg:w-3/4 flex">
  <div className="bg-white p-6 rounded-lg shadow-cases w-full max-w-[500px] mx-auto lg:mx-0 flex flex-col h-full">
    <div className="flex items-center gap-3 text-PrimaryColor-0 text-lg mb-5"> {/* Reduced mb-3 to mb-1 */}
      <IoIosCheckmarkCircleOutline className="flex-shrink-0" />
      <span className="font-semibold text-[25px] ">{tabsData[activeTab].title}</span>
    </div>
    <div className="flex-grow">
      <p
        className="font-FiraSans text-TextColor2-0 leading-tight"
        style={{ lineHeight: '2.2' }} 
        dangerouslySetInnerHTML={{ __html: tabsData[activeTab].desc }}
      />
      </div>
    </div>
  </div>
</div>
</div>

      {/* Decorative Shapes */}
      <img
        src={whyChooseShape}
        alt=""
        className="absolute -z-10 top-[10%] left-[85%] animate-rotate hidden 2xl:block"
      />
      <img
        src={whyChooseShape2}
        alt=""
        className="absolute -z-10 bottom-40 right-[11%] animate-rotate hidden 2xl:block"
      />
    </section>
  );
};

export default WhyChoose;
